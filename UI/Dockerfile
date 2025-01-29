# Use an Nginx base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy the build output from the frontend's dist folder
COPY dist .

# Expose the port for the frontend
EXPOSE 80

# No CMD is needed; Nginx starts by default
