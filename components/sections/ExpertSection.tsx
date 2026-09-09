import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { expertSection } from "@/data/content";

export function ExpertSection() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          {expertSection.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {expertSection.headingLine1}
          <br />
          <span className="text-primary">{expertSection.headingLine2}</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {expertSection.subheading}
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-card p-6 text-left sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            <ResponsiveImage
              mobileSrc={expertSection.photo.mobile.src}
              mobileWidth={expertSection.photo.mobile.width}
              mobileHeight={expertSection.photo.mobile.height}
              desktopSrc={expertSection.photo.desktop.src}
              desktopWidth={expertSection.photo.desktop.width}
              desktopHeight={expertSection.photo.desktop.height}
              alt={expertSection.name}
              sizes="240px"
              className="mx-auto h-56 w-44 shrink-0 rounded-2xl object-cover sm:mx-0"
            />

            <div>
              <h3 className="text-xl font-extrabold text-foreground">{expertSection.name}</h3>
              <p className="mt-1 text-sm font-bold text-primary">{expertSection.role}</p>

              <div className="mt-4 space-y-3">
                {expertSection.bio.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
          {expertSection.credentials.map((credential) => (
            <div
              key={credential.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-lg">
                {credential.icon}
              </span>
              <div>
                <p className="text-xs font-bold tracking-wide text-primary uppercase">{credential.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{credential.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-secondary/40 p-6 text-left sm:p-8">
          <span aria-hidden className="text-3xl font-black text-primary/60">
            &ldquo;
          </span>
          <p className="text-lg leading-relaxed font-bold text-foreground">{expertSection.quote}</p>
          <p className="mt-4 text-sm font-bold text-primary">{expertSection.quoteName}</p>
          <p className="text-sm text-muted-foreground">{expertSection.quoteRole}</p>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {expertSection.disclaimer}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {expertSection.trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-sm font-semibold text-foreground"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lab-green/15 text-[10px] font-bold text-lab-green">
                ✓
              </span>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
