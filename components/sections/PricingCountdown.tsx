import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { pricingCountdown } from "@/data/content";

export function PricingCountdown() {
  return (
    <section className="px-4 pb-12 sm:pb-20">
      <CountdownTimer />
      <p className="mx-auto mt-5 max-w-[720px] text-center text-sm text-muted-foreground">
        🛡️ {pricingCountdown.guaranteePrefix}
        <span className="font-bold text-foreground">{pricingCountdown.guaranteeBold}</span>
        {pricingCountdown.guaranteeSuffix}
      </p>
    </section>
  );
}
