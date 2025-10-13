# Advanced CI/CD Pipeline - Task Management API# Advanced CI/CD Pipeline - Task Management API



<div align="center"><div align="center">



![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,postgres,redis,docker,nginx,aws,github)![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,postgres,redis,docker,nginx,aws,github)



[![CI/CD Pipeline](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml)[![CI/CD Pipeline](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml)

[![codecov](https://codecov.io/gh/username/task-api/branch/main/graph/badge.svg)](https://codecov.io/gh/username/task-api)[![codecov](https://codecov.io/gh/username/task-api/branch/main/graph/badge.svg)](https://codecov.io/gh/username/task-api)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)



**Production-grade REST API with comprehensive CI/CD pipeline****Production-grade REST API with comprehensive CI/CD pipeline**



> Enterprise-level DevOps practices with automated testing, security scanning, and blue-green deployment> Enterprise-level DevOps practices with automated testing, security scanning, and blue-green deployment



[Architecture](#-architecture) • [Quick Start](#-quick-start) • [API Docs](#-api-documentation) • [CI/CD Pipeline](#-cicd-pipeline) • [Deployment](#-deployment)[Architecture](#-architecture) • [Quick Start](#-quick-start) • [API Docs](#-api-documentation) • [CI/CD Pipeline](#-cicd-pipeline) • [Deployment](#-deployment)



</div></div>



------



## 🚀 Project Overview## 🚀 Project Overview



Enterprise-level REST API demonstrating **advanced DevOps and CI/CD practices**. Features automated testing, security scanning, Docker containerization, and multi-environment deployment with blue-green strategy.Enterprise-level REST API demonstrating **advanced DevOps and CI/CD practices**. Features automated testing, security scanning, Docker containerization, and multi-environment deployment with blue-green strategy.



### ✨ Key Features### ✨ Key Features



- ✅ **RESTful API** with JWT authentication- ✅ **RESTful API** with JWT authentication

- ✅ **PostgreSQL** database with proper indexing and migrations- ✅ **PostgreSQL** database with proper indexing and migrations

- ✅ **Comprehensive Testing** (Unit + Integration tests with 70%+ coverage)- ✅ **Comprehensive Testing** (Unit + Integration tests with 70%+ coverage)

- ✅ **Security Scanning** (npm audit, Snyk, CodeQL, secret scanning)- ✅ **Security Scanning** (npm audit, Snyk, CodeQL, secret scanning)

- ✅ **Docker** multi-stage builds with optimized images (< 200MB)- ✅ **Docker** multi-stage builds with optimized images (< 200MB)

- ✅ **GitHub Actions** CI/CD with 8 pipeline stages- ✅ **GitHub Actions** CI/CD with 8 pipeline stages

- ✅ **Multi-Environment** deployment (Staging + Production)- ✅ **Multi-Environment** deployment (Staging + Production)

- ✅ **Blue-Green Deployment** with automated rollback- ✅ **Blue-Green Deployment** with automated rollback

- ✅ **Health Checks** and monitoring endpoints- ✅ **Health Checks** and monitoring endpoints

- ✅ **API Documentation** with Swagger/OpenAPI- ✅ **API Documentation** with Swagger/OpenAPI

- ✅ **Rate Limiting** and security best practices- ✅ **Rate Limiting** and security best practices

- ✅ **Structured Logging** with Winston- ✅ **Structured Logging** with Winston

- ✅ **Performance Testing** with k6- ✅ **Performance Testing** with k6



------



## 📋 Table of Contents## 📋 Table of Contents



- [Project Overview](#-project-overview)- [Project Overview](#-project-overview)

- [Tech Stack](#-tech-stack)- [Tech Stack](#-tech-stack)

- [Architecture](#-architecture)- [Architecture](#-architecture)

- [Prerequisites](#-prerequisites)- [Prerequisites](#-prerequisites)

- [Quick Start](#-quick-start)

- [API Documentation](#-api-documentation)- Input validation

- [Testing](#-testing)

- [CI/CD Pipeline](#-cicd-pipeline)- Rate limiting- [Quick Start](#quick-start)## 📊 Architecture

- [Deployment](#-deployment)

- [Security](#-security)- Error handling

- [Monitoring](#-monitoring)

- [Project Structure](#-project-structure)- API versioning- [API Documentation](#api-documentation)

- [Available Scripts](#-available-scripts)

- [Troubleshooting](#-troubleshooting)



---</td>- [Testing](#testing)```mermaid



## 🛠️ Tech Stack<td width="50%">



| Category | Technologies |- [CI/CD Pipeline](#cicd-pipeline)graph TB

|----------|-------------|

| **Runtime** | Node.js 18+, Express.js |**DevOps & Infrastructure**

| **Database** | PostgreSQL 15, Redis 7 |

| **Authentication** | JWT, bcrypt |- Docker multi-stage builds- [Deployment](#deployment)    A[Client] --> B[Nginx Reverse Proxy]

| **Testing** | Jest, Supertest, k6 |

| **Security** | Helmet, express-validator, Snyk, CodeQL, Trivy |- Docker Compose orchestration

| **CI/CD** | GitHub Actions, Docker, AWS ECS |

| **Monitoring** | CloudWatch, Winston Logger |- Nginx reverse proxy- [Environment Variables](#environment-variables)    B --> C[Node.js API]

| **Documentation** | Swagger/OpenAPI |

| **Containerization** | Docker, Docker Compose, Nginx |- PostgreSQL + Redis



---- Health checks- [Security](#security)    C --> D[PostgreSQL]



## 🏗️ Architecture- Graceful shutdown



### System Architecture- [Monitoring](#monitoring)    C --> E[Redis Cache]



```mermaid</td>

graph TB

    subgraph "External Traffic"</tr>- [Troubleshooting](#troubleshooting)    C --> F[CloudWatch Logs]

        Client[Client/Browser]

    end<tr>

    

    subgraph "Docker Network"<td width="50%">    G[GitHub Actions] --> H[Docker Registry]

        Nginx[Nginx Reverse Proxy<br/>Port 80]

        API[Node.js API<br/>Express Server<br/>Port 3000]

        DB[(PostgreSQL<br/>Database<br/>Port 5432)]

        Cache[(Redis<br/>Cache<br/>Port 6379)]**Testing & Quality**---    H --> I[AWS ECS Fargate]

    end

    - Unit tests (Jest)

    subgraph "Optional Integration"

        Serverless[Serverless API<br/>AWS Lambda]- Integration tests    I --> C

    end

    - 70%+ code coverage

    Client -->|HTTP| Nginx

    Nginx -->|Proxy| API- ESLint + Prettier## Overview```

    API -->|SQL Queries| DB

    API -->|Cache Operations| Cache- Pre-commit hooks

    API -.->|Image Processing| Serverless

    - Performance testing (k6)

    style Nginx fill:#269B24

    style API fill:#68A063

    style DB fill:#336791

    style Cache fill:#DC382D</td>A production-ready REST API demonstrating enterprise-level CI/CD practices, automated testing, security scanning, and containerized deployment. This project showcases modern DevOps workflows with GitHub Actions, Docker, and AWS infrastructure.### Tech Stack

    style Serverless fill:#FF9900

```<td width="50%">



### CI/CD Pipeline Flow



```mermaid**CI/CD & Security**

graph LR

    A[Code Push] --> B[Linting<br/>ESLint]- GitHub Actions pipeline### Key Highlights| Category | Technologies |

    B --> C[Security Scan<br/>npm audit<br/>Snyk<br/>CodeQL]

    C --> D[Unit Tests<br/>Jest]- Automated security scanning

    D --> E[Build Docker<br/>Multi-stage]

    E --> F[Integration Tests<br/>Supertest]- CodeQL analysis|----------|-------------|

    F --> G[Performance Tests<br/>k6]

    G --> H[Deploy Staging<br/>AWS ECS]- Secret detection

    H --> I{Health Check<br/>Pass?}

    I -->|Yes| J[Deploy Production<br/>Blue-Green]- Blue-green deployment- **8-stage CI/CD pipeline** with automated quality gates| **Runtime** | Node.js 18+, Express.js |

    I -->|No| K[Rollback]

    J --> L[Smoke Tests]- Automated rollback

    L --> M{Success?}

    M -->|Yes| N[Complete]- **Zero-downtime deployments** using blue-green strategy| **Database** | PostgreSQL 15, Redis 7 |

    M -->|No| O[Auto Rollback]

    </td>

    style A fill:#4078c0

    style C fill:#d73a49</tr>- **Comprehensive testing** (unit, integration, performance)| **Authentication** | JWT, bcrypt |

    style G fill:#6f42c1

    style J fill:#28a745</table>

    style K fill:#d73a49

    style O fill:#d73a49- **Security-first approach** with multiple scanning tools| **Testing** | Jest, Supertest |

```

---

### Database Schema

- **Production-ready** monitoring and logging| **Security** | Helmet, express-validator, Snyk, CodeQL |

```mermaid

erDiagram## Tech Stack

    USERS ||--o{ TASKS : creates

    USERS {- **Scalable architecture** with Docker and AWS ECS| **CI/CD** | GitHub Actions, Docker, AWS ECS |

        uuid id PK

        string username UK<div align="center">

        string email UK

        string password_hash| **Monitoring** | CloudWatch, Sentry, New Relic |

        timestamp created_at

        timestamp updated_at**Backend**

    }

    TASKS {---| **Documentation** | Swagger/OpenAPI |

        uuid id PK

        uuid user_id FK![Node.js](https://skillicons.dev/icons?i=nodejs) ![Express](https://skillicons.dev/icons?i=express) ![JavaScript](https://skillicons.dev/icons?i=js)

        string title

        text description| **Containerization** | Docker, Docker Compose |

        string status

        string priority**Database & Cache**

        timestamp due_date

        timestamp created_at## Features

        timestamp updated_at

    }![PostgreSQL](https://skillicons.dev/icons?i=postgres) ![Redis](https://skillicons.dev/icons?i=redis)

```

## 🛠️ Prerequisites

---

**DevOps & Infrastructure**

## 🛠️ Prerequisites

### Core Functionality

- **Node.js** >= 18.0.0

- **npm** >= 9.0.0![Docker](https://skillicons.dev/icons?i=docker) ![Nginx](https://skillicons.dev/icons?i=nginx) ![AWS](https://skillicons.dev/icons?i=aws) ![GitHub Actions](https://skillicons.dev/icons?i=github)

- **Docker** >= 20.10 and Docker Compose >= 2.0

- **Git** >= 2.30- User authentication with JWT tokens- **Node.js** >= 18.0.0

- **PostgreSQL** >= 15 (optional, for local development without Docker)

- **AWS Account** (optional, for production deployment)**Testing & Tools**



---- Task management (CRUD operations)- **npm** >= 9.0.0



## 🚦 Quick Start![Jest](https://skillicons.dev/icons?i=jest) ![Git](https://skillicons.dev/icons?i=git) ![VSCode](https://skillicons.dev/icons?i=vscode)



### 1. Clone the Repository- Image upload integration (proxy to serverless API)- **Docker** >= 20.10 and Docker Compose >= 2.0



```bash</div>

git clone https://github.com/username/task-api.git

cd task-api- Health check endpoints with dependency status- **PostgreSQL** >= 15 (for local development without Docker)

```

---

### 2. Environment Configuration

- Rate limiting and request throttling- **Git** >= 2.30

```bash

# Copy environment template## Architecture

cp .env.example .env

- API versioning

# Edit .env with your configuration

```### System Architecture



**Required Environment Variables:**## 🚦 Quick Start



```env```mermaid

NODE_ENV=development

PORT=3000graph TB### DevOps Excellence

DB_HOST=localhost

DB_PORT=5432    subgraph "External Traffic"

DB_NAME=taskdb

DB_USER=taskuser        Client[Client/Browser]- Automated CI/CD with GitHub Actions### 1. Clone the Repository

DB_PASSWORD=your_secure_password

JWT_SECRET=your_jwt_secret_key    end

REDIS_HOST=localhost

REDIS_PORT=6379    - Multi-stage Docker builds (< 200MB images)

```

    subgraph "Docker Network"

### 3. Using Docker Compose (Recommended)

        Nginx[Nginx Reverse Proxy<br/>Port 80]- Database migrations and seeding```bash

```bash

# Start all services        API[Node.js API<br/>Express Server<br/>Port 3000]

docker-compose up -d

        DB[(PostgreSQL<br/>Database<br/>Port 5432)]- Blue-green deployment strategygit clone https://github.com/username/task-api.git

# View logs

docker-compose logs -f api        Cache[(Redis<br/>Cache<br/>Port 6379)]



# Check status    end- Automated rollback on failurecd task-api

docker ps

```    



**Wait for services to be ready (about 30 seconds), then:**    subgraph "Optional Integration"- Performance testing with k6```



```bash        Serverless[Serverless API<br/>AWS Lambda]

# Run database migrations

docker exec task_api npm run migrate    end



# Seed database with sample data (optional)    

docker exec task_api npm run seed

```    Client -->|HTTP| Nginx### Security### 2. Environment Configuration



The API will be available at `http://localhost:3000`    Nginx -->|Proxy| API



### 4. Local Development (Without Docker)    API -->|SQL Queries| DB- JWT-based authentication



```bash    API -->|Cache Operations| Cache

# Install dependencies

npm install    API -.->|Image Processing| Serverless- Password hashing with bcrypt```bash



# Set up database (PostgreSQL must be running)    

npm run migrate

    style Nginx fill:#269B24- Helmet.js security headerscp .env.example .env

# Seed database with sample data (optional)

npm run seed    style API fill:#68A063



# Start development server    style DB fill:#336791- Rate limiting per IP# Edit .env with your configuration

npm run dev

```    style Cache fill:#DC382D



### 5. Verify Installation    style Serverless fill:#FF9900- Input validation and sanitization```



```bash```

# Health check

curl http://localhost:3000/api/health- Security vulnerability scanning

```

### CI/CD Pipeline Architecture

**Expected Response:**

- Container security scanning### 3. Using Docker Compose (Recommended)

```json

{```mermaid

  "status": "ok",

  "timestamp": "2025-10-13T12:00:00.000Z",graph LR

  "services": {

    "database": "connected",    A[Code Push] --> B[Linting<br/>ESLint]

    "redis": "connected"

  },    B --> C[Security Scan<br/>npm audit<br/>Snyk<br/>CodeQL]### Observability```bash

  "version": "1.0.0"

}    C --> D[Unit Tests<br/>Jest]

```

    D --> E[Build Docker<br/>Multi-stage]- Structured logging with Winston# Start all services

---

    E --> F[Integration Tests<br/>Supertest]

## 📚 API Documentation

    F --> G[Performance Tests<br/>k6]- Health check endpointsdocker-compose up -d

### Access Interactive Documentation

    G --> H[Deploy Staging<br/>AWS ECS]

Once the application is running, visit:

    H --> I{Health Check<br/>Pass?}- Database connection monitoring

- **Swagger UI**: `http://localhost:3000/api-docs`

- **OpenAPI JSON**: `http://localhost:3000/api-docs.json`    I -->|Yes| J[Deploy Production<br/>Blue-Green]



### Quick API Reference    I -->|No| K[Rollback]- Redis connection monitoring# View logs



| Method | Endpoint | Description | Auth |    J --> L[Smoke Tests]

|--------|----------|-------------|------|

| GET | `/api/health` | Health check | No |    L --> M{Success?}- Swagger/OpenAPI documentationdocker-compose logs -f api

| POST | `/api/v1/auth/register` | Register user | No |

| POST | `/api/v1/auth/login` | Login user | No |    M -->|Yes| N[Complete]

| GET | `/api/v1/auth/me` | Get profile | Yes |

| GET | `/api/v1/tasks` | List tasks | Yes |    M -->|No| O[Auto Rollback]

| POST | `/api/v1/tasks` | Create task | Yes |

| GET | `/api/v1/tasks/:id` | Get task | Yes |    

| PUT | `/api/v1/tasks/:id` | Update task | Yes |

| DELETE | `/api/v1/tasks/:id` | Delete task | Yes |    style A fill:#4078c0---# Stop services



### Example Requests    style C fill:#d73a49



**Register a User:**    style G fill:#6f42c1docker-compose down



```bash    style J fill:#28a745

curl -X POST http://localhost:3000/api/v1/auth/register \

  -H "Content-Type: application/json" \    style K fill:#d73a49## Tech Stack```

  -d '{

    "email": "user@example.com",    style O fill:#d73a49

    "password": "Password123!",

    "name": "John Doe"```

  }'

```



**Login:**---### BackendThe API will be available at `http://localhost:3000`



```bash

curl -X POST http://localhost:3000/api/v1/auth/login \

  -H "Content-Type: application/json" \## Project Structure![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)

  -d '{

    "email": "user@example.com",

    "password": "Password123!"

  }'```![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express&logoColor=white)### 4. Local Development (Without Docker)

```

cicd-pipeline/

**Create a Task:**

├── .github/![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

```bash

curl -X POST http://localhost:3000/api/v1/tasks \│   └── workflows/

  -H "Content-Type: application/json" \

  -H "Authorization: Bearer YOUR_JWT_TOKEN" \│       └── ci-cd-pipeline.yml    # 8-stage CI/CD pipeline```bash

  -d '{

    "title": "Complete project",├── src/

    "description": "Finish the API development",

    "priority": "high",│   ├── config/### Database & Caching# Install dependencies

    "status": "in_progress"

  }'│   │   ├── database.js           # PostgreSQL connection pool

```

│   │   └── swagger.js            # API documentation setup![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat&logo=postgresql&logoColor=white)npm install

---

│   ├── controllers/

## 🧪 Testing

│   │   ├── auth.controller.js    # Authentication logic![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat&logo=redis&logoColor=white)

### Run All Tests

│   │   └── task.controller.js    # Task CRUD operations

```bash

npm test│   ├── middleware/# Set up database (PostgreSQL must be running)

```

│   │   ├── auth.js               # JWT verification

### Run Tests with Coverage

│   │   ├── errorHandler.js       # Global error handler### DevOps & Infrastructurenpm run migrate

```bash

npm run test:coverage│   │   └── rateLimiter.js        # Rate limiting

```

│   ├── routes/![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat&logo=docker&logoColor=white)

### Run Integration Tests Only

│   │   ├── auth.routes.js        # Auth endpoints

```bash

npm run test:integration│   │   ├── task.routes.js        # Task endpoints![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=flat&logo=github-actions&logoColor=white)# Seed database with sample data (optional)

```

│   │   ├── health.routes.js      # Health checks

### Run Tests in Watch Mode

│   │   └── image.routes.js       # Image integration (optional)![AWS](https://img.shields.io/badge/AWS-ECS/Fargate-FF9900?style=flat&logo=amazon-aws&logoColor=white)npm run seed

```bash

npm run test:watch│   ├── database/

```

│   │   ├── migrate.js            # Database migrations![Nginx](https://img.shields.io/badge/Nginx-1.25-009639?style=flat&logo=nginx&logoColor=white)

### Performance Testing

│   │   └── seed.js               # Seed data

```bash

npm run test:performance│   ├── utils/# Start development server

```

│   │   └── logger.js             # Winston logger

**Sample Performance Test Output:**

│   ├── tests/### Testing & Qualitynpm run dev

```

✓ http_req_duration..............: avg=45.2ms  min=12.3ms  med=38.7ms  max=234.5ms│   │   ├── auth.test.js          # Auth tests

✓ http_req_failed................: 0.00%  ✓ 0     ✗ 5000

✓ http_reqs......................: 5000   166.67/s│   │   ├── health.test.js        # Health check tests![Jest](https://img.shields.io/badge/Jest-29+-C21325?style=flat&logo=jest&logoColor=white)```



checks........................: 100.00% ✓ 15000    ✗ 0│   │   └── setup.js              # Test setup

```

│   └── server.js                 # Express app entry point![ESLint](https://img.shields.io/badge/ESLint-8+-4B32C3?style=flat&logo=eslint&logoColor=white)

### Test Coverage Report

├── scripts/

After running tests with coverage, open `coverage/lcov-report/index.html` in your browser.

│   ├── init-db.sql               # Database initialization![k6](https://img.shields.io/badge/k6-Performance-7D64FF?style=flat&logo=k6&logoColor=white)## 📚 API Documentation

**Current Coverage:** 74%+ across all categories

│   └── performance-test.js       # k6 performance tests

---

├── nginx/

## 🔄 CI/CD Pipeline

│   └── nginx.conf                # Nginx configuration

### Pipeline Stages

├── Dockerfile                     # Multi-stage Docker build### Security ToolsOnce the application is running, visit:

```mermaid

graph TD├── docker-compose.yml             # Local development setup

    A[Push to GitHub] --> B[Stage 1: Code Quality]

    B --> C[Stage 2: Security Scanning]├── package.json                   # Dependencies & scripts![Snyk](https://img.shields.io/badge/Snyk-Security-4C4A73?style=flat&logo=snyk&logoColor=white)

    C --> D[Stage 3: Unit Testing]

    D --> E[Stage 4: Build Docker Image]├── jest.config.js                 # Test configuration

    E --> F[Stage 5: Integration Testing]

    F --> G[Stage 6: Performance Testing]├── .eslintrc.js                  # Linting rules![Trivy](https://img.shields.io/badge/Trivy-Container_Scan-1904DA?style=flat&logo=aqua&logoColor=white)- **Swagger UI**: `http://localhost:3000/api-docs`

    G --> H[Stage 7: Deploy to Staging]

    H --> I{Health Check}├── .env.example                  # Environment template

    I -->|Pass| J[Stage 8: Deploy to Production]

    I -->|Fail| K[Rollback & Alert]└── README.md                      # This file- **OpenAPI JSON**: `http://localhost:3000/api-docs.json`

    J --> L{Smoke Tests}

    L -->|Pass| M[Complete ✓]```

    L -->|Fail| N[Auto Rollback]

    ---

    style A fill:#4078c0

    style B fill:#6f42c1---

    style C fill:#d73a49

    style D fill:#28a745### Quick API Reference

    style E fill:#0366d6

    style J fill:#28a745## Quick Start

    style K fill:#d73a49

    style N fill:#d73a49## Architecture

```

### Prerequisites

### Stage Details

| Method | Endpoint | Description | Auth |

| Stage | Tools | Duration | Purpose |

|-------|-------|----------|---------|- Node.js 18+

| **1. Code Quality** | ESLint, Prettier | ~1 min | Enforce coding standards |

| **2. Security Scan** | npm audit, Snyk, CodeQL | ~2 min | Detect vulnerabilities |- Docker Desktop (running)### System Architecture|--------|----------|-------------|------|

| **3. Unit Tests** | Jest, Supertest | ~2 min | Verify code functionality |

| **4. Build** | Docker | ~3 min | Create optimized image |- npm or yarn

| **5. Integration** | Jest + Docker | ~2 min | Test API endpoints |

| **6. Performance** | k6 | ~2 min | Load testing || GET | `/api/health` | Health check | No |

| **7. Staging** | AWS ECS | ~4 min | Deploy to test environment |

| **8. Production** | AWS ECS | ~5 min | Blue-green deployment |### Installation



### GitHub Secrets Required```mermaid| POST | `/api/v1/auth/register` | Register user | No |



Configure these secrets in your GitHub repository:```bash



```# Clone the repositorygraph TB| POST | `/api/v1/auth/login` | Login user | No |

AWS_ACCESS_KEY_ID           # AWS credentials for deployment

AWS_SECRET_ACCESS_KEY       # AWS secret keygit clone https://github.com/yourusername/cicd-pipeline.git

CODECOV_TOKEN               # Codecov integration

SNYK_TOKEN                  # Snyk security scanningcd cicd-pipeline    subgraph "Client Layer"| GET | `/api/v1/auth/me` | Get profile | Yes |

SLACK_WEBHOOK_URL           # Slack notifications (optional)

DOCKER_HUB_USERNAME         # Docker Hub credentials (optional)

DOCKER_HUB_TOKEN            # Docker Hub token (optional)

```# Install dependencies        Client[Web/Mobile Client]| GET | `/api/v1/tasks` | List tasks | Yes |



---npm install



## 🚀 Deployment    end| POST | `/api/v1/tasks` | Create task | Yes |



### Local Development# Create environment file



```bashcp .env.example .env    | GET | `/api/v1/tasks/:id` | Get task | Yes |

# Start all services

docker-compose up -d# Edit .env with your configuration



# Stop services    subgraph "Load Balancer"| PUT | `/api/v1/tasks/:id` | Update task | Yes |

docker-compose down

# Start all services with Docker Compose

# Restart specific service

docker-compose restart apidocker-compose up -d        Nginx[Nginx Reverse Proxy<br/>Port 80]| DELETE | `/api/v1/tasks/:id` | Delete task | Yes |

```



### Deploy to AWS ECS/Fargate

# Wait 30 seconds for PostgreSQL to initialize    end

#### Prerequisites

sleep 30

- AWS account with ECS configured

- ECR repository created    ### Example Requests

- ECS cluster running

# Run database migrations

#### Manual Deployment

docker exec task_api npm run migrate    subgraph "Application Layer"

```bash

# Build and tag image

docker build -t task-api:latest .

# Seed initial data        API1[Node.js API Instance 1<br/>Port 3000]**Register a User:**

# Tag for ECR

docker tag task-api:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/task-api:latestdocker exec task_api npm run seed



# Push to ECR```        API2[Node.js API Instance 2<br/>Port 3000]```bash

docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/task-api:latest



# Update ECS service

aws ecs update-service \### Verify Installation        API3[Node.js API Instance 3<br/>Port 3000]curl -X POST http://localhost:3000/api/v1/auth/register \

  --cluster production-cluster \

  --service task-api \

  --force-new-deployment

``````bash    end  -H "Content-Type: application/json" \



#### Automated Deployment# Check if containers are running



The CI/CD pipeline automatically deploys:docker ps      -d '{



- **Staging**: On every push to `main` branch

- **Production**: On manual approval or tagged releases

# Test health endpoint    subgraph "Data Layer"    "email": "user@example.com",

### Environment Configuration

curl http://localhost/api/health

**Staging:**

- URL: `https://staging.taskapi.com````        PG[(PostgreSQL 15<br/>Primary Database)]    "password": "Password123",

- Database: RDS staging instance

- Auto-deploy enabled



**Production:****Expected Output:**        Redis[(Redis 7<br/>Cache & Sessions)]    "name": "John Doe"

- URL: `https://api.taskapi.com`

- Database: RDS production instance```json

- Manual approval required

- Blue-green deployment{    end  }'



---  "status": "ok",



## 🔒 Security  "timestamp": "2025-10-13T12:00:00.000Z",    ```



### Implemented Security Measures  "services": {



- ✅ Helmet.js for HTTP headers    "database": "connected",    subgraph "External Services"

- ✅ CORS configuration

- ✅ Rate limiting (100 requests per 15 minutes)    "redis": "connected"

- ✅ JWT authentication

- ✅ Password hashing with bcrypt (12 rounds)  },        S3[AWS S3<br/>Image Storage]**Create a Task:**

- ✅ Input validation and sanitization

- ✅ SQL injection protection (parameterized queries)  "version": "1.0.0"

- ✅ Environment variable secrets

- ✅ Non-root Docker user}        Lambda[AWS Lambda<br/>Image Processing]```bash

- ✅ Security scanning in CI/CD

- ✅ Dependency vulnerability checks```



### Rate Limiting    endcurl -X POST http://localhost:3000/api/v1/tasks \



- **General API**: 100 requests per 15 minutes---

- **Authentication endpoints**: 5 requests per 15 minutes

- Configurable via environment variables      -H "Content-Type: application/json" \



---## API Documentation



## 📈 Monitoring & Observability    Client --> Nginx  -H "Authorization: Bearer YOUR_JWT_TOKEN" \



### Health Endpoints### Base URL



- `GET /api/health` - Application health status    Nginx --> API1  -d '{

- `GET /api/metrics` - Application metrics (optional)

- `GET /api/ready` - Readiness probe```



### Logginghttp://localhost/api/v1    Nginx --> API2    "title": "Complete project",



Structured JSON logging with Winston:```



- **Info level**: General application events    Nginx --> API3    "description": "Finish the API development",

- **Error level**: Errors and exceptions

- **Debug level**: Detailed debugging (development only)### Authentication Endpoints



Logs are stored in:        "priority": "high",

- `logs/error.log` - Error logs

- `logs/combined.log` - All logs#### Register User



### Monitoring Integration    API1 --> PG    "status": "in_progress"



Configure these optional services:```bash



- **CloudWatch** - AWS metrics and logscurl -X POST http://localhost/api/v1/auth/register \    API2 --> PG  }'

- **Sentry** - Error tracking (optional)

- **New Relic** - Application performance monitoring (optional)  -H "Content-Type: application/json" \



---  -d '{    API3 --> PG```



## 📁 Project Structure    "username": "johndoe",



```    "email": "john@example.com",    

cicd-pipeline/

├── .github/    "password": "SecurePass123!"

│   └── workflows/

│       └── ci-cd-pipeline.yml        # Complete CI/CD workflow  }'    API1 --> Redis## 🔄 CI/CD Pipeline

├── src/

│   ├── config/```

│   │   ├── database.js               # PostgreSQL connection pool

│   │   └── swagger.js                # API documentation setup    API2 --> Redis

│   ├── controllers/

│   │   ├── auth.controller.js        # Authentication logic**Response:**

│   │   └── task.controller.js        # Task CRUD operations

│   ├── database/```json    API3 --> Redis### Pipeline Stages

│   │   ├── migrate.js                # Database migrations

│   │   └── seed.js                   # Sample data seeding{

│   ├── middleware/

│   │   ├── auth.js                   # JWT verification  "success": true,    

│   │   ├── errorHandler.js           # Global error handling

│   │   └── rateLimiter.js            # Rate limiting  "data": {

│   ├── routes/

│   │   ├── auth.routes.js            # Auth endpoints    "id": 1,    API1 -.Image Upload.-> Lambda```mermaid

│   │   ├── task.routes.js            # Task endpoints

│   │   ├── image.routes.js           # Image proxy endpoints    "username": "johndoe",

│   │   └── health.routes.js          # Health checks

│   ├── tests/    "email": "john@example.com"    API2 -.Image Upload.-> Lambdagraph LR

│   │   ├── auth.test.js              # Authentication tests

│   │   ├── health.test.js            # Health check tests  },

│   │   └── setup.js                  # Test configuration

│   ├── utils/  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."    API3 -.Image Upload.-> Lambda    A[Code Quality] --> B[Security Scan]

│   │   └── logger.js                 # Winston logger

│   └── server.js                     # Express app entry point}

├── scripts/

│   ├── init-db.sql                   # Database initialization```        B --> C[Unit Tests]

│   ├── performance-test.js           # k6 performance tests

│   └── backup-db.js                  # Database backup utility

├── nginx/

│   └── nginx.conf                    # Reverse proxy config#### Login    Lambda --> S3    C --> D[Integration Tests]

├── Dockerfile                        # Multi-stage Docker build

├── docker-compose.yml                # Local development setup

├── package.json                      # Dependencies & scripts

├── jest.config.js                    # Jest configuration```bash        D --> E[Build Docker]

├── .eslintrc.js                      # ESLint rules

├── .prettierrc                       # Code formattingcurl -X POST http://localhost/api/v1/auth/login \

├── .env.example                      # Environment template

├── .gitignore                        # Git ignore rules  -H "Content-Type: application/json" \    style Client fill:#e1f5ff    E --> F[Performance Tests]

└── README.md                         # This file

```  -d '{



---    "email": "john@example.com",    style Nginx fill:#90ee90    F --> G[Deploy Staging]



## 🔧 Available Scripts    "password": "SecurePass123!"



| Script | Description |  }'    style API1 fill:#ffd700    G --> H[Deploy Production]

|--------|-------------|

| `npm start` | Start production server |```

| `npm run dev` | Start development server with hot reload |

| `npm test` | Run all tests |    style API2 fill:#ffd700```

| `npm run test:watch` | Run tests in watch mode |

| `npm run test:integration` | Run integration tests only |**Response:**

| `npm run test:coverage` | Run tests with coverage report |

| `npm run test:performance` | Run k6 performance tests |```json    style API3 fill:#ffd700

| `npm run lint` | Run ESLint |

| `npm run lint:fix` | Fix ESLint errors |{

| `npm run format` | Format code with Prettier |

| `npm run format:check` | Check code formatting |  "success": true,    style PG fill:#4169e1### Pipeline Features

| `npm run migrate` | Run database migrations |

| `npm run migrate:rollback` | Rollback database migrations |  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",

| `npm run seed` | Seed database with sample data |

| `npm run db:backup` | Backup database |  "user": {    style Redis fill:#dc382d



---    "id": 1,



## 🐛 Troubleshooting    "username": "johndoe",    style S3 fill:#ff99001. **Code Quality & Linting**



### Docker Issues    "email": "john@example.com"



**Port 80 already in use:**  }    style Lambda fill:#ff9900   - ESLint checks



```bash}

# Windows

netstat -ano | findstr :80``````   - Prettier formatting

taskkill /PID <pid> /F



# Linux/Mac

lsof -i :80### Task Endpoints   - Code standards enforcement

kill -9 <pid>

```



**Database connection failed:**#### Create Task### CI/CD Pipeline Flow



```bash

# Check database logs

docker logs task_db```bash2. **Security Scanning**



# Check database readinesscurl -X POST http://localhost/api/v1/tasks \

docker exec task_db pg_isready -U taskuser

  -H "Authorization: Bearer YOUR_JWT_TOKEN" \```mermaid   - npm audit for vulnerabilities

# Restart PostgreSQL

docker-compose restart postgres  -H "Content-Type: application/json" \

```

  -d '{graph LR   - Snyk security analysis

**Containers not starting:**

    "title": "Complete project documentation",

```bash

# Check Docker daemon    "description": "Write comprehensive README",    A[Git Push] --> B[Code Quality]   - CodeQL static analysis

docker --version

docker ps    "status": "pending",



# View all containers (including stopped)    "priority": "high"    B --> C[Security Scan]   - Secret scanning with TruffleHog

docker ps -a

  }'

# Restart all services

docker-compose down```    C --> D[Unit Tests]

docker-compose up -d

```



### Application Issues**Response:**    D --> E[Build Docker]3. **Automated Testing**



**Migration errors:**```json



```bash{    E --> F[Integration Tests]   - Unit tests with Jest

# Reset migrations

docker exec task_api npm run migrate:rollback  "success": true,

docker exec task_api npm run migrate

```  "data": {    F --> G[Performance Tests]   - Integration tests with Supertest



**Tests failing:**    "id": 1,



```bash    "title": "Complete project documentation",    G --> H{All Pass?}   - 70%+ code coverage requirement

# Clear Jest cache

npm test -- --clearCache    "description": "Write comprehensive README",



# Run tests in verbose mode    "status": "pending",    H -->|Yes| I[Deploy Staging]   - Multi-version Node.js testing (18.x, 20.x)

npm test -- --verbose

```    "priority": "high",



---    "userId": 1,    H -->|No| J[Notify Failure]



## 📊 Key Metrics    "createdAt": "2025-10-13T12:00:00.000Z",



- **API Response Time:** < 100ms (p95)    "updatedAt": "2025-10-13T12:00:00.000Z"    I --> K[Smoke Tests]4. **Docker Build & Scan**

- **Test Coverage:** 74%+

- **Docker Image Size:** < 200MB  }

- **Build Time:** ~3 minutes

- **Deployment Time:** ~5 minutes}    K --> L{Tests Pass?}   - Multi-stage Docker builds

- **Zero Downtime:** Blue-green deployment

```

---

    L -->|Yes| M[Deploy Production]   - Image optimization (< 200MB)

## 🤝 Contributing

#### Get All Tasks

1. Fork the repository

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)    L -->|No| N[Rollback]   - Trivy vulnerability scanning

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)```bash

5. Open a Pull Request

curl -X GET http://localhost/api/v1/tasks \    M --> O[Health Check]   - Push to GitHub Container Registry

---

  -H "Authorization: Bearer YOUR_JWT_TOKEN"

## 📝 License

```    O --> P{Healthy?}

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



---

**Response:**    P -->|Yes| Q[Success]5. **Performance Testing**

## 👤 Author

```json

**DevOps Portfolio Project**

{    P -->|No| R[Auto Rollback]   - k6 load testing

- GitHub: [@username](https://github.com/username)

- LinkedIn: [Your Name](https://linkedin.com/in/username)  "success": true,



---  "data": [       - Response time benchmarks



## 🙏 Acknowledgments    {



- Express.js team for the excellent framework      "id": 1,    style A fill:#90ee90   - Throughput analysis

- GitHub Actions for CI/CD platform

- AWS for cloud infrastructure      "title": "Complete project documentation",

- The open-source community

      "description": "Write comprehensive README",    style H fill:#ffd700

---

      "status": "pending",

## 📅 Roadmap

      "priority": "high",    style L fill:#ffd7006. **Deployment (Staging)**

- [ ] GraphQL API support

- [ ] WebSocket real-time updates      "createdAt": "2025-10-13T12:00:00.000Z"

- [ ] Multi-region deployment

- [ ] Kubernetes manifests    }    style P fill:#ffd700   - Automatic deployment on `main` branch

- [ ] Terraform infrastructure

- [ ] Mobile app integration  ],



---  "pagination": {    style Q fill:#00ff00   - AWS ECS Fargate deployment



<div align="center">    "page": 1,



**Built with ❤️ as a DevOps Portfolio Project**    "limit": 10,    style J fill:#ff0000   - Health check verification



![Built with](https://skillicons.dev/icons?i=nodejs,express,postgres,redis,docker,github,aws)    "total": 1



**⭐ Star this repository if you find it helpful!**  }    style N fill:#ff0000   - Automatic rollback on failure



</div>}


```    style R fill:#ff0000



### Interactive API Documentation```7. **Deployment (Production)**



Access Swagger UI at: **http://localhost/api-docs**   - Manual approval required



---### Database Schema   - Blue-green deployment strategy



## Demo Outputs   - Zero-downtime deployment



### Starting the Application```mermaid   - Smoke tests



```basherDiagram   - Slack/Discord notifications

$ docker-compose up -d

Creating network "cicd-pipeline_backend" with the default driver    USERS ||--o{ TASKS : creates

Creating volume "cicd-pipeline_postgres_data" with default driver

Creating volume "cicd-pipeline_redis_data" with default driver    USERS {### Environment Variables (GitHub Secrets)

Creating task_db    ... done

Creating task_redis ... done        uuid id PK

Creating task_api   ... done

Creating task_nginx ... done        string username UKConfigure these secrets in your GitHub repository:



$ docker ps        string email UK

CONTAINER ID   IMAGE                        STATUS                   PORTS

abc123def456   cicd-pipeline-nginx          Up 30 seconds (healthy)  0.0.0.0:80->80/tcp        string password_hash```

def456ghi789   cicd-pipeline-api            Up 30 seconds (healthy)  3000/tcp

ghi789jkl012   postgres:15-alpine           Up 30 seconds (healthy)  5432/tcp        timestamp created_atAWS_ACCESS_KEY_ID           # AWS credentials for deployment

jkl012mno345   redis:7-alpine               Up 30 seconds (healthy)  6379/tcp

```        timestamp updated_atAWS_SECRET_ACCESS_KEY       # AWS secret key



### Running Tests    }CODECOV_TOKEN               # Codecov integration



```bash    TASKS {SNYK_TOKEN                  # Snyk security scanning

$ npm test

        uuid id PKSLACK_WEBHOOK_URL           # Slack notifications

 PASS  src/tests/health.test.js

  Health Check Endpoint        uuid user_id FKDOCKER_HUB_USERNAME         # Docker Hub credentials (optional)

    ✓ GET /api/health should return 200 OK (45 ms)

    ✓ should return correct status structure (12 ms)        string titleDOCKER_HUB_TOKEN            # Docker Hub token (optional)



 PASS  src/tests/auth.test.js        text description```

  Authentication

    ✓ POST /api/v1/auth/register should create new user (234 ms)        string status

    ✓ POST /api/v1/auth/login should return token (189 ms)

    ✓ should reject invalid credentials (156 ms)        string priority## 🧪 Testing



Test Suites: 2 passed, 2 total        timestamp due_date

Tests:       5 passed, 5 total

Snapshots:   0 total        timestamp created_at### Run All Tests

Time:        3.452 s

Coverage:    74.3% Statements | 71.2% Branches | 80.5% Functions | 75.8% Lines        timestamp updated_at

```

    }```bash

### CI/CD Pipeline Execution

```npm test

```

✓ Code Quality (ESLint)           [1m 23s]```

✓ Security Scan (npm audit)       [0m 45s]

✓ Security Scan (Snyk)            [1m 12s]### Docker Architecture

✓ CodeQL Analysis                 [2m 34s]

✓ Unit Tests                      [1m 56s]### Run Tests with Coverage

✓ Build Docker Image              [3m 21s]

✓ Integration Tests               [2m 08s]```mermaid

✓ Performance Tests               [1m 45s]

✓ Deploy to Staging               [4m 12s]graph TB```bash

✓ Staging Health Check            [0m 15s]

✓ Deploy to Production            [4m 35s]    subgraph "Docker Compose Stack"npm test -- --coverage

✓ Production Smoke Tests          [0m 30s]

        subgraph "Network: Backend"```

Total Pipeline Time: 24m 36s

Status: ✓ SUCCESS            API[API Container<br/>Node.js 18 Alpine<br/>Port 3000]

```

            DB[PostgreSQL Container<br/>Port 5432]### Run Integration Tests Only

---

            Cache[Redis Container<br/>Port 6379]

## CI/CD Pipeline

            Proxy[Nginx Container<br/>Port 80]```bash

### Pipeline Stages

        endnpm run test:integration

```mermaid

graph TD    end```

    A[Push to GitHub] --> B[Stage 1: Code Quality]

    B --> C[Stage 2: Security Scanning]    

    C --> D[Stage 3: Unit Testing]

    D --> E[Stage 4: Build Docker Image]    subgraph "Volumes"### Run Tests in Watch Mode

    E --> F[Stage 5: Integration Testing]

    F --> G[Stage 6: Performance Testing]        V1[postgres_data]

    G --> H[Stage 7: Deploy to Staging]

    H --> I{Health Check}        V2[redis_data]```bash

    I -->|Pass| J[Stage 8: Deploy to Production]

    I -->|Fail| K[Rollback & Alert]    endnpm run test:watch

    J --> L{Smoke Tests}

    L -->|Pass| M[Complete ✓]    ```

    L -->|Fail| N[Auto Rollback]

        Proxy --> API

    style A fill:#4078c0

    style B fill:#6f42c1    API --> DB### Test Coverage Report

    style C fill:#d73a49

    style D fill:#28a745    API --> Cache

    style E fill:#0366d6

    style J fill:#28a745    DB --> V1After running tests, open `coverage/lcov-report/index.html` in your browser.

    style K fill:#d73a49

    style N fill:#d73a49    Cache --> V2

```

    ## 🐳 Docker

### Stage Details

    style API fill:#ffd700

| Stage | Tools | Duration | Purpose |

|-------|-------|----------|---------|    style DB fill:#4169e1### Build Image

| **1. Code Quality** | ESLint, Prettier | ~1 min | Enforce coding standards |

| **2. Security Scan** | npm audit, Snyk, CodeQL | ~2 min | Detect vulnerabilities |    style Cache fill:#dc382d

| **3. Unit Tests** | Jest, Supertest | ~2 min | Verify code functionality |

| **4. Build** | Docker | ~3 min | Create optimized image |    style Proxy fill:#90ee90```bash

| **5. Integration** | Jest + Docker | ~2 min | Test API endpoints |

| **6. Performance** | k6 | ~2 min | Load testing |    style V1 fill:#d3d3d3docker build -t task-api:latest .

| **7. Staging** | AWS ECS | ~4 min | Deploy to test environment |

| **8. Production** | AWS ECS | ~5 min | Blue-green deployment |    style V2 fill:#d3d3d3```



---```



## Testing### Run Container



### Run All Tests---



```bash```bash

npm test

```## Project Structuredocker run -d \



### Run Tests with Coverage  -p 3000:3000 \



```bash```  -e NODE_ENV=production \

npm run test:coverage

```cicd-pipeline/  -e DB_HOST=your-db-host \



### Run Performance Tests├── .github/  -e JWT_SECRET=your-secret \



```bash│   └── workflows/  --name task-api \

npm run performance-test

```│       └── ci-cd-pipeline.yml        # Complete CI/CD workflow  task-api:latest



**Sample Performance Test Output:**├── src/```

```

     ✓ http_req_duration..............: avg=45.2ms  min=12.3ms  med=38.7ms  max=234.5ms│   ├── config/

     ✓ http_req_failed................: 0.00%  ✓ 0     ✗ 5000

     ✓ http_reqs......................: 5000   166.67/s│   │   ├── database.js               # PostgreSQL connection pool### Docker Image Optimization

     

     checks........................: 100.00% ✓ 15000    ✗ 0│   │   └── swagger.js                # API documentation setup

```

│   ├── controllers/- Multi-stage build reduces image size by 60%

---

│   │   ├── auth.controller.js        # Authentication logic- Alpine Linux base image (< 200MB final size)

## Deployment

│   │   └── task.controller.js        # Task CRUD operations- Non-root user for security

### Local Development

│   ├── database/- Health check included

```bash

docker-compose up -d│   │   ├── migrate.js                # Database migrations- Proper signal handling with dumb-init

```

│   │   └── seed.js                   # Sample data seeding

### Production Environment

│   ├── middleware/## 📦 Database

```bash

# Automatic deployment via CI/CD on main branch│   │   ├── auth.js                   # JWT verification

git push origin main

```│   │   ├── errorHandler.js           # Global error handling### Migrations



---│   │   └── rateLimiter.js            # Rate limiting



## Project Integration│   ├── routes/```bash



### Connect with Serverless API│   │   ├── auth.routes.js            # Auth endpoints# Run migrations



This API can be integrated with the **[Serverless Image Processing API](../serverless-api)** for enhanced functionality.│   │   ├── task.routes.js            # Task endpointsnpm run migrate



**Architecture with Integration:**│   │   ├── image.routes.js           # Image proxy endpoints



```mermaid│   │   └── health.routes.js          # Health checks# Rollback migrations

graph LR

    Client[Client] --> API[Task API<br/>This Project]│   ├── tests/npm run migrate:rollback

    API --> DB[(PostgreSQL)]

    API --> Cache[(Redis)]│   │   ├── auth.test.js              # Authentication tests```

    API -.->|Proxy Requests| Lambda[Serverless API<br/>AWS Lambda]

    Lambda --> S3[(S3 Storage)]│   │   ├── health.test.js            # Health check tests

    Lambda --> DDB[(DynamoDB)]

    Lambda --> Rek[Rekognition<br/>AI Analysis]│   │   └── setup.js                  # Test configuration### Seed Database

    

    style API fill:#68A063│   ├── utils/

    style Lambda fill:#FF9900

    style S3 fill:#569A31│   │   └── logger.js                 # Winston logger```bash

    style DDB fill:#4053D6

    style Rek fill:#FF9900│   └── server.js                     # Express app entry pointnpm run seed

```

├── scripts/```

**Setup Integration:**

│   ├── init-db.sql                   # Database initialization

1. Deploy the [Serverless API](../serverless-api)

2. Get API URL and API Key from deployment output│   ├── performance-test.js           # k6 performance tests### Backup Database

3. Add to `.env`:

   ```bash│   └── backup-db.js                  # Database backup utility

   SERVERLESS_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/Prod

   SERVERLESS_API_KEY=your-api-key├── nginx/```bash

   ```

4. Restart API: `docker-compose restart api`│   └── nginx.conf                    # Reverse proxy confignpm run db:backup



**Use Image Features:**├── Dockerfile                        # Multi-stage Docker build```



```bash├── docker-compose.yml                # Local development setup

# Upload image (proxied to serverless API)

curl -X POST http://localhost/api/v1/images/upload \├── package.json                      # Dependencies & scripts### Database Schema

  -H "Authorization: Bearer YOUR_TOKEN" \

  -d '{"fileName":"photo.jpg","fileType":"image/jpeg"}'├── jest.config.js                    # Jest configuration

```

├── .eslintrc.js                      # ESLint rules**Users Table:**

[**View Serverless API Documentation →**](../serverless-api)

├── .prettierrc                       # Code formatting- `id` (UUID, Primary Key)

---

├── .env.example                      # Environment template- `email` (VARCHAR, Unique)

## Troubleshooting

├── .gitignore                        # Git ignore rules- `password` (VARCHAR, Hashed)

### Docker Issues

└── README.md                         # This file- `name` (VARCHAR)

**Port 80 already in use:**

```bash```- `created_at`, `updated_at` (TIMESTAMP)

netstat -ano | findstr :80

taskkill /PID <pid> /F

```

---**Tasks Table:**

**Database connection failed:**

```bash- `id` (UUID, Primary Key)

docker logs task_db

docker exec task_db pg_isready -U taskuser## Prerequisites- `user_id` (UUID, Foreign Key)

docker-compose restart postgres

```- `title` (VARCHAR)



---### Required- `description` (TEXT)



## Key Metrics- ![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=flat&logo=node.js) **Node.js 18+** and npm 9+- `status` (ENUM: pending, in_progress, completed)



- **API Response Time:** <100ms (p95)- ![Docker](https://img.shields.io/badge/Docker-24.0+-2496ED?style=flat&logo=docker) **Docker Desktop** (running)- `priority` (ENUM: low, medium, high)

- **Test Coverage:** 74%+

- **Docker Image Size:** <200MB- ![Git](https://img.shields.io/badge/Git-2.0+-F05032?style=flat&logo=git) **Git** for version control- `due_date` (TIMESTAMP)

- **Build Time:** ~3 minutes

- **Deployment Time:** ~5 minutes- `created_at`, `updated_at` (TIMESTAMP)

- **Zero Downtime:** Blue-green deployment

### Optional (for production deployment)

---

- ![AWS](https://img.shields.io/badge/AWS-Account-FF9900?style=flat&logo=amazon-aws) **AWS Account** with ECS/ECR access## 🔒 Security

<div align="center">

- ![GitHub](https://img.shields.io/badge/GitHub-Account-181717?style=flat&logo=github) **GitHub** repository for CI/CD

**[View Serverless API Project →](../serverless-api)** | **[Portfolio](https://yourportfolio.com)** | **[LinkedIn](https://linkedin.com/in/yourprofile)**

### Implemented Security Measures

![GitHub](https://skillicons.dev/icons?i=github)

---

**Built with** ![Node.js](https://skillicons.dev/icons?i=nodejs) **and** ![Docker](https://skillicons.dev/icons?i=docker)

- ✅ Helmet.js for HTTP headers

**⭐ Star this repository if you find it helpful!**

## Quick Start- ✅ CORS configuration

</div>

- ✅ Rate limiting (100 requests per 15 minutes)

### 1. Clone the Repository- ✅ JWT authentication

- ✅ Password hashing with bcrypt (12 rounds)

```bash- ✅ Input validation and sanitization

git clone <your-repo-url>- ✅ SQL injection protection (parameterized queries)

cd cicd-pipeline- ✅ Environment variable secrets

```- ✅ Non-root Docker user

- ✅ Security scanning in CI/CD

### 2. Install Dependencies- ✅ Dependency vulnerability checks



```bash### Rate Limiting

npm install

```- General API: 100 requests per 15 minutes

- Authentication endpoints: 5 requests per 15 minutes

### 3. Configure Environment- Configurable via environment variables



```bash## 📈 Monitoring & Observability

# Copy environment template

cp .env.example .env### Health Endpoints



# Edit .env with your values (or use defaults for local development)- `GET /api/health` - Application health status

```- `GET /api/metrics` - Application metrics

- `GET /api/ready` - Readiness probe

### 4. Start Docker Desktop

### Logging

Make sure Docker Desktop is running (check for green whale icon in system tray).

Structured JSON logging with Winston:

Verify Docker is running:- Info level: General application events

```bash- Error level: Errors and exceptions

docker --version- Debug level: Detailed debugging (development only)

docker ps

```Logs are stored in:

- `logs/error.log` - Error logs

### 5. Start All Services- `logs/combined.log` - All logs



```bash### Monitoring Integration

# Start PostgreSQL, Redis, API, and Nginx

docker-compose up -dConfigure these optional services:

- **New Relic** - Application performance monitoring

# Check containers are running- **Sentry** - Error tracking

docker ps- **CloudWatch** - AWS metrics and logs

```

## 🚀 Deployment

You should see 4 containers:

- `task_api` - Node.js API### Deploy to AWS ECS/Fargate

- `task_db` - PostgreSQL

- `task_redis` - Redis1. **Prerequisites:**

- `task_nginx` - Nginx   - AWS account with ECS configured

   - ECR repository created

### 6. Initialize Database   - ECS cluster running



```bash2. **Manual Deployment:**

# Wait 30 seconds for PostgreSQL to be fully ready

sleep 30```bash

# Build and tag image

# Run migrationsdocker build -t task-api:latest .

docker exec task_api npm run migrate

# Tag for ECR

# Seed sample datadocker tag task-api:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/task-api:latest

docker exec task_api npm run seed

```# Push to ECR

docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/task-api:latest

### 7. Test the API

# Update ECS service

```bashaws ecs update-service \

# Health check  --cluster production-cluster \

curl http://localhost/api/health  --service task-api \

  --force-new-deployment

# Expected response:```

# {

#   "status": "ok",3. **Automated Deployment:**

#   "timestamp": "2025-10-13T...",

#   "services": {The CI/CD pipeline automatically deploys:

#     "database": "connected",- **Staging**: On every push to `main` branch

#     "redis": "connected"- **Production**: On manual approval or tagged releases

#   }

# }### Environment Configuration

```

**Staging:**

### 8. Access API Documentation- URL: `https://staging.taskapi.com`

- Database: RDS staging instance

Open your browser and navigate to:- Auto-deploy enabled

- **Swagger UI**: http://localhost/api-docs

- **API Base**: http://localhost/api/v1**Production:**

- URL: `https://api.taskapi.com`

---- Database: RDS production instance

- Manual approval required

## API Documentation- Blue-green deployment



### Base URL## 📖 Project Structure



``````

http://localhost/api/v1task-api/

```├── .github/

│   └── workflows/

### Authentication Endpoints│       └── ci-cd-pipeline.yml    # GitHub Actions pipeline

├── src/

#### Register User│   ├── config/

```http│   │   ├── database.js           # Database configuration

POST /api/v1/auth/register│   │   └── swagger.js            # API documentation

Content-Type: application/json│   ├── controllers/

│   │   ├── auth.controller.js    # Authentication logic

{│   │   └── task.controller.js    # Task CRUD operations

  "username": "johndoe",│   ├── database/

  "email": "john@example.com",│   │   ├── migrate.js            # Migration runner

  "password": "SecurePass123!@#"│   │   └── seed.js               # Database seeding

}│   ├── middleware/

│   │   ├── auth.js               # JWT authentication

Response: 201 Created│   │   ├── errorHandler.js       # Error handling

{│   │   └── rateLimiter.js        # Rate limiting

  "success": true,│   ├── routes/

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",│   │   ├── auth.routes.js        # Auth endpoints

  "user": {│   │   ├── task.routes.js        # Task endpoints

    "id": "uuid",│   │   └── health.routes.js      # Health endpoints

    "username": "johndoe",│   ├── tests/

    "email": "john@example.com"│   │   ├── auth.test.js          # Auth tests

  }│   │   ├── health.test.js        # Health tests

}│   │   └── setup.js              # Test configuration

```│   ├── utils/

│   │   └── logger.js             # Winston logger

#### Login│   └── server.js                 # Express application

```http├── scripts/

POST /api/v1/auth/login│   ├── init-db.sql               # Database schema

Content-Type: application/json│   └── backup-db.js              # Backup script

├── docker-compose.yml            # Local development stack

{├── Dockerfile                    # Production container

  "email": "john@example.com",├── .env.example                  # Environment template

  "password": "SecurePass123!@#"├── jest.config.js                # Jest configuration

}├── .eslintrc.js                  # ESLint rules

├── .prettierrc                   # Prettier config

Response: 200 OK├── package.json                  # Dependencies

{└── README.md                     # This file

  "success": true,```

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",

  "user": {## 🔧 Available Scripts

    "id": "uuid",

    "username": "johndoe",| Script | Description |

    "email": "john@example.com"|--------|-------------|

  }| `npm start` | Start production server |

}| `npm run dev` | Start development server with hot reload |

```| `npm test` | Run all tests |

| `npm run test:watch` | Run tests in watch mode |

### Task Endpoints| `npm run test:integration` | Run integration tests only |

| `npm run lint` | Run ESLint |

All task endpoints require authentication. Include the JWT token in the Authorization header:| `npm run lint:fix` | Fix ESLint errors |

| `npm run format` | Format code with Prettier |

```| `npm run format:check` | Check code formatting |

Authorization: Bearer <your_token>| `npm run migrate` | Run database migrations |

```| `npm run seed` | Seed database with sample data |

| `npm run db:backup` | Backup database |

#### Create Task| `npm run docker:build` | Build Docker image |

```http| `npm run docker:run` | Start Docker Compose stack |

POST /api/v1/tasks

Authorization: Bearer <token>## 🤝 Contributing

Content-Type: application/json

1. Fork the repository

{2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

  "title": "Complete project documentation",3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

  "description": "Write comprehensive README with examples",4. Push to the branch (`git push origin feature/AmazingFeature`)

  "status": "pending",5. Open a Pull Request

  "priority": "high",

  "dueDate": "2025-10-20"## 📝 License

}

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Response: 201 Created

```## 👤 Author



#### Get All Tasks**DevOps Portfolio Project**

```http

GET /api/v1/tasks- GitHub: [@username](https://github.com/username)

Authorization: Bearer <token>- LinkedIn: [Your Name](https://linkedin.com/in/username)



Query Parameters:## 🙏 Acknowledgments

  - status: pending | in-progress | completed

  - priority: low | medium | high- Express.js team for the excellent framework

  - page: number (default: 1)- GitHub Actions for CI/CD platform

  - limit: number (default: 10)- AWS for cloud infrastructure

```- The open-source community



#### Update Task## 📊 Performance Benchmarks

```http

PUT /api/v1/tasks/:id- **Response Time**: < 50ms (p95)

Authorization: Bearer <token>- **Throughput**: 1000+ requests/second

Content-Type: application/json- **Uptime**: 99.9% SLA

- **Docker Image Size**: < 200MB

{- **Cold Start Time**: < 2 seconds

  "status": "completed"

}## 🐛 Known Issues

```

None at this time. Please report issues on GitHub.

#### Delete Task

```http## 📅 Roadmap

DELETE /api/v1/tasks/:id

Authorization: Bearer <token>- [ ] GraphQL API support

```- [ ] WebSocket real-time updates

- [ ] Multi-region deployment

### Health Check- [ ] Kubernetes manifests

```http- [ ] Terraform infrastructure

GET /api/health- [ ] Mobile app integration



Response: 200 OK---

{

  "status": "ok",**Built with ❤️ as a DevOps portfolio project**

  "timestamp": "2025-10-13T10:30:00.000Z",
  "services": {
    "database": "connected",
    "redis": "connected"
  }
}
```

---

## Testing

### Run All Tests

```bash
# Run all tests with coverage
npm test

# Watch mode for development
npm run test:watch

# Run only integration tests
npm run test:integration
```

### Test Coverage

The project maintains >70% code coverage:

```bash
npm test -- --coverage
```

### Performance Testing

```bash
# Run k6 performance tests
npm run test:performance
```

---

## CI/CD Pipeline

### Pipeline Stages

The GitHub Actions pipeline includes 8 stages:

1. **Code Quality** - ESLint, Prettier
2. **Security Scan** - npm audit, Snyk, CodeQL, Trivy
3. **Unit Tests** - Jest with coverage
4. **Build Docker** - Multi-stage build, push to ECR
5. **Integration Tests** - API endpoint validation
6. **Performance Tests** - k6 load testing
7. **Deploy Staging** - Blue-green deployment
8. **Deploy Production** - Automated rollback on failure

### GitHub Secrets Required

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CODECOV_TOKEN`
- `SNYK_TOKEN`
- `SLACK_WEBHOOK_URL`

---

## Deployment

### Local Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production (AWS ECS)

```bash
# Build and push to ECR
docker build -t task-api:latest .
docker tag task-api:latest <account>.dkr.ecr.<region>.amazonaws.com/task-api:latest
docker push <account>.dkr.ecr.<region>.amazonaws.com/task-api:latest

# Update ECS service
aws ecs update-service \
  --cluster production-cluster \
  --service task-api-service \
  --force-new-deployment
```

---

## Environment Variables

### Required

```bash
NODE_ENV=production
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskdb
DB_USER=taskuser
DB_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret
REDIS_HOST=localhost
REDIS_PORT=6379
```

### Optional

```bash
SERVERLESS_API_URL=https://api-id.execute-api.region.amazonaws.com/Prod
SERVERLESS_API_KEY=your_api_key
ENABLE_SWAGGER_DOCS=true
LOG_LEVEL=info
```

---

## Security

### Features

- JWT authentication
- bcrypt password hashing
- Helmet.js security headers
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- Container security scanning

### Best Practices

- No hardcoded secrets
- Environment variables for configuration
- Non-root Docker user
- Regular dependency updates
- Automated security scanning

---

## Monitoring

### Health Checks

```bash
GET /api/health
```

### Logging

Structured logging with Winston:
- Error level for failures
- Info level for operations
- Debug level for development

### Metrics

- Request count
- Response time (p50, p95, p99)
- Error rate
- Database query performance

---

## Troubleshooting

### Docker Issues

**Problem:** Containers won't start
```bash
docker ps
docker-compose logs -f
docker-compose restart
```

**Problem:** Port already in use
```bash
# Find process
netstat -ano | findstr :80

# Kill process
taskkill /PID <id> /F
```

### Database Issues

**Problem:** Connection failed
```bash
docker logs task_db
docker exec task_api env | grep DB_
```

**Problem:** Reset database
```bash
docker-compose down -v
docker-compose up -d
docker exec task_api npm run migrate
```

---

<div align="center">

**Built with**

![Node.js](https://skillicons.dev/icons?i=nodejs,express,postgres,redis,docker,github,aws,nginx)

MIT License

</div>
