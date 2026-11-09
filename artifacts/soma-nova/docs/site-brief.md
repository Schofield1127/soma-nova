# Replit prompt: build the Soma Nova website (v1)

Paste everything below the line into Replit Agent in the existing **soma-nova** project.

---

Build the real website for **Soma Nova** in the existing `artifacts/soma-nova` React + Vite app. Read `replit.md` first and follow every rule in it. This replaces the coming-soon placeholder. Keep the launch hold: the `noindex, nofollow` tag and the disallow-all `robots.txt` stay in place, and do not publish, deploy or connect a domain.

## What this is

Soma Nova is the new name for Protea Fitness (https://www.proteafitness.com), Emily Schofield's one-on-one personal training business in Morgan Hill, CA. Emily is a NASM Certified Personal Trainer and Certified Nutrition Coach. She trains clients in a private home studio, and occasionally in clients' homes. She is a mom with a chronic illness herself, and her whole approach is patient, safe and non-judgmental.

Open proteafitness.com (Home, About, Services at /whatido, Happy Clients at /happyclients) and use it as the content template. Keep its structure, its warmth and its plain, personal voice. Modernize it and make it feel like a small boutique studio, not a gym chain or a tech startup.

The owner's one design request: **"Please don't make it look like AI."** Treat that as the main requirement. The rules in "Do not" below are not optional.

## Feel

Think of a small, well-run boutique: a pilates studio, a physical therapy practice with good taste, an independent wellness shop. Quiet, warm, confident, a bit editorial. Lots of space, real photos, few words. It should look like a person with taste made it by hand for one specific trainer in one specific town.

## Palette (use exactly these, as CSS variables)

The protea flower is the thread from the old brand: dusty pink petals, silvery sage leaves.

- `--paper` #F6F1EA, warm off-white page background (never pure white)
- `--sand` #E9DFD3, alternate section background
- `--ink` #2B2622, text and dark sections (warm near-black, never #000)
- `--stone` #645A52, secondary text
- `--protea` #A4545A, the single accent: links, primary button, small details
- `--sage` #8A9A86, sparing secondary accent: thin rules, small labels
- Borders: `--ink` at about 12% opacity

No other colors. No gradients anywhere. If Emily's existing logo uses clearly different colors, stop and show me before changing the palette.

## Type

- Headings: **Fraunces** (Google Fonts), weight 400 or 500, normal or italic, never bold. Large and calm, with slightly tight letter-spacing.
- Body and UI: **Inter**, 400 and 500, 17 to 18px body, line-height around 1.6, max line length about 65 characters.
- Small uppercase labels (for example "TRAINING", "ABOUT EMILY") in Inter 500, 12px, letter-spacing 0.12em, color `--stone`. Use them sparingly.
- Self-host the fonts with `@fontsource` packages so the site makes no third-party requests.

## Layout and details

- Generous whitespace. Sections separated by space and background change, not by boxes.
- Asymmetric, editorial layouts: image on one side, text offset on the other; let one photo run full-bleed.
- Corners: square or 2px radius. No pill buttons, no big rounded cards.
- Shadows: none.
- Buttons: one solid style (`--protea` background, `--paper` text) and one text-link style with an underline. Labels in plain words.
- Thin 1px rules in `--sage` or ink at 12% are fine as dividers.
- Motion: at most a short fade-in on scroll (under 300ms, respects `prefers-reduced-motion`). No parallax, no animated counters, no marquee.
- Mobile first. Check every section at 375px wide. Sticky header with a simple text menu; on mobile, a plain full-screen menu.

## Logo

Typographic wordmark for now: "Soma Nova" in Fraunces, regular weight, with "PERSONAL TRAINING · MORGAN HILL" as a small label underneath. No icon, no flower graphic, no generated logo. A real logo can replace it later.

## Photography

Real photos only. Emily will supply them, so build proper slots:

- Create `artifacts/soma-nova/src/assets/photos/` and a single config file listing every photo slot with its file name, alt text and what it should show.
- Until real photos are added, each slot shows a flat `--sand` block with the correct aspect ratio and a small caption in `--stone` describing the shot needed, for example "Photo: Emily coaching a client through a split squat, natural light, 4:5".
- Do **not** use stock photos, AI-generated images, illustrations or the iStock images from the old site (those licenses belong to the old Squarespace account).
- Photo slots needed:
  1. Hero: Emily coaching a client in the studio, natural light, wide (3:2 desktop, 4:5 mobile crop).
  2. Portrait of Emily, relaxed, not a gym selfie (4:5).
  3. Studio detail: equipment, mat, plants or window light (1:1).
  4. Hands-on coaching moment, a form correction (4:5).
  5. Optional wide studio shot for a full-bleed band (16:9).
- Images get descriptive alt text, `loading="lazy"` below the fold, and width/height set to prevent layout shift.

## Pages and content

One long home page plus a few short pages. Navigation: **Training, About, Kind Words, Contact**, and a "Book a free consult" button.

**Home**
1. Hero: photo slot 1, headline carried over from the old site: "Personal training for the 21st-century human." Subline: "One-on-one training in a private studio in Morgan Hill, built around your body, your goals and your life." Button: "Book a free 30-minute consult". Secondary text link: "Call or text (408) 705-7176".
2. Short intro (two or three sentences, Emily's voice): adapt "Invest in yourself" from the old home page.
3. Training: the five services from /whatido as a simple list with thin dividers, each with a one or two sentence description adapted from the old copy: Corrective training, Strength training, Bodyweight and mat work, Nutrition coaching, Special circumstances (chronic illness, pre and postnatal, seniors, youth, after physical therapy). No icons, no cards, no grid of boxes.
4. About Emily teaser: portrait slot, two or three sentences from the old About page (NASM CPT and CNC, busy mom with a chronic illness, no shame and no pushing to injury), text link "More about Emily".
5. How it works: three short numbered steps as plain text in a row (not cards): free 30-minute consult, a plan built around you, training one-on-one in the private studio. Mention that the studio address is shared once you book.
6. Kind words: one large pull quote at a time (Keith L., Noah F., Amber S., Lauren O., Erin V., Zade T.). Copy them exactly from the old Home, About and Happy Clients pages, with only obvious typos fixed. Show first name and last initial only. Simple previous/next text links, no auto-rotating carousel, no star ratings, no avatars.
7. Pricing: see the pricing rule below.
8. Closing band in `--ink` with `--paper` text: "There's no commitment, pressure or obligation." plus the consult button and phone.
9. Footer: wordmark, "Morgan Hill, CA", phone, email, Instagram text link, "Formerly Protea Fitness", copyright with the current year. No street address.

**Training** page: the five services in more depth, using all of the old /whatido copy, plus a note that in-home sessions are available on request.

**About** page: the full old About copy, rewritten lightly for Soma Nova. Remove the line that explains the protea flower. Leave a clearly marked placeholder (`TODO(Emily): why "Soma Nova"`) where she can add one or two sentences on the new name. Do not invent the story.

**Kind Words** page: all testimonials, same rules as above.

**Contact** page: free consult explanation, big tappable links for call (`tel:+14087057176`), text (`sms:+14087057176`) and email (`mailto:proteafitness.morganhill@gmail.com`), and Instagram. "Private studio in Morgan Hill. Address shared after booking." No map, no embedded form for now (a form needs an email-sending service, which needs my approval).

Drop the old Blog and the Roy T. Bennett and Misty Copeland quote blocks.

## Pricing

Prices are not decided. Build a pricing section driven by a config file with `showPrices: false`. While it is false, the section reads: "Sessions are priced by package. We'll go over options at your free consult." and shows the consult button. When true, it renders single session and package rows from the config as a plain table-like list (not cards, no "Most popular" badge). Put placeholder values like `TBD` in the config. Never show real numbers until I confirm them.

## Copy rules

- Write like Emily talking to a neighbor: first person, plain, warm, specific. Short sentences.
- Use her old copy as the source. Tighten it, don't replace it with marketing language.
- Banned words and phrases: transform your life, unlock, unleash, elevate, journey, empower, game-changer, holistic wellness solution, best version of yourself, crush your goals, results-driven, cutting-edge, seamless, "Ready to...?" headlines, "Whether you're X or Y..." openers.
- No exclamation-point pileups, no emoji, no invented stats ("500+ clients"), no fake urgency, no made-up testimonials.
- No medical claims or promised outcomes. "Works with clients who have chronic illnesses" is fine. "Heals" or "cures" is not.

## Do not (this is what makes a site look AI-made)

- No gradients, gradient text, glows, blurred color blobs, glassmorphism or noise overlays.
- No emoji or icon sets used as decoration (no Lucide/Heroicons next to every heading). Icons only where functional, like a menu toggle.
- No three-column "feature card" grid with an icon, a bold title and two lines of text.
- No big rounded cards with drop shadows; do not use the default shadcn/ui card, badge or button look. Restyle anything you keep.
- No "Trusted by" logo strips, star-rating widgets, animated number counters, sparkle/check bullets, or "Why choose us" sections.
- No purple, teal or blue accents, no dark mode toggle, no hero that is just centered headline + subhead + two buttons over a gradient.
- No stock or AI images, no illustrations, no abstract 3D shapes.
- No chatbot widget, popup, cookie banner, newsletter modal or exit-intent anything.

## Technical

- Add page `<title>` and meta descriptions for each page, but keep `noindex, nofollow` sitewide for now.
- Add LocalBusiness structured data with name, phone, city (Morgan Hill, CA) and area served only. No street address and no coordinates.
- Lighthouse on mobile: aim for 95+ on performance, accessibility and best practices. Text contrast must pass WCAG AA; use `--protea` for small text only on `--paper` (it is too light on `--sand`), and `--stone` is fine on both.
- No analytics, trackers or third-party embeds.
- Don't add backend features. The Express API can stay as it is.
- Commit and push to the GitHub repo when done.

When finished, stop and give me: a short list of what you built, the list of photo slots Emily needs to fill, every `TODO(Emily)` placeholder, and a screenshot of the home page on desktop and on mobile.
