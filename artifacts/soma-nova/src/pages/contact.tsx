import { site } from '@/content/site';
import { useSeo } from '@/components/site/useSeo';

const methods = [
  { id: 'call', label: 'Call', value: site.phoneDisplay, href: site.tel },
  { id: 'text', label: 'Text', value: site.phoneDisplay, href: site.sms },
  { id: 'email', label: 'Email', value: site.email, href: site.mailto },
  { id: 'instagram', label: 'Instagram', value: site.instagramHandle, href: site.instagramUrl },
];

export default function Contact() {
  useSeo('Contact | Soma Nova, Morgan Hill', 'Book a free 30-minute consult with Emily. Call or text (408) 705-7176, or email.');
  return (
    <section className="pt-14 md:pt-24 pb-24 md:pb-32">
      <div className="wrap grid md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="label">Contact</p>
          <h1 className="mt-4 text-[2.6rem] md:text-[3.6rem] leading-[1.05]">Book a free 30-minute consult.</h1>
          <div className="mt-8 measure prose-soft">
            <p>The consult is a conversation. You tell me what you&rsquo;re hoping for and what has gotten in the way, I ask about your health and history, and we see if I&rsquo;m a good fit for you.</p>
            <p>There&rsquo;s no commitment, pressure or obligation. Call, text or email, whichever is easiest, and we&rsquo;ll find a time.</p>
          </div>
          <p className="mt-10 pt-6 border-t border-sage text-stone">Private studio in Morgan Hill. Address shared after booking.</p>
        </div>
        <ul className="md:col-span-6 md:col-start-7 m-0 p-0 list-none border-t border-rule self-start">
          {methods.map((m) => (
            <li key={m.id} className="border-b border-rule">
              <a
                href={m.href}
                rel={m.id === 'instagram' ? 'noopener' : undefined}
                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-6 md:py-8 no-underline text-ink"
                data-testid={`link-contact-${m.id}`}
              >
                <span className="font-serif text-[2rem] md:text-[2.6rem] leading-none group-hover:text-protea transition-colors">{m.label}</span>
                <span className="text-stone text-[16px] break-all sm:break-normal underline decoration-1 underline-offset-4 decoration-transparent group-hover:decoration-protea transition-colors">{m.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
