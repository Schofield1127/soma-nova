# Soma Nova

Website for Soma Nova, Emily Schofield's one-on-one personal training business in Morgan Hill. Built for preview; not launched.

## Included

- pnpm workspace with TypeScript.
- React + Vite website in `artifacts/soma-nova`.
- Express API server in `artifacts/api-server`, with `GET /api/healthz`.
- Home, Training, About, Kind Words, and Contact pages.
- Local photo slots awaiting Emily's real photographs.
- Self-hosted Fraunces and Inter fonts.
- Config-driven pricing hidden until approved.
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

The informational website and API health check do not need database credentials. The supplied database library and component-preview sandbox are unused scaffolds.

## Hold until approval

Do not publish, deploy, connect a domain, purchase anything, remove the indexing blocks, or add tracking or embeds without explicit approval. Keep credentials in Secrets, not Git. Search-engine directives do not make a page private.

Read `replit.md` before future work.

## Content and photo handoff

- Approved brief: `artifacts/soma-nova/docs/site-brief.md`.
- Verified legacy source copy: `artifacts/soma-nova/docs/legacy-copy.md`.
- Photo slot config: `artifacts/soma-nova/src/content/photos.ts`.
- Add real photo files in `artifacts/soma-nova/src/assets/photos/` following its README; placeholders are replaced automatically.
- Pricing config: `artifacts/soma-nova/src/content/pricing.ts`. Keep `showPrices: false` until prices are approved.
- The only `TODO(Emily)` is the new-name story in `artifacts/soma-nova/src/pages/about.tsx`.
