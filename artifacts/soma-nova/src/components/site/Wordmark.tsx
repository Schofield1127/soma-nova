import { Link } from 'wouter';

export function Wordmark({ onClick, testId = 'link-home' }: { onClick?: () => void; testId?: string }) {
  return (
    <Link href="/" onClick={onClick} className="inline-flex flex-col no-underline text-ink" data-testid={testId} aria-label="Soma Nova, home">
      <span className="font-serif text-[1.6rem] leading-none tracking-[-0.02em]">Soma Nova</span>
      <span className="label mt-1.5 !text-[10px] md:!text-[11px]">Personal training · Morgan Hill</span>
    </Link>
  );
}
