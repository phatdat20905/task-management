# Giai đoạn 1: Đón nhận biến từ GitHub và Build source
FROM node:alpine3.18 as build
WORKDIR /app

# Khai báo các tham số nhận vào khi build
ARG VITE_APP_BASE_URL
ARG VITE_APP_FIREBASE_API_KEY

# Chuyển tham số build thành biến môi trường cho Vite nhận diện
ENV VITE_APP_BASE_URL=$VITE_APP_BASE_URL
ENV VITE_APP_FIREBASE_API_KEY=$VITE_APP_FIREBASE_API_KEY

# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]