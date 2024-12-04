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

# Serve the built frontend
FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
