import { testimonials } from '@/content/site';
import { Reveal } from '@/components/site/Reveal';
import { ClosingBand } from '@/components/site/ClosingBand';
import { useSeo } from '@/components/site/useSeo';

export default function KindWords() {
  useSeo('Kind Words | Soma Nova, Morgan Hill', 'What clients say about training one-on-one with Emily Schofield.');
  return (
    <>
      <section className="pt-14 md:pt-24 pb-24 md:pb-32">
        <div className="wrap">
          <p className="label">Kind words</p>
          <h1 className="mt-4 text-[2.6rem] md:text-[4rem] leading-[1.05] max-w-[14ch]">What people are saying.</h1>
          <p className="mt-6 text-stone measure">In their own words. These were written when the studio was still called Protea Fitness.</p>
          <div className="mt-16">
            {testimonials.map((t, i) => (
              <Reveal key={t.id}>
                <figure className="m-0 grid md:grid-cols-12 gap-6 md:gap-8 py-12 md:py-16 border-t border-rule" data-testid={`quote-${t.id}`}>
                  <figcaption className="md:col-span-3 text-stone order-2 md:order-1">{t.name}</figcaption>
                  <blockquote className={`m-0 font-serif order-1 md:order-2 measure ${i % 2 ? 'md:col-span-8 md:col-start-5' : 'md:col-span-8 md:col-start-4'}`}>
                    {t.paragraphs.map((p, k) => (
                      <p key={k} className={`${t.paragraphs.join('').length > 420 ? 'text-[1.15rem] md:text-[1.3rem]' : 'text-[1.45rem] md:text-[1.9rem]'} leading-[1.4] ${k ? 'mt-5' : ''}`}>
                        {k === 0 && '“'}{p}{k === t.paragraphs.length - 1 && '”'}
                      </p>
                    ))}
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ClosingBand />
    </>
  );
}
