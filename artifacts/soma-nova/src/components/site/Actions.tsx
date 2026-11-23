import { site } from '@/content/site';

// Booking is by text only (owner request, 2026-11-23). Buttons open a text message to Emily.
export function ConsultButton({ label = 'Text to book a free consult', testId = 'button-consult' }: { label?: string; testId?: string }) {
  return <a href={site.sms} className="btn" data-testid={testId}>{label}</a>;
}

export function PhoneLink({ testId = 'link-phone' }: { testId?: string }) {
  return <a href={site.sms} className="tlink" data-testid={testId}>Text {site.phoneDisplay}</a>;
}
