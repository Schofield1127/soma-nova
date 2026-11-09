# Soma Nova

Soma Nova is a solo personal training business in Morgan Hill, CA, owned by Emily Schofield (NASM CPT and CNC). It is the new name for Protea Fitness (proteafitness.com).

## Scope and launch hold

- The user has approved building the real website, but has NOT approved launch.
- The approved website brief is `artifacts/soma-nova/docs/site-brief.md`. Follow its content, design, photography, pricing, and technical rules in future sessions.
- Keep `INDEXABLE = false` in `artifacts/soma-nova/seo.config.ts` until the user explicitly approves launch. It drives the robots meta tag, `robots.txt` and the sitemap line in robots.txt; don't hand-edit those.
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
- Design v3 (orchid + charcoal, from her old proteafitness.com homepage): girly but strong, athlete energy. Loud color, heavy type, real gym imagery. Loud is fine; generic is not. Full rules are in the Design section of `docs/site-brief.md`.
- Palette, and no other colors: `--orchid` #E37CD2, `--plum` #5F3857, `--plum-ink` #3A1F36, `--char` #1C1A1F, `--white` #FFFFFF, `--blush` #FBF4FA, `--magenta` #9C2A8C, `--mist` #B9A9B6. No beige/paper tones and no hot pink.
- Readability rules (non-negotiable): text on orchid is `--plum-ink` or `--char`, never white. White text only on `--char` or `--plum`. Orchid text only on `--char` or `--plum`. On light backgrounds, colored text uses `--magenta`. Use the `.s-orchid`, `.s-char`, `.s-plum`, `.s-blush` section classes.
- Type: Anton for display (line-height 0.95, sentence case; uppercase only for short labels), Inter 400/500/600/700 for body and UI at 17 to 18px, labels in Inter 600 12 to 13px uppercase with 0.14em tracking. Never body copy in Anton. No Fraunces or Barlow Condensed. Fonts are self-hosted with `@fontsource`, not fetched from Google.
- Signature element: the `pattern-hero` dumbbell photo as a plum/orchid CSS duotone (`PatternBand.tsx`). Until Emily supplies it, solid orchid with the caption. Never stock, AI or drawn dumbbells.
- Still banned: gradients, gradient text, glows, blurred blobs, glassmorphism, blurred drop shadows, emoji, decorative icon sets, three-card feature grids, rounded shadow cards, default shadcn styling, stock or AI photos, illustrations, star widgets, "Trusted by" strips, counters, chatbots, popups, dark-mode toggle, hype copy.
- AI-generated textures from `scripts/` (see `scripts/README.md`) are for review only. They never go into a photo slot or onto the site without the user's explicit OK.
- Exception approved by the user on 2026-11-09: small generated gym-weight silhouettes (dumbbell, kettlebell, weight plate) in `src/assets/accents/`, shown through `components/site/Accent.tsx` as accents next to section labels, the How-it-works numbers and the footer. They are painted in the section's accent color with a CSS mask. Keep them small and few. This does not allow AI images in photo slots or as the `pattern-hero` pattern.
- Use verified legacy copy from `proteafitness.com` Home, About, `/whatido`, and `/happyclients` as the source; preserve testimonials verbatim except obvious typos, with first name and last initial only.
- Emily will supply real photographs. Until then show labeled placeholder slots (`--plum` on orchid/charcoal, `--orchid` on blush), not licensed photos from the former site. The logo goes in `src/assets/logo/`.
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
- `artifacts/soma-nova/seo.config.ts` — canonical domain, the `INDEXABLE` launch switch, sitemap routes, share image.
- `artifacts/soma-nova/index.html` — default meta, Open Graph/Twitter tags and JSON-LD (city only, never a street address). `%SEO_*%` placeholders are filled by the `seo()` plugin in `vite.config.ts`, which also generates `robots.txt` and `sitemap.xml`.
- `artifacts/soma-nova/src/components/site/useSeo.ts` — per-page title, description, canonical and social tags.
- `artifacts/soma-nova/public/` — `og-image.png` (1200x630 share card) and the favicons.
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
