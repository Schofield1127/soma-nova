import { pricing } from '@/content/pricing';
import { ConsultButton } from './Actions';

// Styled for the blush section. Prices stay hidden while pricing.showPrices is false.
export function Pricing() {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-5">
        <p className="label">Pricing</p>
        <h2 className="mt-4 text-[3rem] md:text-[4.5rem]">Sessions and packages</h2>
      </div>
      <div className="md:col-span-6 md:col-start-7 md:pt-10">
        {pricing.showPrices ? (
          <>
            <dl className="m-0 border-t-2 border-plum" data-testid="list-pricing">
              {pricing.rows.map((r) => (
                <div key={r.id} className="flex items-baseline justify-between gap-6 py-5 border-b border-rule">
                  <dt>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block muted text-[15px]">{r.detail}</span>
                  </dt>
                  <dd className="m-0 font-display text-[2rem] text-magenta tabular-nums">{r.price}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8"><ConsultButton testId="button-pricing-consult" /></div>
          </>
        ) : (
          <>
            <p className="measure text-[1.15rem]" data-testid="text-pricing">Sessions are priced by package. We&rsquo;ll go over options at your free consult.</p>
            <div className="mt-8"><ConsultButton testId="button-pricing-consult" /></div>
          </>
        )}
      </div>
    </div>
  );
}
