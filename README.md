# Soma Nova

Scaffold only for Soma Nova, personal training in Morgan Hill. Not launched.

## Included

- pnpm workspace with TypeScript.
- React + Vite website in `artifacts/soma-nova`.
- Express API server in `artifacts/api-server`, with `GET /api/healthz`.
- A single coming-soon homepage.
- Pre-launch `noindex, nofollow` metadata and a `robots.txt` that disallows all crawlers.
- Business facts, privacy requirements, and approval rules in `replit.md`.

## Development

Install dependencies with `pnpm install`. Use the managed frontend and API workflows in Replit.

For local development outside Replit, start these in separate terminals:

```sh
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/soma-nova run dev
PORT=5000 pnpm --filter @workspace/api-server run dev
```

Run `pnpm run typecheck` for TypeScript validation.

The placeholder and API health check do not need database credentials. The supplied database library and component-preview sandbox are unused scaffolds.

## Hold until approval

Do not publish, deploy, connect a domain, purchase anything, remove the indexing blocks, or add tracking or embeds without explicit approval. Keep credentials in Secrets, not Git. Search-engine directives do not make a page private.

Read `replit.md` before future work.
