// Single source of truth for every photo slot on the site.
// To fill a slot, add a real photo to src/assets/photos/ named `<file>.<jpg|jpeg|png|webp|avif>`.
// Real photos of Emily and the studio only: no stock, AI-generated or old iStock images.

// The logo is not a photo slot: drop it into src/assets/logo/ (see Wordmark.tsx).

export type PhotoSlotId = 'patternHero' | 'hero' | 'portrait' | 'studioDetail' | 'coaching' | 'studioWide';

export type PhotoSlot = {
  file: string;
  /** Optional separate 4:5 crop for phones (hero only). */
  mobileFile?: string;
  alt: string;
  shows: string;
  ratio: string; // display label
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
};

export const photoSlots: Record<PhotoSlotId, PhotoSlot> = {
  // Signature element. Shown as a plum/orchid duotone (see PatternBand.tsx), so color doesn't matter.
  // Must be Emily's own photo: not the old site's licensed stock, not AI, not a drawing.
  patternHero: {
    file: 'pattern-hero',
    alt: '',
    shows: 'Top-down shot of real dumbbells laid out in diagonal rows',
    ratio: 'wide, 3:1 or wider, at least 2400px',
    width: 3000,
    height: 1000,
  },
  hero: {
    file: 'hero',
    mobileFile: 'hero-mobile',
    alt: 'Emily coaching a client in her private Morgan Hill studio in natural light',
    shows: 'Emily coaching a client in the studio, natural light, wide',
    ratio: '3:2 desktop, 4:5 mobile crop',
    width: 1800,
    height: 1200,
    mobileWidth: 1080,
    mobileHeight: 1350,
  },
  portrait: {
    file: 'portrait',
    alt: 'Portrait of Emily Schofield, personal trainer',
    shows: 'Relaxed portrait of Emily, not a gym selfie',
    ratio: '4:5',
    width: 1200,
    height: 1500,
  },
  studioDetail: {
    file: 'studio-detail',
    alt: 'Detail of the studio: training equipment and a mat in window light',
    shows: 'Studio detail: equipment, mat, plants or window light',
    ratio: '1:1',
    width: 1200,
    height: 1200,
  },
  coaching: {
    file: 'coaching',
    alt: 'Emily adjusting a client’s form during an exercise',
    shows: 'Hands-on coaching moment, a form correction',
    ratio: '4:5',
    width: 1200,
    height: 1500,
  },
  studioWide: {
    file: 'studio-wide',
    alt: 'Wide view of the private training studio',
    shows: 'Wide studio shot for a full-bleed band (optional)',
    ratio: '16:9',
    width: 2400,
    height: 1350,
  },
};

const found = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function findPhoto(name?: string): string | undefined {
  if (!name) return undefined;
  for (const [path, url] of Object.entries(found)) {
    const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    if (base === name) return url;
  }
  return undefined;
}
