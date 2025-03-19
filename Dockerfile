# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build the UI first
WORKDIR /app/UI
RUN npm install
RUN npm run build

# Serve the built UI from the backend
WORKDIR /app/backend
RUN npm install

# Ensure Express serves the UI
# (Modify your backend to serve static files from /app/UI/dist)

# Expose backend API port
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start"]
