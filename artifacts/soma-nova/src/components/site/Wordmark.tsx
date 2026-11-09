import { Link } from 'wouter';

// Drop the real logo into src/assets/logo/ as logo.svg, logo.png or logo.webp
// (and optionally logo-light.* for dark backgrounds). It replaces the text wordmark automatically.
const logos = import.meta.glob('../../assets/logo/*.{svg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function findLogo(name: string): string | undefined {
  for (const [path, url] of Object.entries(logos)) {
    const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    if (base === name) return url;
  }
  return undefined;
}

type Tone = 'char' | 'orchid' | 'white';

const toneClass: Record<Tone, string> = {
  char: 'text-char',
  orchid: 'text-orchid',
  white: 'text-white',
};

export function Wordmark({
  onClick,
  testId = 'link-home',
  tone = 'char',
}: {
  onClick?: () => void;
  testId?: string;
  tone?: Tone;
}) {
  const logo = tone === 'char' ? findLogo('logo') : findLogo('logo-light') ?? findLogo('logo');
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex flex-col no-underline ${toneClass[tone]}`}
      data-testid={testId}
      aria-label="Soma Nova, home"
    >
      {logo ? (
        <img src={logo} alt="" className="h-12 md:h-14 w-auto" />
      ) : (
        <>
          <span className="font-display text-[1.9rem] md:text-[2.1rem] leading-[0.9] tracking-[0.02em] uppercase">Soma Nova</span>
          <span className="mt-1 font-sans font-semibold uppercase text-[9.5px] md:text-[10.5px] tracking-[0.14em] leading-none">
            Personal training · Morgan Hill
          </span>
        </>
      )}
    </Link>
  );
}
