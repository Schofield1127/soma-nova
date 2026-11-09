import { useState } from 'react';
import { testimonials } from '@/content/site';

export function QuoteStepper() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);
  return (
    <figure className="m-0" aria-roledescription="testimonial" data-testid="quote-stepper">
      <div aria-live="polite" className="min-h-[18rem] md:min-h-[16rem]">
        <blockquote className="m-0 font-serif text-ink" data-testid={`text-quote-${t.id}`}>
          {t.paragraphs.map((p, k) => (
            <p
              key={k}
              className={`${t.paragraphs.join('').length > 420 ? 'text-[1.25rem] md:text-[1.55rem]' : 'text-[1.6rem] md:text-[2.3rem]'} leading-[1.32] tracking-[-0.01em] ${k ? 'mt-5' : ''}`}
            >
              {k === 0 && <span aria-hidden="true">&ldquo;</span>}
              {p}
              {k === t.paragraphs.length - 1 && <span aria-hidden="true">&rdquo;</span>}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-7 text-stone">{t.name}</figcaption>
      </div>
      <div className="mt-10 pt-5 border-t border-rule flex items-center justify-between text-[15px]">
        <button type="button" className="tlink" onClick={() => go(-1)} data-testid="button-quote-prev">Previous</button>
        <span className="text-stone tabular-nums" data-testid="text-quote-count">{i + 1} of {n}</span>
        <button type="button" className="tlink" onClick={() => go(1)} data-testid="button-quote-next">Next</button>
      </div>
    </figure>
  );
}
