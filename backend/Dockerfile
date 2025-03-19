# Base image
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY backend/package*.json backend/package-lock.json ./  
RUN npm install

# Copy backend source files
COPY backend ./backend

# Build the frontend first
WORKDIR /app/UI
COPY UI/package*.json UI/package-lock.json ./
RUN npm install
COPY UI .
RUN npm run build  

# Move built frontend files into the backend `public/` folder
WORKDIR /app/backend
RUN mkdir -p public
COPY --from=builder /app/UI/dist ./public 

# Expose backend API port
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start"]
