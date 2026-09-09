"use client";

import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { DownsellModal } from "@/components/ui/DownsellModal";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { pricing, pricingSection } from "@/data/content";
import { getCheckoutUrl } from "@/lib/checkoutLinks";

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-foreground">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lab-green/15 text-[10px] font-bold text-lab-green">
        ✓
      </span>
      {text}
    </li>
  );
}

function CrossItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
        ×
      </span>
      {text}
    </li>
  );
}

export function PricingSection() {
  const { basico, premium } = pricing;
  const [downsellOpen, setDownsellOpen] = useState(false);

  return (
    <section id="planos" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          {pricingSection.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {pricingSection.heading}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {pricingSection.subheading}
        </p>

        <div className="mx-auto mt-10 grid max-w-[1000px] items-start gap-6 text-left lg:grid-cols-2">
          {/* Plano Básico */}
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-8">
            <ResponsiveImage
              mobileSrc={basico.image.mobile.src}
              mobileWidth={basico.image.mobile.width}
              mobileHeight={basico.image.mobile.height}
              desktopSrc={basico.image.desktop.src}
              desktopWidth={basico.image.desktop.width}
              desktopHeight={basico.image.desktop.height}
              alt={basico.displayTitle}
              sizes="180px"
              className="mx-auto h-auto w-36"
            />

            <h3 className="mt-5 text-lg font-extrabold text-foreground">{basico.displayTitle}</h3>

            <p className="mt-3 text-sm text-muted-foreground line-through">De R$ {basico.priceFromLabel}</p>
            <p className="text-5xl font-extrabold text-primary-deep">R$ {basico.priceLabel}</p>
            <p className="mt-1 text-sm text-muted-foreground">Pagamento único</p>

            <ul className="mt-5 space-y-2.5">
              {basico.features.map((feature) => (
                <CheckItem key={feature} text={feature} />
              ))}
            </ul>

            <p className="mt-5 text-sm font-bold text-muted-foreground">Não Inclui:</p>
            <ul className="mt-2.5 space-y-2.5">
              {basico.notIncluded.map((item) => (
                <CrossItem key={item} text={item} />
              ))}
            </ul>

            <div className="mt-6 flex-1" />
            <div className="mt-6">
              <CTAButton
                variant="outline"
                fullWidth
                trackingLabel="pricing_basico"
                value={basico.priceValue}
                onClick={() => setDownsellOpen(true)}
              >
                {basico.ctaText}
              </CTAButton>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="relative flex h-full flex-col rounded-3xl border-2 border-primary bg-card p-6 shadow-lift sm:p-8 lg:-mt-4">
            <span className="absolute -top-3.5 left-6 rounded-full bg-gradient-brand px-3 py-1.5 text-[0.7rem] font-extrabold tracking-wider text-primary-foreground uppercase">
              {premium.badge}
            </span>

            <ResponsiveImage
              mobileSrc={premium.image.mobile.src}
              mobileWidth={premium.image.mobile.width}
              mobileHeight={premium.image.mobile.height}
              desktopSrc={premium.image.desktop.src}
              desktopWidth={premium.image.desktop.width}
              desktopHeight={premium.image.desktop.height}
              alt={premium.displayTitle}
              sizes="180px"
              className="mx-auto h-auto w-36"
            />

            <h3 className="mt-5 text-lg font-extrabold text-primary">{premium.displayTitle}</h3>

            <p className="mt-3 text-sm text-muted-foreground line-through">De R$ {premium.priceFromLabel}</p>
            <p className="text-5xl font-extrabold text-primary-deep">R$ {premium.priceLabel}</p>
            <p className="mt-1 text-sm text-muted-foreground">Pagamento único</p>

            <ul className="mt-5 space-y-2.5">
              {premium.features.map((feature) => (
                <CheckItem key={feature} text={feature} />
              ))}
            </ul>

            <div className="mt-5 rounded-xl bg-secondary/50 p-4 text-center text-sm text-muted-foreground">
              {premium.highlight}
            </div>

            <div className="mt-6 flex-1" />
            <div className="mt-6">
              <CTAButton
                href={getCheckoutUrl("premium")}
                fullWidth
                trackingLabel="pricing_premium"
                value={premium.priceValue}
              >
                {premium.ctaText}
              </CTAButton>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm text-muted-foreground">{pricingSection.trustLine}</p>
      </div>

      {downsellOpen && <DownsellModal onClose={() => setDownsellOpen(false)} />}
    </section>
  );
}
