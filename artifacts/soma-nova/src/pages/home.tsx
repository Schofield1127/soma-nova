import { Link } from 'wouter';
import { services } from '@/content/site';
import { Photo } from '@/components/site/Photo';
import { Reveal } from '@/components/site/Reveal';
import { ConsultButton, PhoneLink } from '@/components/site/Actions';
import { QuoteStepper } from '@/components/site/Quotes';
import { Pricing } from '@/components/site/Pricing';
import { ClosingBand } from '@/components/site/ClosingBand';
import { useSeo } from '@/components/site/useSeo';

const steps = [
  { n: '01', title: 'A free 30-minute consult', text: 'We talk about your body, your history and what you want. No commitment.' },
  { n: '02', title: 'A plan built around you', text: 'I put together a program that fits your goals, your limits and your week.' },
  { n: '03', title: 'Training, one-on-one', text: 'Sessions happen in my private studio in Morgan Hill. I share the address once you book.' },
];

export default function Home() {
  useSeo(
    'Soma Nova | Personal training in Morgan Hill, CA',
    'One-on-one personal training with Emily Schofield, NASM CPT and CNC, in a private studio in Morgan Hill, CA. Free 30-minute consult.',
  );
  return (
    <>
      {/* Hero */}
      <section className="pt-8 md:pt-14 pb-20 md:pb-28">
        <div className="wrap grid md:grid-cols-12 gap-10 md:gap-8 items-end">
          <div className="md:col-span-5 order-2 md:order-1 md:pb-4">
            <h1 className="text-[2.6rem] leading-[1.04] md:text-[3.6rem] lg:text-[4.2rem] tracking-[-0.025em]" data-testid="text-hero-title">
              Personal training for the <em className="italic">21st-century</em> human.
            </h1>
            <p className="mt-6 measure text-stone text-[1.08rem] md:text-[1.15rem]">
              One-on-one training in a private studio in Morgan Hill, built around your body, your goals and your life.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 items-start">
              <ConsultButton testId="button-hero-consult" />
              <PhoneLink testId="link-hero-phone" />
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 -mx-[var(--gutter)] md:mx-0 md:-mr-[var(--gutter)]">
            <Photo slot="hero" eager className="aspect-[4/5] md:aspect-[3/2]" sizes="(min-width: 768px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-24 md:pb-32">
        <Reveal className="wrap grid md:grid-cols-12 gap-6">
          <h2 className="md:col-span-4 text-[2rem] md:text-[2.6rem] italic">Invest in yourself.</h2>
          <div className="md:col-span-6 md:col-start-6 measure text-[1.12rem] md:text-[1.2rem] leading-[1.65] prose-soft">
            <p>Taking care of yourself takes time, and it&rsquo;s worth it. I offer a mix of exercise, mindful practice and nutrition coaching, so you can learn to look after every part of your own body.</p>
            <p className="text-stone">It&rsquo;s just you and me in the room. Nobody watching, nobody comparing.</p>
          </div>
        </Reveal>
      </section>

      {/* Training */}
      <section className="bg-sand py-20 md:py-28" aria-labelledby="training-h">
        <div className="wrap grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="label">Training</p>
            <h2 id="training-h" className="mt-4 text-[2rem] md:text-[2.6rem]">Focused on you</h2>
            <div className="mt-8 hidden md:block max-w-[18rem]">
              <Photo slot="studioDetail" className="aspect-square" sizes="18rem" />
            </div>
          </div>
          <Reveal className="md:col-span-7 md:col-start-6">
            <ul className="m-0 p-0 list-none border-t border-ink/15">
              {services.map((s) => (
                <li key={s.id} className="py-6 md:py-7 border-b border-ink/15 grid sm:grid-cols-[13rem_1fr] gap-2 sm:gap-8" data-testid={`row-service-${s.id}`}>
                  <h3 className="text-[1.3rem] md:text-[1.4rem]">{s.name}</h3>
                  <p className="text-ink/85 text-[16px] md:text-[17px]">{s.short}</p>
                </li>
              ))}
            </ul>
            <Link href="/training" className="tlink inline-block mt-8" data-testid="link-more-training">More about training</Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 md:py-32">
        <div className="wrap grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          <div className="md:col-span-5">
            <Photo slot="portrait" className="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <Reveal className="md:col-span-5 md:col-start-8">
            <p className="label">About Emily</p>
            <h2 className="mt-4 text-[2rem] md:text-[2.6rem]">Hi, I&rsquo;m Emily.</h2>
            <div className="mt-6 measure prose-soft">
              <p>I&rsquo;m a NASM Certified Personal Trainer and Certified Nutrition Coach. I&rsquo;m also a busy mom with a chronic illness, so I know how hard it can be to take charge of your health.</p>
              <p>I will never shame you or push you to injury. I will always help you find your personal best.</p>
            </div>
            <Link href="/about" className="tlink tlink-accent inline-block mt-7" data-testid="link-more-about">More about Emily</Link>
          </Reveal>
        </div>
      </section>

      {/* Wide band */}
      <Photo slot="studioWide" className="aspect-[4/3] md:aspect-[16/9] max-h-[80vh] w-full" />

      {/* How it works */}
      <section className="py-24 md:py-32" aria-labelledby="how-h">
        <div className="wrap">
          <p className="label">How it works</p>
          <h2 id="how-h" className="mt-4 text-[2rem] md:text-[2.6rem] max-w-[18ch]">Three steps, no pressure.</h2>
          <ol className="m-0 p-0 list-none mt-12 grid md:grid-cols-3 gap-10 md:gap-12">
            {steps.map((s) => (
              <li key={s.n} className="border-t border-sage pt-5" data-testid={`step-${s.n}`}>
                <span className="font-serif italic text-stone">{s.n}</span>
                <h3 className="mt-3 text-[1.35rem]">{s.title}</h3>
                <p className="mt-3 text-stone text-[16px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kind words */}
      <section className="bg-sand py-20 md:py-28" aria-labelledby="kind-h">
        <div className="wrap grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="label" id="kind-h">Kind words</p>
            <Link href="/kind-words" className="tlink inline-block mt-5 text-[15px]" data-testid="link-all-kind-words">Read them all</Link>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <QuoteStepper />
          </div>
        </div>
      </section>

      {/* Coaching + pricing */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <Reveal><Pricing /></Reveal>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
