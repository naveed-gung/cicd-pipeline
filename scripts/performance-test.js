import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');
const responseTime = new Trend('response_time');

// Test configuration
export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Ramp up to 10 users
    { duration: '1m', target: 50 },   // Ramp up to 50 users
    { duration: '2m', target: 100 },  // Stay at 100 users
    { duration: '30s', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    http_req_failed: ['rate<0.01'],   // Error rate should be less than 1%
    errors: ['rate<0.1'],              // Custom error rate should be less than 10%
  },
};

const BASE_URL = __ENV.API_URL || 'http://localhost:3000';

// Setup function - runs once per VU
export function setup() {
  // Register a test user
  const registerRes = http.post(`${BASE_URL}/api/v1/auth/register`, JSON.stringify({
    email: `test${Date.now()}@example.com`,
    password: 'Password123',
    name: 'Performance Test User'
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  return { token: registerRes.json('data.token') };
}

// Main test function
export default function (data) {
  // Health check
  let res = http.get(`${BASE_URL}/api/health`);
  check(res, {
    'health check status is 200': (r) => r.status === 200,
    'health check response time < 200ms': (r) => r.timings.duration < 200,
  }) || errorRate.add(1);
  responseTime.add(res.timings.duration);

  sleep(1);

  // Get tasks (authenticated)
  res = http.get(`${BASE_URL}/api/v1/tasks`, {
    headers: {
      'Authorization': `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  });
  check(res, {
    'get tasks status is 200': (r) => r.status === 200,
    'get tasks response time < 500ms': (r) => r.timings.duration < 500,
  }) || errorRate.add(1);
  responseTime.add(res.timings.duration);

  sleep(1);

  // Create task (authenticated)
  res = http.post(`${BASE_URL}/api/v1/tasks`, JSON.stringify({
    title: 'Performance test task',
    description: 'This is a test task created during load testing',
    priority: 'medium',
    status: 'pending'
  }), {
    headers: {
      'Authorization': `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
  });
  check(res, {
    'create task status is 201': (r) => r.status === 201,
    'create task response time < 1000ms': (r) => r.timings.duration < 1000,
  }) || errorRate.add(1);
  responseTime.add(res.timings.duration);

  sleep(2);
}

// Teardown function - runs once after all VUs
export function teardown(data) {
  console.log('Performance test completed');
}
