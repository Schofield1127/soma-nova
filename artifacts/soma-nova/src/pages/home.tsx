import { Link } from 'wouter';
import { services } from '@/content/site';
import { Photo } from '@/components/site/Photo';
import { Reveal } from '@/components/site/Reveal';
import { ConsultButton, PhoneLink } from '@/components/site/Actions';
import { QuoteStepper } from '@/components/site/Quotes';
import { Pricing } from '@/components/site/Pricing';
import { ClosingBand } from '@/components/site/ClosingBand';
import { PatternBand } from '@/components/site/PatternBand';
import { Accent } from '@/components/site/Accent';
import { useSeo } from '@/components/site/useSeo';

const steps = [
  { n: '01', title: 'A free 30-minute consult', text: 'We talk about your body, your history and what you want. No commitment.' },
  { n: '02', title: 'A plan built around you', text: 'I put together a program that fits your goals, your limits and your week.' },
  { n: '03', title: 'Training, one-on-one', text: 'Sessions happen in my private studio in Morgan Hill. I share the address once you book.' },
];

// Home rhythm: orchid hero, charcoal, blush, orchid, charcoal, orchid, blush pricing, orchid close, charcoal footer.
export default function Home() {
  useSeo(
    'Soma Nova | Personal training in Morgan Hill, CA',
    'One-on-one personal training with Emily Schofield, NASM Certified Personal Trainer, in a private studio in Morgan Hill, CA. Formerly Protea Fitness. Free 30-minute consult.',
  );
  return (
    <>
      {/* Hero (orchid) */}
      <section className="s-orchid">
        <PatternBand drift accents className="h-[clamp(120px,22vh,340px)] md:h-[clamp(200px,34vh,420px)]" testId="pattern-hero" />
        <div className="wrap pt-8 md:pt-14 pb-16 md:pb-24">
          <h1
            className="text-plum-ink text-[clamp(4rem,18vw,7.5rem)] lg:text-[clamp(7.5rem,10.5vw,10.5rem)] max-w-[11ch]"
            data-testid="text-hero-title"
          >
            Personal training for the 21st-century human.
          </h1>
          <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 measure font-medium text-[1.1rem] md:text-[1.2rem]">
              One-on-one training in a private studio in Morgan Hill, built around your body, your goals and your life.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-col items-start gap-5">
              <ConsultButton testId="button-hero-consult" />
              <PhoneLink testId="link-hero-phone" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro (charcoal) */}
      <section className="s-char py-20 md:py-32">
        <Reveal className="wrap grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          <div className="md:col-span-6">
            <h2 className="text-white text-[3.6rem] md:text-[6rem]">Invest in yourself.</h2>
            <div className="mt-8 measure text-[1.1rem] md:text-[1.2rem] leading-[1.65] prose-soft">
              <p>Taking care of yourself takes time, and it&rsquo;s worth it. I offer a mix of exercise and mindful practice, so you can learn to look after every part of your own body.</p>
              <p className="muted">It&rsquo;s just you and me in the room. Nobody watching, nobody comparing.</p>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Photo slot="hero" className="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </Reveal>
      </section>

      {/* Training (blush) */}
      <section className="s-blush py-20 md:py-28" aria-labelledby="training-h">
        <div className="wrap">
          <p className="label accent-label"><Accent name="dumbbell" className="w-8 h-4" />Training</p>
          <h2 id="training-h" className="mt-4 text-[3.4rem] md:text-[5.5rem]">Focused on you.</h2>
          <Reveal>
            <ol className="m-0 p-0 list-none mt-10 md:mt-14 border-t-2 border-plum">
              {services.map((s, i) => (
                <li
                  key={s.id}
                  className="py-7 md:py-9 border-b border-rule grid grid-cols-[3.5rem_1fr] md:grid-cols-[7rem_22rem_1fr] gap-x-4 md:gap-x-10 gap-y-2 items-baseline"
                  data-testid={`row-service-${s.id}`}
                >
                  <span className="font-display text-magenta text-[3rem] md:text-[4.5rem] leading-[0.85]" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-char text-[2rem] md:text-[2.6rem]">{s.name}</h3>
                  <p className="col-start-2 md:col-start-3 muted text-[16px] md:text-[17px]">{s.short}</p>
                </li>
              ))}
            </ol>
            <Link href="/training" className="tlink inline-block mt-8" data-testid="link-more-training">More about training</Link>
          </Reveal>
        </div>
      </section>

      {/* About Emily (orchid) */}
      <section className="s-orchid py-20 md:py-32">
        <div className="wrap grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-5">
            <div className="offset-block mr-[6px] mb-[6px]">
              <Photo slot="portrait" className="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7">
            <h2 className="text-plum-ink text-[3.6rem] md:text-[6rem]">Hi, I&rsquo;m Emily.</h2>
            <p className="mt-5 label">NASM Certified Personal Trainer</p>
            <div className="mt-6 measure prose-soft font-medium">
              <p>I&rsquo;m a NASM Certified Personal Trainer. I&rsquo;m also a busy mom with a chronic illness, so I know how hard it can be to take charge of your health.</p>
              <p>I will never shame you or push you to injury. I will always help you find your personal best.</p>
            </div>
            <Link href="/about" className="tlink inline-block mt-7" data-testid="link-more-about">More about Emily</Link>
          </Reveal>
        </div>
      </section>

      {/* How it works (charcoal) */}
      <section className="s-char py-20 md:py-32" aria-labelledby="how-h">
        <div className="wrap">
          <p className="label accent-label"><Accent name="dumbbell" className="w-8 h-4" />How it works</p>
          <h2 id="how-h" className="mt-4 text-white text-[3.4rem] md:text-[5.5rem] max-w-[14ch]">Three steps, no pressure.</h2>
          <ol className="m-0 p-0 list-none mt-12 md:mt-16 grid md:grid-cols-3 gap-12 md:gap-10">
            {steps.map((s) => (
              <li key={s.n} data-testid={`step-${s.n}`}>
                <div className="flex items-end gap-3">
                  <span className="block font-display text-orchid text-[6rem] md:text-[8rem] leading-[0.85]" aria-hidden="true">{s.n}</span>
                  <Accent name="kettlebell" className="w-8 h-9 md:w-10 md:h-11 mb-1" testId={`accent-step-${s.n}`} />
                </div>
                <h3 className="mt-4 text-white text-[1.9rem] md:text-[2.1rem]">{s.title}</h3>
                <p className="mt-3 muted text-[16px] md:text-[17px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kind words (orchid) */}
      <section className="s-orchid py-20 md:py-28" aria-labelledby="kind-h">
        <div className="wrap grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-3">
            <p className="label accent-label" id="kind-h"><Accent name="dumbbell" className="w-8 h-4" />Kind words</p>
            <Link href="/kind-words" className="tlink inline-block mt-5 text-[15px]" data-testid="link-all-kind-words">Read them all</Link>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <QuoteStepper />
          </div>
        </div>
      </section>

      {/* Pricing (blush) */}
      <section className="s-blush py-20 md:py-28">
        <div className="wrap">
          <Reveal><Pricing /></Reveal>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
