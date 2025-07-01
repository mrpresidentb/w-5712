# 1) Build your app
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 2) Serve with plain nginx:alpine
FROM nginx:alpine
COPY --from=builder /app/dist          /usr/share/nginx/html
COPY nginx.conf                       /etc/nginx/conf.d/default.conf

# Ensure NGINX listens on 8080 for Cloud Run
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]