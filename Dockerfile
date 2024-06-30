FROM node:lts-alpine as base

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN corepack enable
RUN corepack prepare pnpm@latest --activate
RUN pnpm install
COPY . .
RUN pnpm run build
ENV PORT 3000

CMD ["npm", "run", "start:dev"]
