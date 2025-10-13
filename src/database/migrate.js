const fs = require('fs');
const path = require('path');
const { query, closePool } = require('../config/database');
const logger = require('../utils/logger');

/**
 * Run database migrations
 */
const runMigrations = async () => {
  try {
    logger.info('Starting database migrations...');

    // Read SQL file
    const sqlFile = path.join(__dirname, '..', '..', 'scripts', 'init-db.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    // Split by semicolon and execute each statement
    const statements = sql
      .split(';')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    // eslint-disable-next-line no-restricted-syntax
    for (const statement of statements) {
      // eslint-disable-next-line no-await-in-loop
      await query(statement);
    }

    logger.info('✓ Database migrations completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await closePool();
  }
};

/**
 * Rollback migrations
 */
const rollbackMigrations = async () => {
  try {
    logger.info('Rolling back database migrations...');

    await query('DROP TABLE IF EXISTS tasks CASCADE');
    await query('DROP TABLE IF EXISTS users CASCADE');
    await query('DROP FUNCTION IF EXISTS update_updated_at_column CASCADE');

    logger.info('✓ Rollback completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Rollback failed:', error);
    process.exit(1);
  } finally {
    await closePool();
  }
};

// Check command line arguments
const command = process.argv[2];

if (command === 'rollback') {
  rollbackMigrations();
} else {
  runMigrations();
}
