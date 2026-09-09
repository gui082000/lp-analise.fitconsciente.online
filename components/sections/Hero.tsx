import { CTAButton } from "@/components/ui/CTAButton";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-secondary/70 to-background pt-12 pb-12 sm:pt-16 sm:pb-20">
      {/* Blobs decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lab-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[1.625rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.4rem]">
            {hero.headlinePrefix}
            <span className="text-primary">{hero.headlineHighlight}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadlinePrefix}
            <span className="font-bold text-primary">{hero.subheadlineHighlight}</span>
            {hero.subheadlineSuffix}
          </p>
        </div>

        {/* Prova visual: capa do Atlas cercada por exemplos reais de mapas */}
        <div className="mx-auto mt-10 max-w-2xl">
          <ResponsiveImage
            mobileSrc={hero.image.mobile.src}
            mobileWidth={hero.image.mobile.width}
            mobileHeight={hero.image.mobile.height}
            desktopSrc={hero.image.desktop.src}
            desktopWidth={hero.image.desktop.width}
            desktopHeight={hero.image.desktop.height}
            alt="Capa do Atlas Visual de Análises Clínicas cercada por exemplos de mapas visuais: preparação do paciente, ordem dos tubos de coleta, hemograma, plaquetas e coleta de urina"
            priority
            sizes="(min-width: 1024px) 640px, (min-width: 640px) 560px, 90vw"
            className="h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <div className="flex justify-center">
            <CTAButton href="#planos" trackingLabel="hero_cta">
              {hero.ctaText}
            </CTAButton>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            {hero.trustBullets.map((bullet, index) => (
              <span key={bullet} className="flex items-center gap-x-4">
                {index > 0 && <span aria-hidden className="text-border">•</span>}
                {bullet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
