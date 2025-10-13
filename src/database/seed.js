const bcrypt = require('bcrypt');
const { query, closePool } = require('../config/database');
const logger = require('../utils/logger');
const { v4: uuidv4 } = require('uuid');

/**
 * Seed database with sample data
 */
const seedDatabase = async () => {
  try {
    logger.info('Starting database seeding...');

    // Create demo users
    const hashedPassword = await bcrypt.hash('Password123', 12);
    
    const users = [
      {
        id: uuidv4(),
        email: 'demo@example.com',
        password: hashedPassword,
        name: 'Demo User'
      },
      {
        id: uuidv4(),
        email: 'john@example.com',
        password: hashedPassword,
        name: 'John Doe'
      }
    ];

    // Insert users
    for (const user of users) {
      await query(
        'INSERT INTO users (id, email, password, name) VALUES ($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING',
        [user.id, user.email, user.password, user.name]
      );
      logger.info(`Created user: ${user.email}`);
    }

    // Create sample tasks for first user
    const tasks = [
      {
        user_id: users[0].id,
        title: 'Complete project documentation',
        description: 'Write comprehensive README and API documentation',
        status: 'in_progress',
        priority: 'high',
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      },
      {
        user_id: users[0].id,
        title: 'Set up CI/CD pipeline',
        description: 'Configure GitHub Actions for automated testing and deployment',
        status: 'completed',
        priority: 'high',
        due_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        user_id: users[0].id,
        title: 'Write unit tests',
        description: 'Achieve 80% code coverage with comprehensive tests',
        status: 'pending',
        priority: 'medium',
        due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days from now
      },
      {
        user_id: users[0].id,
        title: 'Deploy to production',
        description: 'Deploy application to production environment',
        status: 'pending',
        priority: 'high',
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
      },
      {
        user_id: users[1].id,
        title: 'Code review',
        description: 'Review pull requests from team members',
        status: 'pending',
        priority: 'medium',
        due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
      }
    ];

    // Insert tasks
    for (const task of tasks) {
      await query(
        'INSERT INTO tasks (user_id, title, description, status, priority, due_date) VALUES ($1, $2, $3, $4, $5, $6)',
        [task.user_id, task.title, task.description, task.status, task.priority, task.due_date]
      );
    }

    logger.info(`✓ Created ${tasks.length} sample tasks`);
    logger.info('✓ Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await closePool();
  }
};

seedDatabase();
