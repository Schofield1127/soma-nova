import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { nav, site } from '@/content/site';
import { Wordmark } from './Wordmark';
import { DuotoneFilter } from './PatternBand';
import { Accent, type AccentName } from './Accent';

// A weight in front of each mobile menu item (owner request), alternating shapes.
const MENU_ACCENTS: AccentName[] = ['kettlebell', 'dumbbell', 'plate', 'kettlebell', 'dumbbell'];
const MENU_ACCENT_SIZE: Record<AccentName, string> = {
  kettlebell: 'block w-8 h-10',
  dumbbell: 'block w-12 h-8',
  plate: 'block w-9 h-9',
};

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
    <header ref={header} className={`sticky top-0 z-40 ${open ? 's-char' : 's-orchid'}`}>
      <div className="wrap flex items-center justify-between h-[4.75rem] lg:h-24">
        <Wordmark tone={open ? 'white' : 'char'} />
        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`font-sans font-semibold uppercase text-[14px] tracking-[0.1em] no-underline text-char decoration-[3px] underline-offset-[0.4em] hover:underline ${location === n.href ? 'underline' : ''}`}
              aria-current={location === n.href ? 'page' : undefined}
              data-testid={`link-nav-${n.href.slice(1)}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-sm" data-testid="button-nav-consult">Book a consult</Link>
        </nav>
        <button
          type="button"
          className="lg:hidden -mr-1 p-2 min-h-12 min-w-12 inline-flex items-center justify-center"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          data-testid="button-menu"
        >
          {/* Three stacked dumbbells (owner request). When the menu opens, the outer two
              swing into an X and the middle one fades out. */}
          <span className={`menu-dumbbells ${open ? 'is-open text-white' : 'text-char'}`} aria-hidden="true" data-testid="menu-dumbbells">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="s-char lg:hidden fixed inset-x-0 top-[4.75rem] bottom-0 overflow-y-auto" data-testid="menu-mobile">
          <nav aria-label="Mobile" onClick={() => setOpen(false)} className="wrap pt-6 pb-12 flex flex-col min-h-full">
            {[{ href: '/', label: 'Home' }, ...nav].map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-4 font-display uppercase text-[3.4rem] leading-[1.05] py-1 no-underline ${location === n.href ? 'text-orchid' : 'text-white'}`}
                data-testid={n.href === '/' ? 'link-mobile-home' : `link-mobile-${n.href.slice(1)}`}
              >
                <span className="w-12 flex justify-center flex-none">
                  <Accent name={MENU_ACCENTS[i % MENU_ACCENTS.length]} className={MENU_ACCENT_SIZE[MENU_ACCENTS[i % MENU_ACCENTS.length]]} />
                </span>
                {n.label}
              </Link>
            ))}
            <div className="mt-10 flex flex-col gap-5 items-start">
              <Link href="/contact" className="btn" data-testid="button-mobile-consult">Book a free consult</Link>
              <a href={site.tel} className="tlink" data-testid="link-mobile-phone">Call or text {site.phoneDisplay}</a>
            </div>
            <p className="mt-auto pt-12 muted text-[15px]">Private studio in Morgan Hill, CA</p>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="s-char">
      <div className="wrap py-16 md:py-24 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark tone="orchid" testId="link-footer-home" />
          <p className="mt-6 label accent-label"><Accent name="plate" className="w-5 h-5" testId="accent-footer" />Formerly Protea Fitness</p>
        </div>
        <div className="md:col-span-4 text-[16px] flex flex-col gap-2.5">
          <p className="muted">{site.city}</p>
          <a href={site.tel} className="tlink self-start" data-testid="link-footer-phone">{site.phoneDisplay}</a>
          <a href={site.mailto} className="tlink self-start break-all" data-testid="link-footer-email">{site.email}</a>
          <a href={site.instagramUrl} className="tlink self-start" rel="noopener" data-testid="link-footer-instagram">Instagram {site.instagramHandle}</a>
          <Link href="/privacy" className="tlink self-start mt-3 text-[14px]" data-testid="link-footer-privacy">Privacy policy</Link>
        </div>
        <nav aria-label="Footer" className="md:col-span-3 flex flex-col gap-2.5">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-sans font-semibold uppercase text-[14px] tracking-[0.1em] no-underline text-white hover:text-orchid self-start"
              data-testid={`link-footer-${n.href.slice(1)}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="md:col-span-12 pt-6 border-t border-rule text-[13px] muted">&copy; {year} Soma Nova. Emily Schofield, NASM CPT, Certified Wellness Coach.</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <DuotoneFilter />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-char focus:text-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
