# 🚀 Stage 1: Build the frontend
FROM node:20 AS frontend-builder

# Set working directory
WORKDIR /app/UI

# Copy package files and install dependencies
COPY UI/package*.json ./
RUN npm install

# Copy the rest of the UI files
COPY UI ./
RUN npm run build  # This generates the `dist/` folder

# 🚀 Stage 2: Build the backend and serve the UI
FROM node:20 AS backend

# Set working directory
WORKDIR /app/backend

# Copy backend package files and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy backend source files
COPY backend ./

# Create the `public` directory to serve the frontend
RUN mkdir -p public
COPY --from=frontend-builder /app/UI/dist ./public  

# Expose backend API port
EXPOSE 3000

# Start the backend
CMD ["npm", "run", "start"]
