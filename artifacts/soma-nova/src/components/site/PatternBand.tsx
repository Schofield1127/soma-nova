import { findPhoto, photoSlots } from '@/content/photos';
import { Accent, type AccentName } from './Accent';

// Owner-requested weights scattered across the band while it's still a placeholder.
// Positions are percentages of the band; they sit in the upper part so the caption stays clear.
const SCATTER: { name: AccentName; left: string; top: string; size: string; rotate: number; hideMobile?: boolean }[] = [
  { name: 'dumbbell', left: '6%', top: '14%', size: 'w-16 h-11 md:w-28 md:h-20', rotate: -24 },
  { name: 'plate', left: '24%', top: '30%', size: 'w-8 h-8 md:w-14 md:h-14', rotate: 0, hideMobile: true },
  { name: 'kettlebell', left: '40%', top: '10%', size: 'w-8 h-10 md:w-14 md:h-16', rotate: 10 },
  { name: 'dumbbell', left: '58%', top: '34%', size: 'w-14 h-10 md:w-24 md:h-16', rotate: 18 },
  { name: 'plate', left: '76%', top: '8%', size: 'w-9 h-9 md:w-16 md:h-16', rotate: 0 },
  { name: 'kettlebell', left: '90%', top: '36%', size: 'w-7 h-9 md:w-12 md:h-14', rotate: -12, hideMobile: true },
];

function AccentScatter() {
  return (
    <div className="accent-scatter" aria-hidden="true" data-testid="accent-scatter">
      {SCATTER.map((a, i) => (
        <span
          key={i}
          className={`absolute ${a.hideMobile ? 'hidden md:block' : ''}`}
          style={{ left: a.left, top: a.top, transform: `rotate(${a.rotate}deg)` }}
        >
          <Accent name={a.name} className={`block ${a.size}`} testId={`accent-hero-${i}`} />
        </span>
      ))}
    </div>
  );
}

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
  accents = false,
  testId = 'pattern-band',
}: {
  className?: string;
  drift?: boolean;
  /** Scatter weight accents across the placeholder (hidden once the real photo exists). */
  accents?: boolean;
  testId?: string;
}) {
  const s = photoSlots.patternHero;
  const src = findPhoto(s.file);
  if (!src) {
    return (
      <div className={`pattern-band ${className}`} role="img" aria-label={`Photo coming soon: ${s.shows}`} data-testid={testId}>
        {accents && <AccentScatter />}
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
