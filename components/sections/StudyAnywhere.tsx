import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { studyAnywhere } from "@/data/content";

export function StudyAnywhere() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {studyAnywhere.heading}
        </h2>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          <ResponsiveImage
            mobileSrc={studyAnywhere.image.mobile.src}
            mobileWidth={studyAnywhere.image.mobile.width}
            mobileHeight={studyAnywhere.image.mobile.height}
            desktopSrc={studyAnywhere.image.desktop.src}
            desktopWidth={studyAnywhere.image.desktop.width}
            desktopHeight={studyAnywhere.image.desktop.height}
            alt="O Atlas Visual de Análises Clínicas aberto no notebook, celular e tablet"
            sizes="(min-width: 640px) 720px, 90vw"
            className="h-auto w-full"
          />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {studyAnywhere.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {studyAnywhere.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground shadow-card"
            >
              {bullet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
