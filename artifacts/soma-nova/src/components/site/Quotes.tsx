import { useState } from 'react';
import { testimonials } from '@/content/site';

// One quote at a time, no auto-rotate. Used on the orchid "Kind words" section.
export function QuoteStepper() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const long = t.paragraphs.join('').length > 420;
  return (
    <figure className="m-0 relative" aria-roledescription="testimonial" data-testid="quote-stepper">
      <span aria-hidden="true" className="block font-display text-char text-[9rem] md:text-[12rem] leading-[0.7] h-[5.5rem] md:h-[7.5rem] select-none">&ldquo;</span>
      <div aria-live="polite" className="min-h-[18rem] md:min-h-[15rem]">
        <blockquote className="m-0 font-sans font-semibold text-plum-ink" data-testid={`text-quote-${t.id}`}>
          {t.paragraphs.map((p, k) => (
            <p
              key={k}
              className={`${long ? 'text-[1.1rem] md:text-[1.25rem] leading-[1.5]' : 'text-[1.4rem] md:text-[1.65rem] leading-[1.38]'} ${k ? 'mt-5' : ''}`}
            >
              {p}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-7 label">{t.name}</figcaption>
      </div>
      <div className="mt-10 pt-5 border-t-2 border-char flex items-center justify-between">
        <button type="button" className="font-sans font-bold uppercase tracking-[0.06em] text-[15px] text-char py-2 hover:underline decoration-[3px] underline-offset-[0.35em]" onClick={() => go(-1)} data-testid="button-quote-prev">Previous</button>
        <span className="label tabular-nums" data-testid="text-quote-count">{i + 1} of {n}</span>
        <button type="button" className="font-sans font-bold uppercase tracking-[0.06em] text-[15px] text-char py-2 hover:underline decoration-[3px] underline-offset-[0.35em]" onClick={() => go(1)} data-testid="button-quote-next">Next</button>
      </div>
    </figure>
  );
}
