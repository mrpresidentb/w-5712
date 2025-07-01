FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Use mainline Alpine build with Brotli
FROM nginx:1.25.2-alpine-perl
RUN apk add --no-cache nginx-mod-http-brotli

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i 's/listen       80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
