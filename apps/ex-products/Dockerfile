FROM node:18-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune ex-products --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN yarn install

COPY --from=builder /app/out/full/ .

RUN yarn turbo build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/ex-products/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/ex-products/.next/static ./apps/ex-products/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/ex-products/public ./apps/ex-products/public

RUN mv apps/ex-products/server.js apps/ex-products/server.mjs

CMD node apps/ex-products/server.mjs