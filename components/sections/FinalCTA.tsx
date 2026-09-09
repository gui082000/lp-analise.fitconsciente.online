import { CTAButton } from "@/components/ui/CTAButton";
import { finalCta } from "@/data/content";

export function FinalCTA() {
  return (
    <section className="bg-gradient-brand px-4 py-12 text-center sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-primary-foreground sm:text-4xl">
          {finalCta.heading}
        </h2>

        <p className="mt-4 text-base text-primary-foreground/85">{finalCta.subtext}</p>

        <div className="mt-8 flex justify-center">
          <CTAButton href="#planos" variant="outline" trackingLabel="final_cta">
            {finalCta.ctaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
