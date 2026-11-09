import { type ReactNode } from 'react';
import { Link } from 'wouter';
import { site } from '@/content/site';
import { useSeo } from '@/components/site/useSeo';

/*
  Privacy policy. Keep it true to what the site actually does. As of the effective date:
  no forms, accounts, cookies, analytics, ad pixels or third-party embeds; fonts are
  self-hosted; the only outside link is Instagram. If any of that changes (analytics,
  a booking or contact form, automated texts), update this page and the date first.
  Automated or marketing SMS needs its own consent language before it starts.
*/
export const PRIVACY_EFFECTIVE_DATE = 'November 9, 2026';

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="py-10 md:py-12 border-t border-rule first:border-t-0 first:pt-0">
      <h2 className="text-[2.4rem] md:text-[3.2rem]">{title}</h2>
      <div className="mt-5 measure prose-soft">{children}</div>
    </div>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 pl-5 list-disc space-y-2 marker:text-[var(--accent)]">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function Privacy() {
  useSeo(
    'Privacy policy | Soma Nova',
    'How Soma Nova handles your information: what we collect, how we use it, and how to reach us. We never sell your information.',
  );
  const email = (
    <a href={site.mailto} className="tlink break-all" data-testid="link-privacy-email">{site.email}</a>
  );

  return (
    <>
      <section className="s-orchid pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="wrap">
          <p className="label">Privacy</p>
          <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[7rem] max-w-[14ch]">Privacy policy.</h1>
          <div className="mt-8 measure prose-soft font-medium">
            <p>
              Short version: this website doesn&rsquo;t track you, doesn&rsquo;t use cookies and doesn&rsquo;t
              collect anything through forms. We only get your information when you choose to call, text or email
              us, and we use it to train you. We never sell it.
            </p>
            <p className="label" data-testid="text-privacy-effective">Effective {PRIVACY_EFFECTIVE_DATE}</p>
          </div>
        </div>
      </section>

      <section className="s-blush py-16 md:py-24">
        <div className="wrap">
          <Block title="Who we are">
            <p>
              Soma Nova (formerly Protea Fitness) is a one-person personal training business run by Emily Schofield
              in Morgan Hill, California. &ldquo;We&rdquo; and &ldquo;us&rdquo; on this page mean Soma Nova. This
              policy covers this website and the information you share with us as a client or potential client.
            </p>
          </Block>

          <Block title="What this website collects">
            <p>
              Almost nothing. The site has no contact form, no sign-up, no accounts and no online booking or
              payments. It doesn&rsquo;t use cookies, analytics, advertising pixels or social media widgets, and
              its fonts are stored on our own site rather than loaded from Google or anyone else.
            </p>
            <p>
              Like every website, the company that hosts it may automatically record basic technical details when
              a page loads, such as your IP address, browser type, the page you asked for and the time. Those
              records are used to deliver the site and keep it secure. We don&rsquo;t use them to identify or
              follow you.
            </p>
          </Block>

          <Block title="What you share with us">
            <p>When you call, text or email us, or train with us, we may receive:</p>
            <List
              items={[
                'Your name, phone number and email address.',
                'What you write or tell us, like your goals and when you’re free.',
                'Health and fitness details you choose to share, such as injuries, medical conditions, pregnancy or recent physical therapy, so your training is safe.',
                'Notes about your sessions and progress if you become a client.',
                'For clients under 18, the parent or guardian’s contact details.',
              ]}
            />
          </Block>

          <Block title="How we use it">
            <List
              items={[
                'To answer you and schedule your free consult and sessions.',
                'To plan training that fits your body, history and goals.',
                'To keep basic records for running the business, such as scheduling and payments.',
                'To share a testimonial only if you give us permission, and then with your first name and last initial only.',
              ]}
            />
            <p className="mt-4">
              We don&rsquo;t use your information for advertising, and we don&rsquo;t add you to a mailing list.
            </p>
          </Block>

          <Block title="We don't sell or share it">
            <p>
              We do not sell your personal information, and we do not share it with anyone for advertising. We
              don&rsquo;t share your mobile number or texting consent with anyone for their marketing.
            </p>
            <p>We only pass information along when:</p>
            <List
              items={[
                'You ask us to, for example to coordinate with your doctor or physical therapist.',
                'The law requires it, or it’s needed to protect someone’s safety.',
              ]}
            />
            <p className="mt-4">
              Our phone carrier and email provider handle calls, texts and emails as part of delivering them, under
              their own privacy policies.
            </p>
          </Block>

          <Block title="Links to other sites">
            <p>
              This site links to our Instagram. When you follow a link off our site, that service&rsquo;s own
              privacy policy applies, not this one.
            </p>
          </Block>

          <Block title="Do Not Track">
            <p>
              Some browsers can send a &ldquo;Do Not Track&rdquo; or Global Privacy Control signal. Because this
              site doesn&rsquo;t track visitors across websites and doesn&rsquo;t let other companies do so, the
              site works the same either way. No third parties collect information about you over time through
              this site.
            </p>
          </Block>

          <Block title="How long we keep it">
            <p>
              We keep your information while we&rsquo;re working together and for a reasonable time afterward,
              for example for tax or business records. If you never become a client, we delete your messages when
              we no longer need them. You can ask us to delete your information at any time.
            </p>
          </Block>

          <Block title="Keeping it safe">
            <p>
              We take reasonable steps to protect your information, like keeping notes private and using
              password-protected accounts. No method is perfect, so we can&rsquo;t promise absolute security.
            </p>
          </Block>

          <Block title="Your choices">
            <p>
              You can ask us what information we have about you, ask us to correct it, or ask us to delete it. Email
              {' '}{email} and we&rsquo;ll reply within 30 days. We won&rsquo;t treat you differently for asking.
            </p>
          </Block>

          <Block title="Children">
            <p>
              This site isn&rsquo;t meant for children under 13, and we don&rsquo;t knowingly collect information
              from them. Youth training is arranged with a parent or guardian.
            </p>
          </Block>

          <Block title="Changes to this policy">
            <p>
              If we change how we handle information, we&rsquo;ll update this page and the effective date at the
              top. If you&rsquo;re a current client and the change matters to you, we&rsquo;ll tell you directly.
            </p>
          </Block>

          <Block title="Contact">
            <p>
              Questions about privacy? Email {email}. You can also reach us any of the ways on
              the <Link href="/contact" className="tlink">contact page</Link>.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}
