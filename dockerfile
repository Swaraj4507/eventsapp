# Stage 1: Build the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy environment variables
COPY .env .env

# Build the application
RUN npm run build

# Stage 2: Serve the app using a lightweight web server
FROM nginx:stable-alpine AS production

# Copy the build output from the previous stage to the nginx web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
