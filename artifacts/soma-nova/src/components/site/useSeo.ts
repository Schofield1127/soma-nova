import { useEffect } from 'react';
import { SITE_URL } from '../../../seo.config';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let m = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!m) {
    m = document.createElement('meta');
    m.setAttribute(attr, key);
    document.head.appendChild(m);
  }
  m.setAttribute('content', content);
}

/** Canonical URL for a path on the root domain, without a trailing slash (except the home page). */
export function canonicalUrl(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return SITE_URL + (clean === '/' ? '/' : clean);
}

// The build's robots value (noindex before launch, index after). Captured once so the
// 404 page can switch to noindex and other pages can switch back.
const defaultRobots =
  typeof document !== 'undefined'
    ? document.head.querySelector('meta[name="robots"]')?.getAttribute('content') ?? 'index, follow'
    : 'index, follow';

/**
 * Per-page title, description, canonical and social tags. The defaults in index.html
 * cover crawlers that don't run JavaScript; this updates them for each route.
 * Pass `notFound: true` on the 404 page: it gets noindex and no canonical, because the
 * static host answers every unknown URL with a 200.
 */
export function useSeo(title: string, description: string, opts: { notFound?: boolean } = {}) {
  const withCanonical = !opts.notFound;
  useEffect(() => {
    setMeta('name', 'robots', withCanonical ? defaultRobots : 'noindex');
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    const url = canonicalUrl(window.location.pathname);
    setMeta('property', 'og:url', url);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (withCanonical) {
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = url;
    } else {
      link?.remove();
    }
  }, [title, description, withCanonical]);
}
