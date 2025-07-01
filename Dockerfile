# ─── 1) Build your static site ──────────────────────────
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install \
 && npm run build

# ─── 2) Runtime image with dynamic Brotli modules ──────
FROM nginx:1.25.2-alpine-perl

# 2.1) Enable community repo & install Brotli module
RUN echo "https://dl-cdn.alpinelinux.org/alpine/v3.19/community" \
      >> /etc/apk/repositories \
 && apk update \
 && apk add --no-cache nginx-mod-http-brotli

# 2.2) Write a module-load snippet (main nginx.conf will include this)
RUN printf 'load_module modules/ngx_http_brotli_filter_module.so;\n\
load_module modules/ngx_http_brotli_static_module.so;\n' \
  > /etc/nginx/modules/50-brotli.conf

# 2.3) Copy your built files and NGINX config
COPY --from=builder /app/dist          /usr/share/nginx/html
COPY nginx.conf                       /etc/nginx/conf.d/default.conf

# 2.4) Ensure NGINX listens on port 8080 (Cloud Run’s $PORT)
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
