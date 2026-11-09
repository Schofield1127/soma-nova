import { Link } from 'wouter';
import { useSeo } from '@/components/site/useSeo';

export default function NotFound() {
  useSeo('Page not found | Soma Nova', 'This page does not exist.');
  return (
    <section className="py-28 md:py-40">
      <div className="wrap">
        <p className="label">Not found</p>
        <h1 className="mt-4 text-[2.6rem] md:text-[3.6rem] max-w-[16ch]">This page isn&rsquo;t here.</h1>
        <p className="mt-6 text-stone measure">It may have moved when Protea Fitness became Soma Nova.</p>
        <div className="mt-9 flex flex-wrap gap-7 items-center">
          <Link href="/" className="btn" data-testid="button-404-home">Go to the home page</Link>
          <Link href="/contact" className="tlink" data-testid="link-404-contact">Contact Emily</Link>
        </div>
      </div>
    </section>
  );
}
