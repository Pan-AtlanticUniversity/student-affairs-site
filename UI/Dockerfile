# UI/Dockerfile
# Base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files and build
COPY . .
RUN npm run build

# Start the frontend
CMD ["npm", "run", "dev"]
