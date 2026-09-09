import { painSection } from "@/data/content";

export function PainSection() {
  return (
    <section className="px-4 pt-4 pb-6 sm:pt-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {painSection.headingLine1}
          <br />
          {painSection.headingLine2}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {painSection.question}
        </p>

        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {painSection.pains.map((pain) => (
            <li
              key={pain.title}
              className="reveal rounded-2xl border border-border bg-background p-5 transition-transform hover:scale-[1.015]"
            >
              <h3 className="text-base font-extrabold text-primary-deep sm:text-lg">{pain.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{pain.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
