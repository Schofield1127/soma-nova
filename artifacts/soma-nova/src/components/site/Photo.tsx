import { findPhoto, photoSlots, type PhotoSlotId } from '@/content/photos';

type Props = {
  slot: PhotoSlotId;
  className?: string; // aspect ratio classes
  eager?: boolean;
  sizes?: string;
};

export function Photo({ slot, className = '', eager = false, sizes = '100vw' }: Props) {
  const s = photoSlots[slot];
  const src = findPhoto(s.file);
  const mobileSrc = findPhoto(s.mobileFile);

  if (!src && !mobileSrc) {
    return (
      <div className={`photo-slot ${className}`} role="img" aria-label={`Photo coming soon: ${s.shows}`} data-testid={`photo-${slot}`}>
        <p className="photo-caption" aria-hidden="true">
          Photo: {s.shows}, {s.ratio}
        </p>
      </div>
    );
  }

  const loading = eager ? 'eager' : 'lazy';
  return (
    <div className={`photo-slot ${className}`} data-testid={`photo-${slot}`}>
      <picture>
        {mobileSrc && src && <source media="(max-width: 767px)" srcSet={mobileSrc} width={s.mobileWidth} height={s.mobileHeight} />}
        <img
          src={src ?? mobileSrc}
          alt={s.alt}
          width={s.width}
          height={s.height}
          loading={loading}
          decoding={eager ? 'sync' : 'async'}
          fetchPriority={eager ? 'high' : 'auto'}
          sizes={sizes}
        />
      </picture>
    </div>
  );
}
