import { ConsultButton, PhoneLink } from './Actions';
import { PatternBand } from './PatternBand';

export function ClosingBand({ title = 'No commitment. No pressure. No obligation.' }: { title?: string }) {
  return (
    <section className="s-orchid" aria-label="Book a consult">
      <PatternBand className="h-[160px]" testId="pattern-closing" />
      <div className="wrap py-20 md:py-28">
        <h2 className="text-[3.4rem] sm:text-[4.5rem] lg:text-[7rem] max-w-[14ch]">{title}</h2>
        <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 measure text-[1.1rem] font-medium">Start with a free 30-minute consult. We talk, you ask questions, and you decide.</p>
          <div className="md:col-span-5 md:col-start-8 flex flex-col items-start gap-5">
            <ConsultButton testId="button-closing-consult" />
            <PhoneLink testId="link-closing-phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
