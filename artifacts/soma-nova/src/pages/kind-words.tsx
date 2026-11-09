import { testimonials } from '@/content/site';
import { Reveal } from '@/components/site/Reveal';
import { ClosingBand } from '@/components/site/ClosingBand';
import { useSeo } from '@/components/site/useSeo';

export default function KindWords() {
  useSeo('Kind Words | Soma Nova, Morgan Hill', 'What clients say about training one-on-one with Emily Schofield.');
  return (
    <>
      <section className="s-orchid pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="wrap">
          <p className="label">Kind words</p>
          <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[7.5rem] max-w-[12ch]">What people are saying.</h1>
          <p className="mt-6 measure font-medium">In their own words. These were written when the studio was still called Protea Fitness.</p>
        </div>
      </section>
      <section className="s-blush py-8 md:py-16">
        <div className="wrap">
          {testimonials.map((t, i) => (
            <Reveal key={t.id}>
              <figure className={`m-0 grid md:grid-cols-12 gap-6 md:gap-8 py-12 md:py-16 ${i ? 'border-t border-rule' : ''}`} data-testid={`quote-${t.id}`}>
                <div className="md:col-span-3 order-2 md:order-1">
                  <span aria-hidden="true" className="hidden md:block font-display text-magenta text-[8rem] leading-[0.7] h-[5rem] select-none">&ldquo;</span>
                  <figcaption className="label md:mt-4">{t.name}</figcaption>
                </div>
                <blockquote className="m-0 order-1 md:order-2 measure md:col-span-8 md:col-start-5 font-semibold">
                  {t.paragraphs.map((p, k) => (
                    <p key={k} className={`${t.paragraphs.join('').length > 420 ? 'text-[1.1rem] md:text-[1.2rem]' : 'text-[1.35rem] md:text-[1.6rem]'} leading-[1.45] ${k ? 'mt-5' : ''}`}>
                      {k === 0 && '“'}{p}{k === t.paragraphs.length - 1 && '”'}
                    </p>
                  ))}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <ClosingBand />
    </>
  );
}
