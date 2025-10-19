# 🔧 CyberMinds Job Portal - Backend API

A robust REST API server built with NestJS and TypeORM, providing comprehensive job management functionality with PostgreSQL database integration.

## ✨ Features

### 🎯 Core Functionality
- **Job CRUD Operations**: Create, read, update, and delete job postings
- **Data Validation**: Comprehensive input validation using class-validator
- **Database Management**: TypeORM with auto-schema synchronization
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Structured error responses

### 🔒 Data Management
- **PostgreSQL Integration**: Robust database with connection pooling
- **Entity Relationships**: Well-structured database schema
- **Data Validation**: Server-side validation for all inputs
- **Auto-timestamps**: Automatic creation and update timestamps

### 🚀 Performance
- **Connection Pooling**: Efficient database connections
- **Async Operations**: Non-blocking database operations
- **Structured Logging**: Comprehensive request/response logging
- **Environment Configuration**: Flexible environment-based setup

## 🛠️ Tech Stack

- **Framework**: NestJS 11.0.1
- **Database ORM**: TypeORM 0.3.27
- **Database**: PostgreSQL
- **Validation**: class-validator 0.14.2 & class-transformer 0.5.1
- **Configuration**: @nestjs/config 4.0.2
- **Runtime**: Node.js
- **Language**: TypeScript 5.7.3

## 📁 Project Structure

```
backend/
├── src/
│   ├── app.controller.ts      # Main application controller
│   ├── app.module.ts          # Root application module
│   ├── app.service.ts         # Main application service
│   ├── create-job.dto.ts      # Data Transfer Object for job creation
│   ├── job.entity.ts          # Job database entity
│   ├── jobs.controller.ts     # Jobs API controller
│   ├── jobs.module.ts         # Jobs feature module
│   ├── jobs.service.ts        # Jobs business logic service
│   └── main.ts               # Application entry point
├── test/                     # E2E tests
├── .env                      # Environment variables
├── nest-cli.json            # NestJS CLI configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL 12+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=12345
   DATABASE_NAME=job_management
   PORT=3001
   ```

4. **Database Setup**
   - Install PostgreSQL
   - Create database: `job_management`
   - The application will auto-create tables on first run

5. **Start the development server**
   ```bash
   npm run start:dev
   ```

6. **Verify installation**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 🔧 Available Scripts

- `npm run start` - Start production server
- `npm run start:dev` - Start development server with hot reload
- `npm run start:debug` - Start server in debug mode
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint

## 📊 Database Schema

### Jobs Table
```sql
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  company VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  jobType ENUM('Full-time', 'Part-time', 'Contract', 'Internship') NOT NULL,
  salaryRange VARCHAR NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT NOT NULL,
  responsibilities TEXT NOT NULL,
  applicationDeadline DATE NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

## 🌐 API Endpoints

### Jobs API

#### GET /jobs
Retrieve all job postings
```http
GET /jobs
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "Tech Corp",
    "location": "New York, NY",
    "jobType": "Full-time",
    "salaryRange": "$80,000 - $120,000",
    "description": "We are looking for a skilled software engineer",
    "requirements": "Bachelor's degree in Computer Science",
    "responsibilities": "Develop and maintain web applications",
    "applicationDeadline": "2024-03-15",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

#### POST /jobs
Create a new job posting
```http
POST /jobs
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Frontend Developer",
  "company": "Amazon",
  "location": "Chennai",
  "jobType": "Full-time",
  "salaryRange": "8 - 12 LPA",
  "description": "React developer needed",
  "requirements": "3+ years React experience",
  "responsibilities": "Build user interfaces",
  "applicationDeadline": "2024-12-31"
}
```

**Response:**
```json
{
  "id": 2,
  "title": "Frontend Developer",
  "company": "Amazon",
  // ... other fields
  "createdAt": "2024-01-16T09:15:00Z",
  "updatedAt": "2024-01-16T09:15:00Z"
}
```

#### GET /jobs/:id
Retrieve a specific job by ID
```http
GET /jobs/1
```

#### DELETE /jobs/:id
Delete a specific job by ID
```http
DELETE /jobs/1
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_HOST` | PostgreSQL host | `localhost` |
| `DATABASE_PORT` | PostgreSQL port | `5432` |
| `DATABASE_USERNAME` | Database username | `postgres` |
| `DATABASE_PASSWORD` | Database password | - |
| `DATABASE_NAME` | Database name | `job_management` |
| `PORT` | Server port | `3001` |

### TypeORM Configuration
```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Job],
  synchronize: true, // Auto-create tables
})
```

## 🎯 Data Validation

### Job Creation DTO
```typescript
export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsEnum(JobType)
  jobType: JobType;

  @IsString()
  @IsNotEmpty()
  salaryRange: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  responsibilities: string;

  @IsDateString()
  applicationDeadline: string;
}
```

## 🔒 Security Features

- **Input Validation**: All inputs validated using class-validator
- **SQL Injection Protection**: TypeORM provides built-in protection
- **CORS Configuration**: Properly configured cross-origin requests
- **Environment Variables**: Sensitive data stored in environment variables

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start:prod
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3001
CMD ["node", "dist/main"]
```

### Environment Setup
- Configure production database
- Set environment variables
- Enable SSL for database connections
- Configure logging levels

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## 📈 Performance Optimization

- **Connection Pooling**: Efficient database connections
- **Async/Await**: Non-blocking operations
- **Validation Pipes**: Early request validation
- **Error Handling**: Structured error responses

## 🔍 Monitoring & Logging

- **Request Logging**: All API requests logged
- **Error Tracking**: Comprehensive error logging
- **Database Queries**: Query performance monitoring
- **Health Checks**: Application health endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the NestJS documentation
- Contact the development team

---

**Built with ❤️ using NestJS and TypeORM**