const express = require('express');
const router = express.Router();
const { testConnection } = require('../config/database');
const logger = require('../utils/logger');

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API and its dependencies
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                 uptime:
 *                   type: number
 *                 environment:
 *                   type: string
 *                 services:
 *                   type: object
 *       503:
 *         description: API is unhealthy
 */
router.get('/health', async (req, res) => {
  const healthcheck = {
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    services: {
      database: 'unknown',
      api: 'healthy'
    }
  };

  try {
    // Check database connection
    const dbHealthy = await testConnection();
    healthcheck.services.database = dbHealthy ? 'healthy' : 'unhealthy';

    if (!dbHealthy) {
      healthcheck.success = false;
      healthcheck.status = 'degraded';
      logger.warn('Health check: Database unhealthy');
      return res.status(503).json(healthcheck);
    }

    res.status(200).json(healthcheck);
  } catch (error) {
    healthcheck.success = false;
    healthcheck.status = 'unhealthy';
    healthcheck.services.database = 'error';
    logger.error('Health check failed:', error);
    res.status(503).json(healthcheck);
  }
});

/**
 * @swagger
 * /api/metrics:
 *   get:
 *     summary: Application metrics endpoint
 *     description: Returns application metrics and statistics
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Metrics data
 */
router.get('/metrics', (req, res) => {
  const metrics = {
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
    platform: process.platform,
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'development'
  };

  res.status(200).json(metrics);
});

/**
 * @swagger
 * /api/ready:
 *   get:
 *     summary: Readiness check endpoint
 *     description: Returns whether the application is ready to serve traffic
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Application is ready
 *       503:
 *         description: Application is not ready
 */
router.get('/ready', async (req, res) => {
  try {
    const dbHealthy = await testConnection();
    
    if (dbHealthy) {
      res.status(200).json({
        success: true,
        ready: true,
        message: 'Application is ready'
      });
    } else {
      res.status(503).json({
        success: false,
        ready: false,
        message: 'Application is not ready - database unavailable'
      });
    }
  } catch (error) {
    logger.error('Readiness check failed:', error);
    res.status(503).json({
      success: false,
      ready: false,
      message: 'Application is not ready'
    });
  }
});

module.exports = router;
