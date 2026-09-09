import { guarantee } from "@/data/content";

export function GuaranteeSection() {
  return (
    <section className="px-4 pb-12 sm:pb-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 text-center shadow-card sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-2xl font-extrabold text-primary-foreground">
          {guarantee.days}
        </span>

        <h2 className="mx-auto mt-5 text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-3xl">
          {guarantee.headingLine1}
          <br />
          {guarantee.headingLine2}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {guarantee.description}
        </p>

        <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
          {guarantee.badges.map((badge) => (
            <div key={badge} className="flex items-center gap-3 rounded-xl bg-secondary/30 p-4">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lab-green/15 text-xs font-bold text-lab-green">
                ✓
              </span>
              <span className="text-sm font-semibold text-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
