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
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start"]
