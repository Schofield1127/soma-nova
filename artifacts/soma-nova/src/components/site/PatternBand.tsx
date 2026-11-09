import { findPhoto, photoSlots } from '@/content/photos';

/*
  Duotone filter for the dumbbell pattern: grayscale the photo, then map
  shadows to --plum (#5F3857) and highlights to --orchid (#E37CD2).
  Rendered once in Layout; used by .pattern-img via `filter: url(#sn-duotone)`.
*/
export function DuotoneFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <filter id="sn-duotone" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.3725 0.8902" />
          <feFuncG type="table" tableValues="0.2196 0.4863" />
          <feFuncB type="table" tableValues="0.3412 0.8235" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}

/*
  The signature dumbbell pattern. Until Emily supplies `pattern-hero`, this is
  solid orchid with the slot caption. Never substitute stock, AI or drawn dumbbells.
*/
export function PatternBand({
  className = '',
  drift = false,
  testId = 'pattern-band',
}: {
  className?: string;
  drift?: boolean;
  testId?: string;
}) {
  const s = photoSlots.patternHero;
  const src = findPhoto(s.file);
  if (!src) {
    return (
      <div className={`pattern-band ${className}`} role="img" aria-label={`Photo coming soon: ${s.shows}`} data-testid={testId}>
        <p className="photo-caption" aria-hidden="true">Photo: {s.shows}, {s.ratio}</p>
      </div>
    );
  }
  return (
    <div className={`pattern-band ${drift ? 'drift' : ''} ${className}`} aria-hidden="true" data-testid={testId}>
      <div className="pattern-img" style={{ backgroundImage: `url(${src})` }} />
    </div>
  );
}
