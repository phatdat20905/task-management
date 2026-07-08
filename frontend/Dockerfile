# ============================
# Build Stage
# ============================
FROM node:22-alpine AS build

WORKDIR /app

# Build arguments
ARG VITE_APP_BASE_URL
ARG VITE_APP_FIREBASE_API_KEY

# Environment variables for Vite
ENV VITE_APP_BASE_URL=${VITE_APP_BASE_URL}
ENV VITE_APP_FIREBASE_API_KEY=${VITE_APP_FIREBASE_API_KEY}

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build project
RUN npm run build

# ============================
# Production Stage
# ============================
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]