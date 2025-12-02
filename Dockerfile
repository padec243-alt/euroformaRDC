# 1. Installer les dépendances
FROM node:20 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# 2. Construire l'application
FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Lancer l'application
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV PORT 8080

EXPOSE 8080

CMD ["node", "server.js"]
