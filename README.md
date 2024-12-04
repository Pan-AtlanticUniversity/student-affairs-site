----

# Project Setup

## Overview

This document provides instructions for setting up the project. The backend is built using Node.js with Express and connects to a MongoDB database.

## Prerequisites

- Node.js (version 14 or higher)
- npm or Yarn
- MongoDB instance or MongoDB Atlas account

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/dominioncruz/student-affairs-site.git
cd student-affairs-site
```

### Setup backend

#### 1. Install Dependencies

Install the required Node.js dependencies using npm or Yarn:

```bash
cd backend

npm install
# or
yarn install
```

#### 2. Configure Environment Variables

Create a `.env` file in the root directory of the project. Use the `.env.example` file as a template. 

**.env.example**

to generate secret key, in your terminal, run:
```
require('crypto').randomBytes(64).toString('hex')
```

Update .env file

```
HOST=preferredHost
PORT=preferredPort
MONGO_URI=mongodb://localhost:27017/your-database
SECRET_KEY=your_generated_secret_key_here
```

Generate a random secret key (as described in the previous instructions) and update the `SECRET_KEY` in the `.env` file. Make sure to provide the correct MongoDB URI.

#### 3. Set Up the Database

Ensure your MongoDB database is running. If using MongoDB Atlas, make sure your connection string is correctly configured in the `.env` file.

#### 4. Run the Application

Start the backend server:

```bash
npm run dev
# or
yarn start
```

The server should now be running on `http://${your desired host}:${your desired port}` (or the port specified in the `.env` file).

### 2. Running Tests (Optional)

If you have tests set up, you can run them with:

```bash
npm test
# or
yarn test
```

### 3. Troubleshooting

- **Server Not Starting**: Ensure all dependencies are installed and that your MongoDB connection string is correct.
- **Environment Variables Missing**: Double-check that the `.env` file exists and has the correct configuration.
- **Database Connection Issues**: Verify that MongoDB is running and accessible.

### 4. Project Structure

Here’s a brief overview of the project structure:

- `src/`: Contains the source code.
  - `controllers/`: Contains route handlers.
  - `middleware/`: Contains middleware functions.
  - `routes/`: Contains route definitions.
  - `db/`: Contains database connection logic.
  - `config/`: Contains configuration files.
- `public/`: Static files (if any).
- `tests/`: Test files.
- `package.json`: Project metadata and dependencies.
- `.env`: Environment variables.

### 5. Contributing
If you want to contribute to this project, please fork the repository and create a pull request. Follow the standard GitHub workflow for contributions.
