# backend/Dockerfile
# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port for the backend
EXPOSE 4001

# Start the backend
CMD ["npm", "start"]
