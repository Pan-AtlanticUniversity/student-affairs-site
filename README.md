---

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
git clone https://github.com/student-affairs-site/student-affairs-site.git
cd student-affairs-site
```

### Setup backend

#### 1. Install Dependencies

Install the required Node.js dependencies using npm or Yarn.
Run the following commands from the root of the repository:

```bash
cd backend

npm install
# or
yarn install
```

```bash
# Navigate to the frontend and install its dependencies
cd UI
npm install
# or
yarn install
```

#### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory of the project. Use the `.env.example` file as a template.

To generate a secret key, in your terminal, run:

```bash
# In Node JS
require('crypto').randomBytes(64).toString('hex')
```

Update .env file

```env
HOST=preferredHost
PORT=preferredPort
MONGO_URI=mongodb://localhost:27017/your-database
ACCESS_SECRET=your_generated_secret_key_here
```

**_NOTE:_** More environment variables are necessary to run the project, see the `.env.example` file in the `backend` directory as a guide.

Generate a random secret key (as described in the previous instructions) and update the `SECRET_KEY` in the `.env` file. Make sure to provide the correct MongoDB URI.

#### 3. Set Up the Database

Ensure your MongoDB database is running. If using MongoDB Atlas, make sure your connection string is correctly configured in the `.env` file.

#### 4. Run the Application

Start the backend server:

```bash
cd backend
npm run dev
# or
yarn start
```

Start the frontend server:

```bash
cd UI
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
- **Environment Variables Missing**: Double-check that the `.env` file exists (in the backend directory) and has the correct configuration.
- **Database Connection Issues**: Verify that MongoDB is running and accessible.
- If you run into any other issues, please contact the project owners for support.

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

If you want to contribute to this project, please create a branch, make the necessary changes and submit a pull request. Follow the standard GitHub workflow for contributions.
