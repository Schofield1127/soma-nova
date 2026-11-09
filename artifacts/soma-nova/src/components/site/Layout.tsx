import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { nav, site } from '@/content/site';
import { Wordmark } from './Wordmark';

function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const [location] = useLocation();

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (!open || e.key !== 'Tab') return;
      const controls = Array.from(header.current?.querySelectorAll<HTMLElement>('a, button') ?? [])
        .filter((el) => el.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  return (
    <header ref={header} className="sticky top-0 z-40 bg-paper border-b border-rule">
      <div className="wrap flex items-center justify-between h-[4.5rem] lg:h-20">
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[15px] no-underline transition-colors hover:text-protea ${location === n.href ? 'text-protea' : 'text-ink'}`}
              aria-current={location === n.href ? 'page' : undefined}
              data-testid={`link-nav-${n.href.slice(1)}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn !py-3 !min-h-0 !text-[15px]" data-testid="button-nav-consult">Book a free consult</Link>
        </nav>
        <button
          type="button"
          className="lg:hidden -mr-2 p-2 min-h-12 text-[15px] font-medium text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          data-testid="button-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[4.5rem] bottom-0 bg-paper overflow-y-auto" data-testid="menu-mobile">
          <nav aria-label="Mobile" onClick={() => setOpen(false)} className="wrap pt-8 pb-12 flex flex-col min-h-full">
            <Link href="/" className="font-serif text-[2rem] py-3 border-b border-rule no-underline text-ink" data-testid="link-mobile-home">Home</Link>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`font-serif text-[2rem] py-3 border-b border-rule no-underline ${location === n.href ? 'text-protea' : 'text-ink'}`}
                data-testid={`link-mobile-${n.href.slice(1)}`}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-10 flex flex-col gap-5 items-start">
              <Link href="/contact" className="btn" data-testid="button-mobile-consult">Book a free consult</Link>
              <a href={site.tel} className="tlink" data-testid="link-mobile-phone">Call or text {site.phoneDisplay}</a>
            </div>
            <p className="mt-auto pt-12 text-stone text-[15px]">Private studio in Morgan Hill, CA</p>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule">
      <div className="wrap py-14 md:py-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark testId="link-footer-home" />
          <p className="mt-6 text-stone text-[15px]">Formerly Protea Fitness</p>
        </div>
        <div className="md:col-span-4 text-[15px] flex flex-col gap-2">
          <p className="text-stone">{site.city}</p>
          <a href={site.tel} className="tlink self-start" data-testid="link-footer-phone">{site.phoneDisplay}</a>
          <a href={site.mailto} className="tlink self-start break-all" data-testid="link-footer-email">{site.email}</a>
          <a href={site.instagramUrl} className="tlink self-start" rel="noopener" data-testid="link-footer-instagram">Instagram {site.instagramHandle}</a>
        </div>
        <nav aria-label="Footer" className="md:col-span-3 text-[15px] flex flex-col gap-2">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="no-underline text-ink hover:text-protea self-start" data-testid={`link-footer-${n.href.slice(1)}`}>{n.label}</Link>
          ))}
        </nav>
        <p className="md:col-span-12 pt-6 border-t border-rule text-[13px] text-stone">&copy; {year} Soma Nova. Emily Schofield, NASM CPT, CNC.</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-paper focus:p-3">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
