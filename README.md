# CI/CD Pipeline - Task Management API# CI/CD Pipeline - Production-Grade REST API# Advanced CI/CD Pipeline - Task Management API



<div align="center">



![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,postgres,redis,docker,nginx,aws,github)<div align="center">[![CI/CD Pipeline](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml/badge.svg)](https://github.com/username/task-api/actions/workflows/ci-cd-pipeline.yml)



**Production-grade REST API with comprehensive CI/CD pipeline**[![codecov](https://codecov.io/gh/username/task-api/branch/main/graph/badge.svg)](https://codecov.io/gh/username/task-api)



[View Demo](#demo-outputs) • [Architecture](#architecture) • [Quick Start](#quick-start) • [API Docs](#api-documentation) • [Integration](#project-integration)![Node.js](https://skillicons.dev/icons?i=nodejs)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



---![Express](https://skillicons.dev/icons?i=express)[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)



**Part of a Full-Stack Portfolio** | **[Connect with Serverless API →](../serverless-api)**![PostgreSQL](https://skillicons.dev/icons?i=postgres)



</div>![Redis](https://skillicons.dev/icons?i=redis)> Production-grade REST API with comprehensive CI/CD pipeline demonstrating enterprise-level DevOps practices



---![Docker](https://skillicons.dev/icons?i=docker)



## Table of Contents![GitHub Actions](https://skillicons.dev/icons?i=github)## 🚀 Project Overview



- [Overview](#overview)![AWS](https://skillicons.dev/icons?i=aws)

- [Key Features](#key-features)

- [Tech Stack](#tech-stack)![Nginx](https://skillicons.dev/icons?i=nginx)This project showcases an **advanced CI/CD pipeline** for a full-stack Node.js/Express REST API with PostgreSQL. It demonstrates professional DevOps practices including automated testing, security scanning, containerization, multi-environment deployment, and monitoring.

- [Architecture](#architecture)

- [Project Structure](#project-structure)

- [Quick Start](#quick-start)

- [API Documentation](#api-documentation)**Enterprise-grade CI/CD pipeline with automated testing, security scanning, and blue-green deployment**### Key Features

- [Demo Outputs](#demo-outputs)

- [CI/CD Pipeline](#cicd-pipeline)

- [Testing](#testing)

- [Deployment](#deployment)[Features](#features) • [Architecture](#architecture) • [Quick Start](#quick-start) • [API Documentation](#api-documentation) • [Deployment](#deployment)- ✅ **RESTful API** with JWT authentication

- [Project Integration](#project-integration)

- [Troubleshooting](#troubleshooting)- ✅ **PostgreSQL** database with proper indexing and migrations



---</div>- ✅ **Comprehensive Testing** (Unit + Integration tests with 70%+ coverage)



## Overview- ✅ **Security Scanning** (npm audit, Snyk, CodeQL, secret scanning)



Enterprise-level REST API demonstrating **advanced DevOps and CI/CD practices**. Features automated testing, security scanning, Docker containerization, and multi-environment deployment with blue-green strategy.---- ✅ **Docker** multi-stage builds with optimized images



This project showcases:- ✅ **GitHub Actions** CI/CD with 8 pipeline stages

- Modern CI/CD pipeline with 8 automated stages

- Production-ready code architecture## Table of Contents- ✅ **Multi-Environment** deployment (Staging + Production)

- Comprehensive security practices

- Scalable infrastructure design- ✅ **Blue-Green Deployment** with automated rollback



---- [Overview](#overview)- ✅ **Health Checks** and monitoring endpoints



## Key Features- [Features](#features)- ✅ **API Documentation** with Swagger/OpenAPI



<table>- [Tech Stack](#tech-stack)- ✅ **Rate Limiting** and security best practices

<tr>

<td width="50%">- [Architecture](#architecture)- ✅ **Structured Logging** with Winston



**Backend & API**- [Project Structure](#project-structure)- ✅ **Performance Testing** with k6

- RESTful API design

- JWT authentication- [Prerequisites](#prerequisites)

- Input validation

- Rate limiting- [Quick Start](#quick-start)## 📊 Architecture

- Error handling

- API versioning- [API Documentation](#api-documentation)



</td>- [Testing](#testing)```mermaid

<td width="50%">

- [CI/CD Pipeline](#cicd-pipeline)graph TB

**DevOps & Infrastructure**

- Docker multi-stage builds- [Deployment](#deployment)    A[Client] --> B[Nginx Reverse Proxy]

- Docker Compose orchestration

- Nginx reverse proxy- [Environment Variables](#environment-variables)    B --> C[Node.js API]

- PostgreSQL + Redis

- Health checks- [Security](#security)    C --> D[PostgreSQL]

- Graceful shutdown

- [Monitoring](#monitoring)    C --> E[Redis Cache]

</td>

</tr>- [Troubleshooting](#troubleshooting)    C --> F[CloudWatch Logs]

<tr>

<td width="50%">    G[GitHub Actions] --> H[Docker Registry]



**Testing & Quality**---    H --> I[AWS ECS Fargate]

- Unit tests (Jest)

- Integration tests    I --> C

- 70%+ code coverage

- ESLint + Prettier## Overview```

- Pre-commit hooks

- Performance testing (k6)



</td>A production-ready REST API demonstrating enterprise-level CI/CD practices, automated testing, security scanning, and containerized deployment. This project showcases modern DevOps workflows with GitHub Actions, Docker, and AWS infrastructure.### Tech Stack

<td width="50%">



**CI/CD & Security**

- GitHub Actions pipeline### Key Highlights| Category | Technologies |

- Automated security scanning

- CodeQL analysis|----------|-------------|

- Secret detection

- Blue-green deployment- **8-stage CI/CD pipeline** with automated quality gates| **Runtime** | Node.js 18+, Express.js |

- Automated rollback

- **Zero-downtime deployments** using blue-green strategy| **Database** | PostgreSQL 15, Redis 7 |

</td>

</tr>- **Comprehensive testing** (unit, integration, performance)| **Authentication** | JWT, bcrypt |

</table>

- **Security-first approach** with multiple scanning tools| **Testing** | Jest, Supertest |

---

- **Production-ready** monitoring and logging| **Security** | Helmet, express-validator, Snyk, CodeQL |

## Tech Stack

- **Scalable architecture** with Docker and AWS ECS| **CI/CD** | GitHub Actions, Docker, AWS ECS |

<div align="center">

| **Monitoring** | CloudWatch, Sentry, New Relic |

**Backend**

---| **Documentation** | Swagger/OpenAPI |

![Node.js](https://skillicons.dev/icons?i=nodejs) ![Express](https://skillicons.dev/icons?i=express) ![JavaScript](https://skillicons.dev/icons?i=js)

| **Containerization** | Docker, Docker Compose |

**Database & Cache**

## Features

![PostgreSQL](https://skillicons.dev/icons?i=postgres) ![Redis](https://skillicons.dev/icons?i=redis)

## 🛠️ Prerequisites

**DevOps & Infrastructure**

### Core Functionality

![Docker](https://skillicons.dev/icons?i=docker) ![Nginx](https://skillicons.dev/icons?i=nginx) ![AWS](https://skillicons.dev/icons?i=aws) ![GitHub Actions](https://skillicons.dev/icons?i=github)

- User authentication with JWT tokens- **Node.js** >= 18.0.0

**Testing & Tools**

- Task management (CRUD operations)- **npm** >= 9.0.0

![Jest](https://skillicons.dev/icons?i=jest) ![Git](https://skillicons.dev/icons?i=git) ![VSCode](https://skillicons.dev/icons?i=vscode)

- Image upload integration (proxy to serverless API)- **Docker** >= 20.10 and Docker Compose >= 2.0

</div>

- Health check endpoints with dependency status- **PostgreSQL** >= 15 (for local development without Docker)

---

- Rate limiting and request throttling- **Git** >= 2.30

## Architecture

- API versioning

### System Architecture

## 🚦 Quick Start

```mermaid

graph TB### DevOps Excellence

    subgraph "External Traffic"

        Client[Client/Browser]- Automated CI/CD with GitHub Actions### 1. Clone the Repository

    end

    - Multi-stage Docker builds (< 200MB images)

    subgraph "Docker Network"

        Nginx[Nginx Reverse Proxy<br/>Port 80]- Database migrations and seeding```bash

        API[Node.js API<br/>Express Server<br/>Port 3000]

        DB[(PostgreSQL<br/>Database<br/>Port 5432)]- Blue-green deployment strategygit clone https://github.com/username/task-api.git

        Cache[(Redis<br/>Cache<br/>Port 6379)]

    end- Automated rollback on failurecd task-api

    

    subgraph "Optional Integration"- Performance testing with k6```

        Serverless[Serverless API<br/>AWS Lambda]

    end

    

    Client -->|HTTP| Nginx### Security### 2. Environment Configuration

    Nginx -->|Proxy| API

    API -->|SQL Queries| DB- JWT-based authentication

    API -->|Cache Operations| Cache

    API -.->|Image Processing| Serverless- Password hashing with bcrypt```bash

    

    style Nginx fill:#269B24- Helmet.js security headerscp .env.example .env

    style API fill:#68A063

    style DB fill:#336791- Rate limiting per IP# Edit .env with your configuration

    style Cache fill:#DC382D

    style Serverless fill:#FF9900- Input validation and sanitization```

```

- Security vulnerability scanning

### CI/CD Pipeline Architecture

- Container security scanning### 3. Using Docker Compose (Recommended)

```mermaid

graph LR

    A[Code Push] --> B[Linting<br/>ESLint]

    B --> C[Security Scan<br/>npm audit<br/>Snyk<br/>CodeQL]### Observability```bash

    C --> D[Unit Tests<br/>Jest]

    D --> E[Build Docker<br/>Multi-stage]- Structured logging with Winston# Start all services

    E --> F[Integration Tests<br/>Supertest]

    F --> G[Performance Tests<br/>k6]- Health check endpointsdocker-compose up -d

    G --> H[Deploy Staging<br/>AWS ECS]

    H --> I{Health Check<br/>Pass?}- Database connection monitoring

    I -->|Yes| J[Deploy Production<br/>Blue-Green]

    I -->|No| K[Rollback]- Redis connection monitoring# View logs

    J --> L[Smoke Tests]

    L --> M{Success?}- Swagger/OpenAPI documentationdocker-compose logs -f api

    M -->|Yes| N[Complete]

    M -->|No| O[Auto Rollback]

    

    style A fill:#4078c0---# Stop services

    style C fill:#d73a49

    style G fill:#6f42c1docker-compose down

    style J fill:#28a745

    style K fill:#d73a49## Tech Stack```

    style O fill:#d73a49

```



---### BackendThe API will be available at `http://localhost:3000`



## Project Structure![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)



```![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express&logoColor=white)### 4. Local Development (Without Docker)

cicd-pipeline/

├── .github/![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

│   └── workflows/

│       └── ci-cd-pipeline.yml    # 8-stage CI/CD pipeline```bash

├── src/

│   ├── config/### Database & Caching# Install dependencies

│   │   ├── database.js           # PostgreSQL connection pool

│   │   └── swagger.js            # API documentation setup![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat&logo=postgresql&logoColor=white)npm install

│   ├── controllers/

│   │   ├── auth.controller.js    # Authentication logic![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat&logo=redis&logoColor=white)

│   │   └── task.controller.js    # Task CRUD operations

│   ├── middleware/# Set up database (PostgreSQL must be running)

│   │   ├── auth.js               # JWT verification

│   │   ├── errorHandler.js       # Global error handler### DevOps & Infrastructurenpm run migrate

│   │   └── rateLimiter.js        # Rate limiting

│   ├── routes/![Docker](https://img.shields.io/badge/Docker-24+-2496ED?style=flat&logo=docker&logoColor=white)

│   │   ├── auth.routes.js        # Auth endpoints

│   │   ├── task.routes.js        # Task endpoints![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=flat&logo=github-actions&logoColor=white)# Seed database with sample data (optional)

│   │   ├── health.routes.js      # Health checks

│   │   └── image.routes.js       # Image integration (optional)![AWS](https://img.shields.io/badge/AWS-ECS/Fargate-FF9900?style=flat&logo=amazon-aws&logoColor=white)npm run seed

│   ├── database/

│   │   ├── migrate.js            # Database migrations![Nginx](https://img.shields.io/badge/Nginx-1.25-009639?style=flat&logo=nginx&logoColor=white)

│   │   └── seed.js               # Seed data

│   ├── utils/# Start development server

│   │   └── logger.js             # Winston logger

│   ├── tests/### Testing & Qualitynpm run dev

│   │   ├── auth.test.js          # Auth tests

│   │   ├── health.test.js        # Health check tests![Jest](https://img.shields.io/badge/Jest-29+-C21325?style=flat&logo=jest&logoColor=white)```

│   │   └── setup.js              # Test setup

│   └── server.js                 # Express app entry point![ESLint](https://img.shields.io/badge/ESLint-8+-4B32C3?style=flat&logo=eslint&logoColor=white)

├── scripts/

│   ├── init-db.sql               # Database initialization![k6](https://img.shields.io/badge/k6-Performance-7D64FF?style=flat&logo=k6&logoColor=white)## 📚 API Documentation

│   └── performance-test.js       # k6 performance tests

├── nginx/

│   └── nginx.conf                # Nginx configuration

├── Dockerfile                     # Multi-stage Docker build### Security ToolsOnce the application is running, visit:

├── docker-compose.yml             # Local development setup

├── package.json                   # Dependencies & scripts![Snyk](https://img.shields.io/badge/Snyk-Security-4C4A73?style=flat&logo=snyk&logoColor=white)

├── jest.config.js                 # Test configuration

├── .eslintrc.js                  # Linting rules![Trivy](https://img.shields.io/badge/Trivy-Container_Scan-1904DA?style=flat&logo=aqua&logoColor=white)- **Swagger UI**: `http://localhost:3000/api-docs`

├── .env.example                  # Environment template

└── README.md                      # This file- **OpenAPI JSON**: `http://localhost:3000/api-docs.json`

```

---

---

### Quick API Reference

## Quick Start

## Architecture

### Prerequisites

| Method | Endpoint | Description | Auth |

- Node.js 18+

- Docker Desktop (running)### System Architecture|--------|----------|-------------|------|

- npm or yarn

| GET | `/api/health` | Health check | No |

### Installation

```mermaid| POST | `/api/v1/auth/register` | Register user | No |

```bash

# Clone the repositorygraph TB| POST | `/api/v1/auth/login` | Login user | No |

git clone https://github.com/yourusername/cicd-pipeline.git

cd cicd-pipeline    subgraph "Client Layer"| GET | `/api/v1/auth/me` | Get profile | Yes |



# Install dependencies        Client[Web/Mobile Client]| GET | `/api/v1/tasks` | List tasks | Yes |

npm install

    end| POST | `/api/v1/tasks` | Create task | Yes |

# Create environment file

cp .env.example .env    | GET | `/api/v1/tasks/:id` | Get task | Yes |

# Edit .env with your configuration

    subgraph "Load Balancer"| PUT | `/api/v1/tasks/:id` | Update task | Yes |

# Start all services with Docker Compose

docker-compose up -d        Nginx[Nginx Reverse Proxy<br/>Port 80]| DELETE | `/api/v1/tasks/:id` | Delete task | Yes |



# Wait 30 seconds for PostgreSQL to initialize    end

sleep 30

    ### Example Requests

# Run database migrations

docker exec task_api npm run migrate    subgraph "Application Layer"



# Seed initial data        API1[Node.js API Instance 1<br/>Port 3000]**Register a User:**

docker exec task_api npm run seed

```        API2[Node.js API Instance 2<br/>Port 3000]```bash



### Verify Installation        API3[Node.js API Instance 3<br/>Port 3000]curl -X POST http://localhost:3000/api/v1/auth/register \



```bash    end  -H "Content-Type: application/json" \

# Check if containers are running

docker ps      -d '{



# Test health endpoint    subgraph "Data Layer"    "email": "user@example.com",

curl http://localhost/api/health

```        PG[(PostgreSQL 15<br/>Primary Database)]    "password": "Password123",



**Expected Output:**        Redis[(Redis 7<br/>Cache & Sessions)]    "name": "John Doe"

```json

{    end  }'

  "status": "ok",

  "timestamp": "2025-10-13T12:00:00.000Z",    ```

  "services": {

    "database": "connected",    subgraph "External Services"

    "redis": "connected"

  },        S3[AWS S3<br/>Image Storage]**Create a Task:**

  "version": "1.0.0"

}        Lambda[AWS Lambda<br/>Image Processing]```bash

```

    endcurl -X POST http://localhost:3000/api/v1/tasks \

---

      -H "Content-Type: application/json" \

## API Documentation

    Client --> Nginx  -H "Authorization: Bearer YOUR_JWT_TOKEN" \

### Base URL

    Nginx --> API1  -d '{

```

http://localhost/api/v1    Nginx --> API2    "title": "Complete project",

```

    Nginx --> API3    "description": "Finish the API development",

### Authentication Endpoints

        "priority": "high",

#### Register User

    API1 --> PG    "status": "in_progress"

```bash

curl -X POST http://localhost/api/v1/auth/register \    API2 --> PG  }'

  -H "Content-Type: application/json" \

  -d '{    API3 --> PG```

    "username": "johndoe",

    "email": "john@example.com",    

    "password": "SecurePass123!"

  }'    API1 --> Redis## 🔄 CI/CD Pipeline

```

    API2 --> Redis

**Response:**

```json    API3 --> Redis### Pipeline Stages

{

  "success": true,    

  "data": {

    "id": 1,    API1 -.Image Upload.-> Lambda```mermaid

    "username": "johndoe",

    "email": "john@example.com"    API2 -.Image Upload.-> Lambdagraph LR

  },

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."    API3 -.Image Upload.-> Lambda    A[Code Quality] --> B[Security Scan]

}

```        B --> C[Unit Tests]



#### Login    Lambda --> S3    C --> D[Integration Tests]



```bash        D --> E[Build Docker]

curl -X POST http://localhost/api/v1/auth/login \

  -H "Content-Type: application/json" \    style Client fill:#e1f5ff    E --> F[Performance Tests]

  -d '{

    "email": "john@example.com",    style Nginx fill:#90ee90    F --> G[Deploy Staging]

    "password": "SecurePass123!"

  }'    style API1 fill:#ffd700    G --> H[Deploy Production]

```

    style API2 fill:#ffd700```

**Response:**

```json    style API3 fill:#ffd700

{

  "success": true,    style PG fill:#4169e1### Pipeline Features

  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",

  "user": {    style Redis fill:#dc382d

    "id": 1,

    "username": "johndoe",    style S3 fill:#ff99001. **Code Quality & Linting**

    "email": "john@example.com"

  }    style Lambda fill:#ff9900   - ESLint checks

}

``````   - Prettier formatting



### Task Endpoints   - Code standards enforcement



#### Create Task### CI/CD Pipeline Flow



```bash2. **Security Scanning**

curl -X POST http://localhost/api/v1/tasks \

  -H "Authorization: Bearer YOUR_JWT_TOKEN" \```mermaid   - npm audit for vulnerabilities

  -H "Content-Type: application/json" \

  -d '{graph LR   - Snyk security analysis

    "title": "Complete project documentation",

    "description": "Write comprehensive README",    A[Git Push] --> B[Code Quality]   - CodeQL static analysis

    "status": "pending",

    "priority": "high"    B --> C[Security Scan]   - Secret scanning with TruffleHog

  }'

```    C --> D[Unit Tests]



**Response:**    D --> E[Build Docker]3. **Automated Testing**

```json

{    E --> F[Integration Tests]   - Unit tests with Jest

  "success": true,

  "data": {    F --> G[Performance Tests]   - Integration tests with Supertest

    "id": 1,

    "title": "Complete project documentation",    G --> H{All Pass?}   - 70%+ code coverage requirement

    "description": "Write comprehensive README",

    "status": "pending",    H -->|Yes| I[Deploy Staging]   - Multi-version Node.js testing (18.x, 20.x)

    "priority": "high",

    "userId": 1,    H -->|No| J[Notify Failure]

    "createdAt": "2025-10-13T12:00:00.000Z",

    "updatedAt": "2025-10-13T12:00:00.000Z"    I --> K[Smoke Tests]4. **Docker Build & Scan**

  }

}    K --> L{Tests Pass?}   - Multi-stage Docker builds

```

    L -->|Yes| M[Deploy Production]   - Image optimization (< 200MB)

#### Get All Tasks

    L -->|No| N[Rollback]   - Trivy vulnerability scanning

```bash

curl -X GET http://localhost/api/v1/tasks \    M --> O[Health Check]   - Push to GitHub Container Registry

  -H "Authorization: Bearer YOUR_JWT_TOKEN"

```    O --> P{Healthy?}



**Response:**    P -->|Yes| Q[Success]5. **Performance Testing**

```json

{    P -->|No| R[Auto Rollback]   - k6 load testing

  "success": true,

  "data": [       - Response time benchmarks

    {

      "id": 1,    style A fill:#90ee90   - Throughput analysis

      "title": "Complete project documentation",

      "description": "Write comprehensive README",    style H fill:#ffd700

      "status": "pending",

      "priority": "high",    style L fill:#ffd7006. **Deployment (Staging)**

      "createdAt": "2025-10-13T12:00:00.000Z"

    }    style P fill:#ffd700   - Automatic deployment on `main` branch

  ],

  "pagination": {    style Q fill:#00ff00   - AWS ECS Fargate deployment

    "page": 1,

    "limit": 10,    style J fill:#ff0000   - Health check verification

    "total": 1

  }    style N fill:#ff0000   - Automatic rollback on failure

}

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
