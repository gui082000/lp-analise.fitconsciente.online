import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { bonusSection, pricing } from "@/data/content";

export function BonusSection() {
  return (
    <section className="bg-gradient-brand px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-bold tracking-wider text-primary-foreground uppercase">
          {bonusSection.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-primary-foreground sm:text-4xl">
          {bonusSection.headingLine1}
          <br />
          {bonusSection.headingLine2}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
          {bonusSection.subheading}
        </p>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {pricing.premium.bonuses.map((bonus, index) => (
            <div key={bonus.title} className="rounded-2xl bg-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold tracking-wide text-primary uppercase">
                  Bônus {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="rounded-full bg-lab-green/15 px-3 py-1 text-[11px] font-bold text-lab-green">
                  {bonusSection.includedBadge}
                </span>
              </div>

              <ResponsiveImage
                mobileSrc={bonus.mobileImage}
                mobileWidth={pricing.premium.bonusMobileWidth}
                mobileHeight={pricing.premium.bonusMobileHeight}
                desktopSrc={bonus.image}
                desktopWidth={pricing.premium.bonusDesktopWidth}
                desktopHeight={pricing.premium.bonusDesktopHeight}
                alt={bonus.title}
                sizes="160px"
                className="mx-auto mt-4 h-40 w-auto"
              />

              <h3 className="mt-4 text-base font-extrabold text-primary-deep">{bonus.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bonus.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base font-bold text-primary-foreground">{bonusSection.footerText}</p>
      </div>
    </section>
  );
}
