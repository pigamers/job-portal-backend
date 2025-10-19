# Job Management Backend Setup

## Prerequisites
1. PostgreSQL installed and running
2. Node.js and npm installed

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install @nestjs/typeorm typeorm pg @nestjs/config class-validator class-transformer dotenv
   npm install --save-dev @types/pg
   ```

2. **Database Setup**
   - Create a PostgreSQL database named `job_management`
   - Update `.env` file with your database credentials

3. **Environment Variables**
   The `.env` file is already created with default values:
   ```
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=password
   DATABASE_NAME=job_management
   PORT=3000
   ```

4. **Start the Application**
   ```bash
   npm run start:dev
   ```

## API Endpoints

- `POST /jobs` - Create a new job posting
- `GET /jobs` - Get all job postings
- `GET /jobs/:id` - Get a specific job posting
- `DELETE /jobs/:id` - Delete a job posting

## Job Creation Payload Example
```json
{
  "title": "Software Engineer",
  "company": "Tech Corp",
  "location": "New York, NY",
  "jobType": "Full-time",
  "salaryRange": "$80,000 - $120,000",
  "description": "We are looking for a skilled software engineer...",
  "requirements": "Bachelor's degree in Computer Science...",
  "responsibilities": "Develop and maintain web applications...",
  "applicationDeadline": "2024-03-15"
}
```

The backend will automatically create the database tables when you start the application.