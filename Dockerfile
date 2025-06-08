FROM node:20-slim AS base
WORKDIR /app

# Set registry manually to avoid DNS/proxy issues
RUN npm config set registry https://registry.npmjs.org/

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps --retry 5

COPY . .
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app

COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
