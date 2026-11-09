import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import { INDEXABLE, OG_IMAGE, OG_IMAGE_ALT, SITE_URL, SITEMAP_ROUTES } from './seo.config';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    'PORT environment variable is required but was not provided.',
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

// Fills the %SEO_*% placeholders in index.html and serves/emits robots.txt and sitemap.xml,
// all driven by seo.config.ts so launch is a one-line change (INDEXABLE).
function seo(): Plugin {
  const robotsTxt = INDEXABLE
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  const today = new Date().toISOString().slice(0, 10);
  const sitemapXml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    SITEMAP_ROUTES.map((r) => `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    '\n</urlset>\n';
  const files: Record<string, { body: string; type: string }> = {
    '/robots.txt': { body: robotsTxt, type: 'text/plain' },
    '/sitemap.xml': { body: sitemapXml, type: 'application/xml' },
  };
  const values: Record<string, string> = {
    SEO_ROBOTS: INDEXABLE ? 'index, follow' : 'noindex, nofollow',
    SEO_SITE_URL: SITE_URL,
    SEO_OG_IMAGE: OG_IMAGE,
    SEO_OG_IMAGE_ALT: OG_IMAGE_ALT,
  };
  return {
    name: 'soma-nova-seo',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/%(SEO_[A-Z_]+)%/g, (m, key: string) => values[key] ?? m),
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const f = req.url ? files[req.url.split('?')[0]] : undefined;
        if (!f) return next();
        res.setHeader('Content-Type', f.type);
        res.end(f.body);
      });
    },
    generateBundle() {
      for (const [path, f] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName: path.slice(1), source: f.body });
      }
    },
  };
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    'BASE_PATH environment variable is required but was not provided.',
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    seo(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
