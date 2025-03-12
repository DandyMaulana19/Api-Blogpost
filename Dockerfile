FROM node:22

WORKDIR /app

COPY ./package*.json ./prisma ./
RUN npm i

COPY .env.production ./

ENV PRISMA_CONFIG_PATH=/app/.env.production

RUN npm run generate:prod
RUN npm run migrate:prod

COPY ./ ./

EXPOSE 3100
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]