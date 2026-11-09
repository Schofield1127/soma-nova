import { Link } from 'wouter';
import { site } from '@/content/site';

export function ConsultButton({ label = 'Book a free 30-minute consult', testId = 'button-consult' }: { label?: string; testId?: string }) {
  return <Link href="/contact" className="btn" data-testid={testId}>{label}</Link>;
}

export function PhoneLink({ testId = 'link-phone' }: { testId?: string }) {
  return <a href={site.tel} className="tlink" data-testid={testId}>Call or text {site.phoneDisplay}</a>;
}
