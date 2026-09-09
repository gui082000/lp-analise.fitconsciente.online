import { comparisonSection } from "@/data/content";

export function ComparisonSection() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {comparisonSection.heading}
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary/30 p-6">
            <h3 className="text-base font-extrabold text-foreground">
              {comparisonSection.traditional.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {comparisonSection.traditional.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-card p-6">
            <h3 className="text-base font-extrabold text-primary">{comparisonSection.atlas.title}</h3>
            <ul className="mt-4 space-y-3">
              {comparisonSection.atlas.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lab-green/15 text-xs font-bold text-lab-green">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
