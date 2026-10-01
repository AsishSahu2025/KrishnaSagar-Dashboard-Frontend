# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app for production
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built static assets to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3006
EXPOSE 3006

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
