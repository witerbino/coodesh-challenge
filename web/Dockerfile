FROM node:18-alpine AS builder

COPY . .

RUN npm ci
RUN npm run build

FROM nginx

COPY --from=builder dist /usr/share/nginx/html