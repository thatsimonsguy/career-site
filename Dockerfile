# Stage 1: Build (optional if you're already running `npm run build`)
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Remove default page
RUN rm -rf /usr/share/nginx/html/*

# Copy your build output
COPY out/ /usr/share/nginx/html

# Expose port
EXPOSE 80

# Optional: quiet logs for cleaner output
CMD ["nginx", "-g", "daemon off;"]
