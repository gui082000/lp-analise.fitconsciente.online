import { disclaimer, modulesIndex } from "@/data/content";

export function ModulesIndex() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          {modulesIndex.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {modulesIndex.headingLine1}
          <br />
          {modulesIndex.headingLine2}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {modulesIndex.subheading}
        </p>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {modulesIndex.modules.map((module) => (
            <div
              key={module.number}
              className="rounded-2xl border border-border bg-secondary/30 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-extrabold text-primary-foreground">
                  {module.number.toString().padStart(2, "0")}
                </span>
                <h3 className="text-base font-extrabold text-foreground sm:text-lg">{module.name}</h3>
              </div>

              <ul className="mt-4 space-y-1.5">
                {module.subtopics.map((subtopic) => (
                  <li key={subtopic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-lab-teal" />
                    {subtopic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
