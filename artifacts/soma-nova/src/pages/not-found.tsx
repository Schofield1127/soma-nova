import { Link } from 'wouter';
import { useSeo } from '@/components/site/useSeo';

export default function NotFound() {
  useSeo('Page not found | Soma Nova', 'This page does not exist.', { notFound: true });
  return (
    <section className="s-orchid py-24 md:py-40">
      <div className="wrap">
        <p className="label">Not found</p>
        <h1 className="mt-4 text-plum-ink text-[4rem] md:text-[7rem] max-w-[12ch]">This page isn&rsquo;t here.</h1>
        <p className="mt-6 measure font-medium">It may have moved when Protea Fitness became Soma Nova.</p>
        <div className="mt-9 flex flex-wrap gap-7 items-center">
          <Link href="/" className="btn" data-testid="button-404-home">Go to the home page</Link>
          <Link href="/contact" className="tlink" data-testid="link-404-contact">Contact Emily</Link>
        </div>
      </div>
    </section>
  );
}
