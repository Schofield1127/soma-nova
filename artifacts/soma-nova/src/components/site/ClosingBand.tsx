import { ConsultButton, PhoneLink } from './Actions';

export function ClosingBand({ title = 'There’s no commitment, pressure or obligation.' }: { title?: string }) {
  return (
    <section className="on-ink bg-ink text-paper">
      <div className="wrap py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
        <h2 className="md:col-span-7 text-[2.1rem] md:text-[3.2rem] leading-[1.08]">{title}</h2>
        <div className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-5">
          <p className="text-paper/85">Start with a free 30-minute consult. We talk, you ask questions, and you decide.</p>
          <ConsultButton testId="button-closing-consult" />
          <PhoneLink testId="link-closing-phone" />
        </div>
      </div>
    </section>
  );
}
