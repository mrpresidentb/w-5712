# 1. Build your Vue/React/static site
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install \
 && npm run build

# 2. Runtime image with Brotli support
FROM nginx:1.25.2-alpine-perl

# 2.1 Enable Alpine community repo & install the Brotli Nginx module
RUN echo "https://dl-cdn.alpinelinux.org/alpine/v3.19/community" \
      >> /etc/apk/repositories \
 && apk update \
 && apk add --no-cache nginx-mod-http-brotli

# 2.2 Copy over your built site and config
COPY --from=builder /app/dist          /usr/share/nginx/html
COPY nginx.conf                       /etc/nginx/conf.d/default.conf

# 2.3 Make sure Nginx listens on port 8080 (Cloud Run’s $PORT)
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]