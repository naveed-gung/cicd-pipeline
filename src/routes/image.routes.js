const express = require('express');

const router = express.Router();
const axios = require('axios');
const { auth } = require('../middleware/auth');
const logger = require('../utils/logger');

// Get serverless API config from environment
const { SERVERLESS_API_URL } = process.env;
const { SERVERLESS_API_KEY } = process.env;

// Validate configuration
if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
  logger.warn('Serverless API configuration not found. Image routes will not work.');
}

/**
 * @swagger
 * /api/images/upload:
 *   post:
 *     summary: Get pre-signed URL for image upload
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fileName
 *               - fileType
 *             properties:
 *               fileName:
 *                 type: string
 *                 example: photo.jpg
 *               fileType:
 *                 type: string
 *                 example: image/jpeg
 *     responses:
 *       200:
 *         description: Pre-signed URL generated successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/upload', auth, async (req, res, next) => {
  try {
    if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
      return res.status(503).json({
        error: 'Image service not configured',
        message: 'Please set SERVERLESS_API_URL and SERVERLESS_API_KEY environment variables'
      });
    }

    const { fileName, fileType } = req.body;

    // Validate input
    if (!fileName || !fileType) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['fileName', 'fileType']
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(fileType)) {
      return res.status(400).json({
        error: 'Invalid file type',
        allowed: allowedTypes
      });
    }

    logger.info(`Requesting upload URL for ${fileName} (${fileType})`, {
      userId: req.user.id,
      fileName,
      fileType
    });

    // Get pre-signed URL from serverless API
    const response = await axios.post(
      `${SERVERLESS_API_URL}/images/upload`,
      { fileName, fileType },
      {
        headers: {
          'x-api-key': SERVERLESS_API_KEY,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      }
    );

    logger.info('Upload URL generated successfully', {
      userId: req.user.id,
      imageId: response.data.imageId
    });

    res.json({
      success: true,
      data: response.data,
      message: 'Upload URL generated successfully'
    });
  } catch (error) {
    logger.error('Error generating upload URL:', {
      error: error.message,
      userId: req.user?.id,
      url: SERVERLESS_API_URL
    });

    if (error.response) {
      // Serverless API returned an error
      return res.status(error.response.status).json({
        error: 'Image service error',
        message: error.response.data?.message || error.message
      });
    }

    next(error);
  }
});

/**
 * @swagger
 * /api/images:
 *   get:
 *     summary: List all images
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Maximum number of images to return
 *     responses:
 *       200:
 *         description: List of images
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, async (req, res, next) => {
  try {
    if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
      return res.status(503).json({
        error: 'Image service not configured',
        message: 'Please set SERVERLESS_API_URL and SERVERLESS_API_KEY environment variables'
      });
    }

    const { limit = 10 } = req.query;

    logger.info('Fetching image list', {
      userId: req.user.id,
      limit
    });

    // Get images from serverless API
    const response = await axios.get(`${SERVERLESS_API_URL}/images`, {
      headers: {
        'x-api-key': SERVERLESS_API_KEY
      },
      params: { limit },
      timeout: 10000
    });

    logger.info('Image list fetched successfully', {
      userId: req.user.id,
      count: response.data.images?.length || 0
    });

    res.json({
      success: true,
      data: response.data
    });
  } catch (error) {
    logger.error('Error fetching image list:', {
      error: error.message,
      userId: req.user?.id
    });

    if (error.response) {
      return res.status(error.response.status).json({
        error: 'Image service error',
        message: error.response.data?.message || error.message
      });
    }

    next(error);
  }
});

/**
 * @swagger
 * /api/images/{id}:
 *   get:
 *     summary: Get image details and download URL
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Image details with download URL
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */
router.get('/:id', auth, async (req, res, next) => {
  try {
    if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
      return res.status(503).json({
        error: 'Image service not configured',
        message: 'Please set SERVERLESS_API_URL and SERVERLESS_API_KEY environment variables'
      });
    }

    const { id } = req.params;

    logger.info('Fetching image details', {
      userId: req.user.id,
      imageId: id
    });

    const response = await axios.get(`${SERVERLESS_API_URL}/images/${id}`, {
      headers: {
        'x-api-key': SERVERLESS_API_KEY
      },
      timeout: 10000
    });

    logger.info('Image details fetched successfully', {
      userId: req.user.id,
      imageId: id
    });

    res.json({
      success: true,
      data: response.data
    });
  } catch (error) {
    logger.error('Error fetching image details:', {
      error: error.message,
      userId: req.user?.id,
      imageId: req.params.id
    });

    if (error.response) {
      return res.status(error.response.status).json({
        error: 'Image service error',
        message: error.response.data?.message || error.message
      });
    }

    next(error);
  }
});

/**
 * @swagger
 * /api/images/{id}:
 *   delete:
 *     summary: Delete an image
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', auth, async (req, res, next) => {
  try {
    if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
      return res.status(503).json({
        error: 'Image service not configured',
        message: 'Please set SERVERLESS_API_URL and SERVERLESS_API_KEY environment variables'
      });
    }

    const { id } = req.params;

    logger.info('Deleting image', {
      userId: req.user.id,
      imageId: id
    });

    const response = await axios.delete(`${SERVERLESS_API_URL}/images/${id}`, {
      headers: {
        'x-api-key': SERVERLESS_API_KEY
      },
      timeout: 10000
    });

    logger.info('Image deleted successfully', {
      userId: req.user.id,
      imageId: id
    });

    res.json({
      success: true,
      data: response.data,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    logger.error('Error deleting image:', {
      error: error.message,
      userId: req.user?.id,
      imageId: req.params.id
    });

    if (error.response) {
      return res.status(error.response.status).json({
        error: 'Image service error',
        message: error.response.data?.message || error.message
      });
    }

    next(error);
  }
});

/**
 * @swagger
 * /api/images/{id}/status:
 *   get:
 *     summary: Get image processing status
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Processing status
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */
router.get('/:id/status', auth, async (req, res, next) => {
  try {
    if (!SERVERLESS_API_URL || !SERVERLESS_API_KEY) {
      return res.status(503).json({
        error: 'Image service not configured',
        message: 'Please set SERVERLESS_API_URL and SERVERLESS_API_KEY environment variables'
      });
    }

    const { id } = req.params;

    logger.info('Fetching image processing status', {
      userId: req.user.id,
      imageId: id
    });

    const response = await axios.get(`${SERVERLESS_API_URL}/images/${id}/status`, {
      headers: {
        'x-api-key': SERVERLESS_API_KEY
      },
      timeout: 10000
    });

    logger.info('Image status fetched successfully', {
      userId: req.user.id,
      imageId: id,
      status: response.data.status
    });

    res.json({
      success: true,
      data: response.data
    });
  } catch (error) {
    logger.error('Error fetching image status:', {
      error: error.message,
      userId: req.user?.id,
      imageId: req.params.id
    });

    if (error.response) {
      return res.status(error.response.status).json({
        error: 'Image service error',
        message: error.response.data?.message || error.message
      });
    }

    next(error);
  }
});

module.exports = router;
