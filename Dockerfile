FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i 's/listen       80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN echo "robots.txt content:" && cat /usr/share/nginx/html/robots.txt
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]