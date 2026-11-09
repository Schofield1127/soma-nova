// SEO settings shared by the build (vite.config.ts) and the app (useSeo.ts).
// Plain data only, so Vite can import it at build time.

/** Canonical origin. Every canonical URL, og:url and sitemap entry uses it. */
export const SITE_URL = 'https://somanovafitness.com';

/**
 * Launch switch. While false, the build writes `noindex, nofollow` into every page
 * and a robots.txt that blocks all crawlers. Flip to true (one line) on launch day:
 * the robots tag becomes `index, follow` and robots.txt allows crawling and lists the sitemap.
 */
export const INDEXABLE = false;

/** Public routes that belong in sitemap.xml. Keep in sync with App.tsx. */
export const SITEMAP_ROUTES = ['/', '/training', '/about', '/kind-words', '/contact', '/privacy'];

/** Social share image (1200x630) and its alt text. Lives in public/. */
export const OG_IMAGE = '/og-image.png';
export const OG_IMAGE_ALT = 'Soma Nova, personal training in Morgan Hill, CA. Formerly Protea Fitness.';
