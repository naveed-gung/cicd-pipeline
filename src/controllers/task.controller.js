const { validationResult } = require('express-validator');
const { query } = require('../config/database');
const { ApiError, asyncHandler, handleValidationError } = require('../middleware/errorHandler');
const logger = require('../utils/logger');

/**
 * Get all tasks for authenticated user
 */
const getAllTasks = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { status, priority, page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  // Build query
  let queryText = `
    SELECT id, title, description, status, priority, due_date, created_at, updated_at
    FROM tasks
    WHERE user_id = $1
  `;
  const queryParams = [req.user.id];
  let paramCount = 1;

  if (status) {
    paramCount++;
    queryText += ` AND status = $${paramCount}`;
    queryParams.push(status);
  }

  if (priority) {
    paramCount++;
    queryText += ` AND priority = $${paramCount}`;
    queryParams.push(priority);
  }

  queryText += ` ORDER BY created_at DESC LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
  queryParams.push(limit, offset);

  // Get tasks
  const result = await query(queryText, queryParams);

  // Get total count
  let countQuery = 'SELECT COUNT(*) FROM tasks WHERE user_id = $1';
  const countParams = [req.user.id];
  
  if (status) {
    countQuery += ' AND status = $2';
    countParams.push(status);
  }
  if (priority) {
    const paramIndex = countParams.length + 1;
    countQuery += ` AND priority = $${paramIndex}`;
    countParams.push(priority);
  }

  const countResult = await query(countQuery, countParams);
  const total = parseInt(countResult.rows[0].count);

  res.status(200).json({
    success: true,
    data: {
      tasks: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    }
  });
});

/**
 * Get task by ID
 */
const getTaskById = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { id } = req.params;

  const result = await query(
    `SELECT id, title, description, status, priority, due_date, created_at, updated_at
     FROM tasks
     WHERE id = $1 AND user_id = $2`,
    [id, req.user.id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, 'Task not found');
  }

  res.status(200).json({
    success: true,
    data: {
      task: result.rows[0]
    }
  });
});

/**
 * Create new task
 */
const createTask = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { title, description, status = 'pending', priority = 'medium', dueDate } = req.body;

  const result = await query(
    `INSERT INTO tasks (user_id, title, description, status, priority, due_date)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, title, description, status, priority, due_date, created_at, updated_at`,
    [req.user.id, title, description, status, priority, dueDate || null]
  );

  logger.info('Task created:', { taskId: result.rows[0].id, userId: req.user.id });

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: {
      task: result.rows[0]
    }
  });
});

/**
 * Update task
 */
const updateTask = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;

  // Check if task exists and belongs to user
  const existingTask = await query(
    'SELECT id FROM tasks WHERE id = $1 AND user_id = $2',
    [id, req.user.id]
  );

  if (existingTask.rows.length === 0) {
    throw new ApiError(404, 'Task not found');
  }

  // Build update query dynamically
  const updates = [];
  const values = [];
  let paramCount = 0;

  if (title !== undefined) {
    paramCount++;
    updates.push(`title = $${paramCount}`);
    values.push(title);
  }
  if (description !== undefined) {
    paramCount++;
    updates.push(`description = $${paramCount}`);
    values.push(description);
  }
  if (status !== undefined) {
    paramCount++;
    updates.push(`status = $${paramCount}`);
    values.push(status);
  }
  if (priority !== undefined) {
    paramCount++;
    updates.push(`priority = $${paramCount}`);
    values.push(priority);
  }
  if (dueDate !== undefined) {
    paramCount++;
    updates.push(`due_date = $${paramCount}`);
    values.push(dueDate);
  }

  if (updates.length === 0) {
    throw new ApiError(400, 'No fields to update');
  }

  updates.push(`updated_at = NOW()`);
  values.push(id, req.user.id);

  const result = await query(
    `UPDATE tasks 
     SET ${updates.join(', ')}
     WHERE id = $${paramCount + 1} AND user_id = $${paramCount + 2}
     RETURNING id, title, description, status, priority, due_date, created_at, updated_at`,
    values
  );

  logger.info('Task updated:', { taskId: id, userId: req.user.id });

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: {
      task: result.rows[0]
    }
  });
});

/**
 * Delete task
 */
const deleteTask = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return handleValidationError(errors.array());
  }

  const { id } = req.params;

  const result = await query(
    'DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING id',
    [id, req.user.id]
  );

  if (result.rows.length === 0) {
    throw new ApiError(404, 'Task not found');
  }

  logger.info('Task deleted:', { taskId: id, userId: req.user.id });

  res.status(200).json({
    success: true,
    message: 'Task deleted successfully'
  });
});

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
