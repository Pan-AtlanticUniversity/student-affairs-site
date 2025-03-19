# UI/Dockerfile
# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

#Copy the entire project directory,excluding files form .dockerignore
COPY . .

# build the frontend
WORKDIR /usr/src/app/UI
RUN npm install
RUN npm run build

WORKDIR /usr/src/app/backend
RUN npm install
RUN npm run build

#EXPOSE backend port
EXPOSE 3000

# Start the
CMD ["npm", "run", "start:prod"]