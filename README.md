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

### 5. Images and media storage

All images that come from the database (clubs, executives, staff, blogs, events, mentors, counsellors, services) live under `backend/uploads/`. The database stores them as `uploads/<key>`, for example `uploads/clubs/art-club/logo.webp`. The API never sends that raw value. Each model turns it into a public URL when it is sent as JSON (`backend/src/media.ts`):

```
<MEDIA_BASE_URL>/<key>
```

`MEDIA_BASE_URL` defaults to `/uploads`, so the backend serves the files itself. Absolute URLs (`https://...`) pass through unchanged.

**Moving to Cloudflare R2 or Cloudinary** needs no code change and no database migration:

1. Upload the contents of `backend/uploads/` so that each object key equals its path under `uploads/`.
   - Cloudflare R2: `rclone copy backend/uploads r2:<bucket>`, then connect a public domain to the bucket.
   - Cloudinary: upload each file with its folder path as the public ID (for example `clubs/art-club/logo`).
2. Set `MEDIA_BASE_URL` in the backend `.env` and restart:
   - R2: `MEDIA_BASE_URL=https://media.example.com`
   - Cloudinary: `MEDIA_BASE_URL=https://res.cloudinary.com/<cloud-name>/image/upload/f_auto,q_auto`
3. To roll back, remove `MEDIA_BASE_URL`.

Note: new admin uploads still go to `backend/uploads/` on the server. Copy them to the bucket too until uploads write to the bucket directly.

**Adding a new set of club or staff photos**

1. Put the raw photos in a folder that uses the final keys (`clubs/<club-slug>/logo.webp`, `clubs/<club-slug>/banner.webp`, `clubs/<club-slug>/executives/<person-slug>.webp`, `members/<person-slug>.webp`).
2. Shrink them: `backend/scripts/optimise-media.sh <raw-folder> backend/uploads` (needs ImageMagick).
3. Update the names and posts in `backend/src/content/roster.ts`. A person's file name is the slug of their name.
4. Write them to the database: `cd backend && npm run sync:roster`. The script stops before it writes anything if a file is missing. It matches clubs and staff by name (not case sensitive), replaces each listed club's executives, and leaves clubs that are not listed alone. You can run it more than once.

Use a new file name when you replace a photo. Browsers cache `/uploads` files for a day.

### 6. Contributing

If you want to contribute to this project, please create a branch, make the necessary changes and submit a pull request. Follow the standard GitHub workflow for contributions.
