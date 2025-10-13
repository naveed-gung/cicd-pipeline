const logger = require('../utils/logger');

/**
 * Custom API Error class
 */
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Global error handler middleware
 */
const errorHandler = (err, req, res, _next) => {
  const { statusCode = 500, message } = err;

  // Default to 500 Internal Server Error handled above

  // Log error
  if (statusCode >= 500) {
    logger.error('Error:', {
      statusCode,
      message: err.message,
      stack: err.stack,
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
      userId: req.user?.id
    });
  } else {
    logger.warn('Client error:', {
      statusCode,
      message: err.message,
      url: req.originalUrl,
      method: req.method
    });
  }

  // Send error response
  const response = {
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      details: err.details
    })
  };

  res.status(statusCode).json(response);
};

/**
 * Handle 404 errors
 */
const notFound = (req, res, next) => {
  const error = new ApiError(404, `Route not found: ${req.originalUrl}`);
  next(error);
};

/**
 * Handle async errors
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Validation error handler
 */
const handleValidationError = (errors) => {
  const formattedErrors = errors.map((err) => ({
    field: err.param,
    message: err.msg,
    value: err.value
  }));

  throw new ApiError(400, 'Validation failed', true, { errors: formattedErrors });
};

/**
 * Database error handler
 */
const handleDatabaseError = (error) => {
  logger.error('Database error:', error);

  // PostgreSQL unique constraint violation
  if (error.code === '23505') {
    return new ApiError(409, 'Resource already exists');
  }

  // PostgreSQL foreign key constraint violation
  if (error.code === '23503') {
    return new ApiError(400, 'Referenced resource does not exist');
  }

  // PostgreSQL not null constraint violation
  if (error.code === '23502') {
    return new ApiError(400, 'Required field is missing');
  }

  // Default database error
  return new ApiError(500, 'Database operation failed');
};

module.exports = {
  ApiError,
  errorHandler,
  notFound,
  asyncHandler,
  handleValidationError,
  handleDatabaseError
};
