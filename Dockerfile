FROM node:24-alpine
RUN apk update && apk upgrade
RUN apk add --no-cache dumb-init

ENV NODE_ENV=production

WORKDIR /app
COPY package*.json ./

RUN npm ci --include=dev

COPY . .
RUN npm run build

RUN npm prune --omit=dev && npm cache clean --force

EXPOSE 3000

USER node

CMD ["dumb-init", "node", "dist/app.cjs"]
