import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { whyVisualMaps } from "@/data/content";

export function WhyVisualMaps() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {whyVisualMaps.headingLine1}
          <br />
          {whyVisualMaps.headingLine2}
        </h2>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {whyVisualMaps.reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="text-base font-extrabold text-primary-deep">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 text-center sm:grid-cols-2">
          {whyVisualMaps.examples.map((example) => (
            <div key={example.desktop.src}>
              <div className="overflow-hidden rounded-[1.75rem] border-[10px] border-foreground bg-foreground shadow-lift">
                <ResponsiveImage
                  mobileSrc={example.mobile.src}
                  mobileWidth={example.mobile.width}
                  mobileHeight={example.mobile.height}
                  desktopSrc={example.desktop.src}
                  desktopWidth={example.desktop.width}
                  desktopHeight={example.desktop.height}
                  alt={`Mapa visual de exemplo: ${example.caption}`}
                  sizes="(min-width: 640px) 560px, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-4 text-sm font-bold text-primary sm:text-base">{example.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
