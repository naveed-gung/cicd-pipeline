const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { query } = require('../config/database');
const { ApiError, asyncHandler, handleValidationError } = require('../middleware/errorHandler');
const { generateToken, generateRefreshToken, verifyRefreshToken } = require('../middleware/auth');
const logger = require('../utils/logger');

/**
 * Register a new user
 */
const register = asyncHandler(async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { email, password, name } = req.body;

  // Check if user already exists
  const existingUser = await query(
    'SELECT id FROM users WHERE email = $1',
    [email]
  );

  if (existingUser.rows.length > 0) {
    throw new ApiError(409, 'User with this email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  const result = await query(
    `INSERT INTO users (email, password, name) 
     VALUES ($1, $2, $3) 
     RETURNING id, email, name, created_at`,
    [email, hashedPassword, name]
  );

  const user = result.rows[0];

  // Generate tokens
  const token = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  logger.info('User registered successfully:', { userId: user.id, email: user.email });

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at
      },
      token,
      refreshToken
    }
  });
});

/**
 * Login user
 */
const login = asyncHandler(async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { email, password } = req.body;

  // Find user
  const result = await query(
    'SELECT id, email, name, password, created_at FROM users WHERE email = $1',
    [email]
  );

  if (result.rows.length === 0) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const user = result.rows[0];

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    logger.warn('Failed login attempt:', { email });
    throw new ApiError(401, 'Invalid email or password');
  }

  // Generate tokens
  const token = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  logger.info('User logged in successfully:', { userId: user.id, email: user.email });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at
      },
      token,
      refreshToken
    }
  });
});

/**
 * Refresh access token
 */
const refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken: token } = req.body;

  if (!token) {
    throw new ApiError(400, 'Refresh token is required');
  }

  // Verify refresh token
  const decoded = verifyRefreshToken(token);

  // Get user
  const result = await query(
    'SELECT id, email, name FROM users WHERE id = $1',
    [decoded.id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, 'User not found');
  }

  const user = result.rows[0];

  // Generate new tokens
  const newToken = generateToken(user);
  const newRefreshToken = generateRefreshToken(user);

  logger.info('Token refreshed:', { userId: user.id });

  res.status(200).json({
    success: true,
    message: 'Token refreshed successfully',
    data: {
      token: newToken,
      refreshToken: newRefreshToken
    }
  });
});

/**
 * Get current user profile
 */
const getProfile = asyncHandler(async (req, res) => {
  const result = await query(
    'SELECT id, email, name, created_at FROM users WHERE id = $1',
    [req.user.id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, 'User not found');
  }

  const user = result.rows[0];

  res.status(200).json({
    success: true,
    data: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at
      }
    }
  });
});

/**
 * Logout user
 */
const logout = asyncHandler(async (req, res) => {
  // In a production app, you would invalidate the token here
  // For example, by storing it in a blacklist with Redis

  logger.info('User logged out:', { userId: req.user.id });

  res.status(200).json({
    success: true,
    message: 'Logout successful'
  });
});

module.exports = {
  register,
  login,
  refreshToken,
  getProfile,
  logout
};
