import { CTAButton } from "@/components/ui/CTAButton";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { benefits } from "@/data/content";

export function BenefitsSection() {
  return (
    <section className="bg-secondary/50 px-4 py-12 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border-[10px] border-foreground bg-foreground shadow-lift lg:mx-0">
          <ResponsiveImage
            mobileSrc={benefits.image.mobile.src}
            mobileWidth={benefits.image.mobile.width}
            mobileHeight={benefits.image.mobile.height}
            desktopSrc={benefits.image.desktop.src}
            desktopWidth={benefits.image.desktop.width}
            desktopHeight={benefits.image.desktop.height}
            alt="Mapa visual de exemplo: Tipos de Amostras Biológicas"
            sizes="(min-width: 1024px) 420px, 90vw"
            className="h-auto w-full"
          />
        </div>

        <div>
          <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
            {benefits.heading} <span className="text-primary">{benefits.headingHighlight}</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{benefits.description}</p>

          <ul className="mt-6 space-y-3">
            {benefits.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lab-teal/20 text-xs font-bold text-lab-teal">
                  ✓
                </span>
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-card p-5 shadow-card">
            <p className="text-base font-bold text-foreground">{benefits.quote}</p>
          </div>

          <div className="mt-6 flex">
            <CTAButton href="#planos" trackingLabel="benefits_cta">
              {benefits.ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
