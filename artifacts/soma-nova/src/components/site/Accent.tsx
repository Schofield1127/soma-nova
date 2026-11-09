/*
  Small gym-weight accents (owner-approved generated silhouettes, 2026-11-09).
  Files live in src/assets/accents/<name>.png as transparent silhouettes; only
  the shape is used. CSS masks paint them in the section's accent color, so they
  follow the readability rules automatically (charcoal on orchid, orchid on
  charcoal, magenta on blush). Missing file = nothing renders.
*/
const files = import.meta.glob('../../assets/accents/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export type AccentName = 'dumbbell' | 'kettlebell' | 'plate';

function findAccent(name: AccentName): string | undefined {
  for (const [path, url] of Object.entries(files)) {
    if (path.split('/').pop() === `${name}.png`) return url;
  }
  return undefined;
}

export function Accent({
  name,
  className = '',
  testId,
}: {
  name: AccentName;
  className?: string;
  testId?: string;
}) {
  const src = findAccent(name);
  if (!src) return null;
  const mask = `url(${src}) center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`accent-mark ${className}`}
      style={{ WebkitMask: mask, mask }}
      data-testid={testId ?? `accent-${name}`}
    />
  );
}
