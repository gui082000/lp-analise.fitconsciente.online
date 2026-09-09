"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { downsell, pricing } from "@/data/content";
import { getCheckoutUrl } from "@/lib/checkoutLinks";
import { navigateAfterTracking, trackCtaClick } from "@/lib/tracking";
import { useTrackedCheckoutHref } from "@/lib/useTrackedCheckoutHref";

type DownsellModalProps = {
  onClose: () => void;
};

export function DownsellModal({ onClose }: DownsellModalProps) {
  const declineHref = useTrackedCheckoutHref(getCheckoutUrl("basico"));

  function handleDeclineClick(event: React.MouseEvent) {
    trackCtaClick("downsell_decline", pricing.basico.priceValue);
    navigateAfterTracking(event, declineHref);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="downsell-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-card p-6 shadow-lift sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-muted text-lg text-muted-foreground transition-colors hover:bg-secondary"
        >
          ×
        </button>

        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          {downsell.eyebrow}
        </span>

        <h2 id="downsell-heading" className="mt-4 text-2xl leading-tight font-extrabold text-foreground">
          {downsell.headingLine1}
          <br />
          {downsell.headingLine2Prefix}
          <span className="text-primary">{downsell.headingLine2Highlight}</span>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{downsell.description}</p>

        <div className="mt-5 rounded-2xl border-2 border-primary bg-secondary/40 p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-bold text-primary">{downsell.offerCard.label}</span>
            <span className="rounded-full bg-gradient-brand px-3 py-1 text-[0.65rem] font-extrabold tracking-wider text-primary-foreground uppercase">
              {downsell.offerCard.badge}
            </span>
          </div>

          <p className="mt-2 text-4xl font-extrabold text-primary-deep">R$ {downsell.offerCard.price}</p>

          <ul className="mt-4 space-y-2">
            {downsell.offerCard.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lab-green/15 text-[10px] font-bold text-lab-green">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">{downsell.footerNote}</p>

        <div className="mt-5">
          <CTAButton
            href={getCheckoutUrl("premiumDownsell")}
            fullWidth
            trackingLabel="downsell_accept"
            value={downsell.value}
          >
            {downsell.acceptCtaText}
          </CTAButton>
        </div>

        <a
          href={declineHref}
          onClick={handleDeclineClick}
          className="mt-4 block text-center text-sm font-semibold text-muted-foreground underline hover:text-foreground"
        >
          {downsell.declineCtaText}
        </a>
      </div>
    </div>
  );
}
