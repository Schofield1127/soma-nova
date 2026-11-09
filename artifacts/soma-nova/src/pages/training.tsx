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
      <section className="pt-14 md:pt-24 pb-16 md:pb-24">
        <div className="wrap grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="label">Training</p>
            <h1 className="mt-4 text-[2.6rem] md:text-[4rem] leading-[1.05]">Focused on you.</h1>
            <p className="mt-6 measure text-stone text-[1.12rem]">Every session is one-on-one and built from what your body needs that day. Most people do a mix of the five below.</p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Photo slot="coaching" eager className="aspect-[4/5]" sizes="(min-width: 768px) 30vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-t border-rule" data-testid={`section-service-${s.id}`}>
                <span className="md:col-span-1 font-serif italic text-stone">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="md:col-span-4 text-[1.8rem] md:text-[2.2rem]">{s.name}</h2>
                <div className="md:col-span-6 md:col-start-7 measure prose-soft">
                  {s.long.map((p, k) => <p key={k}>{p}</p>)}
                </div>
              </article>
            </Reveal>
          ))}
          <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-sage">
            <p className="label md:col-span-5">Where we train</p>
            <p className="md:col-span-6 md:col-start-7 measure">Sessions happen in my private studio in Morgan Hill. In-home sessions are available on request. I share the studio address once you book.</p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="wrap"><Pricing /></div>
      </section>

      <ClosingBand title="Let’s do something good together." />
    </>
  );
}
