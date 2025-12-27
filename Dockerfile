## Multi-stage Dockerfile to build client+server in CI without relying on `npm ci`
FROM node:20-alpine AS builder

WORKDIR /app

# Copy project files
COPY package.json package-lock.json ./
COPY . .

# Install all dependencies (use npm install to avoid strict lockfile CI failure)
RUN npm set progress=false && npm install

# Build client and server
RUN npm run build

# Remove dev files and keep production dependencies
RUN npm prune --production

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app and production deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/index.cjs"]
