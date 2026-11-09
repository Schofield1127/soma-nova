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
    <>
      <section className="s-orchid pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="wrap">
          <p className="label">Contact</p>
          <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[7.5rem] max-w-[12ch]">Book a free 30-minute consult.</h1>
          <div className="mt-8 measure prose-soft font-medium">
            <p>The consult is a conversation. You tell me what you&rsquo;re hoping for and what has gotten in the way, I ask about your health and history, and we see if I&rsquo;m a good fit for you.</p>
            <p>There&rsquo;s no commitment, pressure or obligation. Call, text or email, whichever is easiest, and we&rsquo;ll find a time.</p>
          </div>
        </div>
      </section>

      <section className="s-char py-12 md:py-20">
        <div className="wrap">
          <ul className="m-0 p-0 list-none border-t border-rule">
            {methods.map((m) => (
              <li key={m.id} className="border-b border-rule">
                <a
                  href={m.href}
                  rel={m.id === 'instagram' ? 'noopener' : undefined}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-7 md:py-9 no-underline text-white"
                  data-testid={`link-contact-${m.id}`}
                >
                  <span className="font-display uppercase text-[3.2rem] md:text-[5rem] leading-[0.9] group-hover:text-orchid transition-colors">{m.label}</span>
                  <span className="text-mist text-[16px] md:text-[18px] break-all sm:break-normal underline decoration-2 underline-offset-4 decoration-transparent group-hover:decoration-orchid transition-colors">{m.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 label">Private studio in Morgan Hill. Address shared after booking.</p>
        </div>
      </section>
    </>
  );
}
