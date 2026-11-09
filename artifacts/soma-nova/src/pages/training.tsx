import { services } from '@/content/site';
import { Photo } from '@/components/site/Photo';
import { Reveal } from '@/components/site/Reveal';
import { ClosingBand } from '@/components/site/ClosingBand';
import { Pricing } from '@/components/site/Pricing';
import { useSeo } from '@/components/site/useSeo';

export default function Training() {
  useSeo('Training | Soma Nova, Morgan Hill', 'Corrective, strength, bodyweight and mat work, nutrition coaching, and training for special circumstances. One-on-one in Morgan Hill, CA.');
  return (
    <>
      <section className="s-orchid pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="wrap grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="label">Training</p>
            <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[7.5rem]">Focused on you.</h1>
            <p className="mt-6 measure font-medium text-[1.12rem]">Every session is one-on-one and built from what your body needs that day. Most people do a mix of the five below.</p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="offset-block mr-[6px] mb-[6px]">
              <Photo slot="coaching" className="aspect-[4/5]" sizes="(min-width: 768px) 30vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="s-blush py-16 md:py-24">
        <div className="wrap">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className={`grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 ${i ? 'border-t border-rule' : 'border-t-2 border-plum'}`} data-testid={`section-service-${s.id}`}>
                <span className="md:col-span-2 font-display text-magenta text-[4rem] md:text-[5.5rem] leading-[0.85]" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="md:col-span-4 text-char text-[2.4rem] md:text-[3rem]">{s.name}</h2>
                <div className="md:col-span-6 measure prose-soft">
                  {s.long.map((p, k) => <p key={k}>{p}</p>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="s-char py-16 md:py-24">
        <div className="wrap grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <p className="label">Where we train</p>
            <h2 className="mt-4 text-white text-[3rem] md:text-[4.5rem]">A private studio in Morgan Hill.</h2>
            <p className="mt-6 measure">Sessions happen in my private studio in Morgan Hill. In-home sessions are available on request. I share the studio address once you book.</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Photo slot="studioWide" className="aspect-[4/3] md:aspect-[16/9]" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="s-blush py-20 md:py-28">
        <div className="wrap"><Pricing /></div>
      </section>

      <ClosingBand title="Let’s do something good together." />
    </>
  );
}
