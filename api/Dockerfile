FROM node:18-alpine AS builder

WORKDIR /usr/app

COPY . .

RUN npm ci
RUN npm run build

FROM node:18-alpine

COPY --from=builder /usr/app/.env ./
COPY --from=builder /usr/app/build ./build
COPY --from=builder /usr/app/prisma ./prisma
COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/node_modules ./node_modules

EXPOSE 4000

CMD [  "npm", "run", "start:migrate" ]