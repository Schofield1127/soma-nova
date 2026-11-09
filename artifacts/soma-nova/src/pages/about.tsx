import { Link } from 'wouter';
import { Photo } from '@/components/site/Photo';
import { Reveal } from '@/components/site/Reveal';
import { ClosingBand } from '@/components/site/ClosingBand';
import { useSeo } from '@/components/site/useSeo';

export default function About() {
  useSeo('About Emily | Soma Nova, Morgan Hill', 'Emily Schofield is a NASM Certified Personal Trainer and Certified Nutrition Coach training clients one-on-one in Morgan Hill, CA.');
  return (
    <>
      <section className="s-orchid pt-10 md:pt-20 pb-20 md:pb-28">
        <div className="wrap grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="offset-block mr-[6px] mb-[6px] md:sticky md:top-32">
              <Photo slot="portrait" className="aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <p className="label">About Emily</p>
            <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[6.5rem]">Hi, I&rsquo;m Emily Schofield.</h1>
            <p className="mt-5 label">NASM CPT · NASM CNC</p>

            <div className="mt-10 measure prose-soft font-medium text-[1.05rem] md:text-[1.1rem]">
              {/* TODO(Emily): why "Soma Nova" — add one or two sentences on the new name here. Do not invent this story. */}
              <p>I&rsquo;m certified through the National Academy of Sports Medicine in both personal training and nutrition coaching, and I keep learning about wellness all the time. This work is my passion, especially when a client cares about their long-term health. I can help you with how you look, but my heart is in helping you make lifestyle changes for a better quality of life.</p>
              <p>I&rsquo;m a busy mom with a chronic illness, so I really do understand how hard it can be to take charge of your health. I will never judge you, push you to injury, or shame you. I will <em>always</em> draw out your personal best.</p>
              <p>My job is to guide you safely toward a purpose, not to sell you endless sessions. Whether it&rsquo;s losing weight, getting stronger or something else entirely, let&rsquo;s work on it together. I know you can do it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-char py-20 md:py-28">
        <Reveal className="wrap grid md:grid-cols-12 gap-8">
          <p className="label md:col-span-3">Happy clients, happy trainer</p>
          <figure className="m-0 md:col-span-8 md:col-start-5">
            <span aria-hidden="true" className="block font-display text-orchid text-[8rem] leading-[0.7] h-[5rem] select-none">&ldquo;</span>
            <blockquote className="m-0 font-semibold text-[1.4rem] md:text-[1.65rem] leading-[1.38]">Emily taps into the side of fitness I need and enjoy. For my personal situation…having this routine in my life has been very beneficial and I know others need it.</blockquote>
            <figcaption className="mt-5 label">Amber S.</figcaption>
            <Link href="/kind-words" className="tlink inline-block mt-8" data-testid="link-about-kind-words">Read what clients say</Link>
          </figure>
        </Reveal>
      </section>

      <section className="s-blush py-20 md:py-28">
        <div className="wrap grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1">
            <h2 className="text-[3.2rem] md:text-[5rem]">Let&rsquo;s have a chat.</h2>
            <p className="mt-5 measure">I&rsquo;m happy to set up a free consult to see if what I offer is a good fit for you.</p>
            <Link href="/contact" className="btn mt-8" data-testid="button-about-consult">Book a free 30-minute consult</Link>
          </div>
          <div className="md:col-span-4 md:col-start-8 order-1 md:order-2">
            <Photo slot="studioDetail" className="aspect-square" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>
      </section>

      <ClosingBand />
    </>
  );
}
