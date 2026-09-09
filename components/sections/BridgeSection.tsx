import { CTAButton } from "@/components/ui/CTAButton";
import { bridge } from "@/data/content";

export function BridgeSection() {
  return (
    <section className="px-4 pt-4 pb-12 sm:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-2xl bg-secondary/60 p-6 sm:p-8">
          <p className="text-lg font-extrabold text-foreground sm:text-xl">{bridge.text}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <CTAButton href="#planos" trackingLabel="bridge_cta">
            {bridge.ctaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
