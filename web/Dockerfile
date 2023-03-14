FROM node:18-alpine AS builder

COPY . .

RUN npm install
RUN npm run build

FROM nginx

COPY --from=builder dist /usr/share/nginx/html