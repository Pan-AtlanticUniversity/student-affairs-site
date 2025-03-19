# # UI/Dockerfile
# # Base image
# FROM node:20.04

# # Set working directory
# WORKDIR /app

# # # Copy package files and install dependencies
# # COPY package*.json ./
# # RUN npm install

# # Copy app files and build
# COPY . .
# # RUN npm run build
# WORKDIR /app/UI
# RUN npm install
# RUN npm run build

# WORKDIR /app/backend
# RUN npm install
# RUN npm run build

# # Start the frontend
# CMD ["npm", "run", "start"]
# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies for both frontend and backend
WORKDIR /app/UI
RUN npm install
RUN npm run build

WORKDIR /app/backend
RUN npm install

# Expose backend port
EXPOSE 3000

# Start the backend (which serves the UI as well)
CMD ["npm", "run", "start"]
