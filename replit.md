# Soma Nova

Soma Nova is a solo personal training business in Morgan Hill, CA, owned by Emily Schofield (NASM CPT and CNC). It is the new name for Protea Fitness (proteafitness.com).

## Scope and launch hold

- The user has approved building the real website, but has NOT approved launch.
- The approved website brief is `artifacts/soma-nova/docs/site-brief.md`. Follow its content, design, photography, pricing, and technical rules in future sessions.
- Keep the HTML robots tag set to `noindex, nofollow` and `public/robots.txt` disallowing all crawlers until the user explicitly approves launch.
- Do not publish, deploy, connect a domain, or buy anything without explicit user approval.
- Do not add analytics, tracking pixels, or any third-party embeds without approval.

## Business facts and content rules

- Training happens one-on-one in a private home studio in Morgan Hill, with in-home sessions available on request.
- Never publish the studio's street address, a map pin, or coordinates, including in structured data. Share the address only after someone books.
- Specialties: corrective, bodyweight, strength, nutrition coaching, and special circumstances (chronic illness, pre/postnatal, seniors, youth, post-physical therapy).
- Public phone: (408) 705-7176, call or text.
- Email: proteafitness.morganhill@gmail.com, until a new address is chosen.
- Instagram: @protea_fitness (it will be renamed later).
- Pricing isn't final. Don't publish any prices until the user confirms them.
- Never make medical claims or promise health outcomes.
- The site's display name is "Soma Nova". Use "formerly Protea Fitness" in the footer at launch.

## Security and project separation

- Keep all keys and credentials in Secrets. Never put them in code or chat.
- This project is completely separate from The Wheel Guys. Don't reuse its code, keys, phone numbers, or accounts.
- No authentication, booking system, payments, database features, tracking, or external embeds. Consultation requests use direct contact links, not an embedded form.

## Approved website direction

- The owner's main design requirement: "Please don't make it look like AI."
- Quiet, warm, spacious, editorial boutique-studio presentation. No gradients, shadows, decorative icon sets, rounded feature cards, stock images, AI images, or dark-mode toggle.
- Use exactly the brief's paper, sand, ink, stone, protea, and sage palette. Fraunces headings at 400/500; Inter body/UI at 400/500. Fonts must be self-hosted with `@fontsource`, not fetched from Google.
- Use verified legacy copy from `proteafitness.com` Home, About, `/whatido`, and `/happyclients` as the source; preserve testimonials verbatim except obvious typos, with first name and last initial only.
- Emily will supply real photographs. Until then show labeled sand-colored photo slots, not licensed photos from the former site.
- Pricing stays hidden with `showPrices: false`. Future price rows use `TBD` until explicitly confirmed.
- Do not invent the story behind the new name. Leave `TODO(Emily): why "Soma Nova"` for her.
- The Express API stays unchanged. Do not add backend features.

## Run & Operate

- Install dependencies with `pnpm install`.
- Frontend: `pnpm --filter @workspace/soma-nova run dev`
- API: `pnpm --filter @workspace/api-server run dev`
- Use the existing managed workflows in Replit; they provide `PORT` and `BASE_PATH`.
- Outside Replit, provide `PORT=5173 BASE_PATH=/` for the frontend and `PORT=5000` for the API.
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- The website and API health check do not require a database or credentials.
- The unused database library would require `DATABASE_URL` if future approved work uses it.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/soma-nova/` — React + Vite TypeScript website.
- `artifacts/soma-nova/index.html` — page metadata and pre-launch noindex tag.
- `artifacts/soma-nova/public/robots.txt` — pre-launch crawler block.
- `artifacts/api-server/` — Express TypeScript API, with `/api/healthz`.
- `lib/api-spec/openapi.yaml` — API contract.
- `lib/api-client-react/` and `lib/api-zod/` — generated client and validation libraries.
- `lib/db/` — unused database scaffold; no business tables or data.
- `artifacts/mockup-sandbox/` — supplied component-preview scaffold, unused for this site.

## Architecture decisions

- Retain the supplied pnpm workspace and Express API scaffold, but do not add backend features for this informational site.
- Self-host fonts and use local photo assets; no third-party content requests.
- Search-engine directives are not access control; do not put private information on the site.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
