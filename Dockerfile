# UI/Dockerfile
# Base image
FROM node:20

# Set working directory
WORKDIR /app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# Copy app files and build
COPY . .
# RUN npm run build
WORKDIR /app/UI
RUN npm install
RUN npm run build

WORKDIR /app/backend
RUN npm install
RUN npm run build

# Start the frontend
CMD ["npm", "run", "start"]
