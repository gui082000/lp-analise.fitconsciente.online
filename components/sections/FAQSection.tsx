import { faq, faqSection } from "@/data/content";

export function FAQSection() {
  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {faqSection.heading}
        </h2>

        <div className="mt-10 space-y-3 text-left">
          {faq.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group rounded-2xl border border-border bg-background px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground">
                <span className="min-w-0">{item.question}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-xl font-extrabold text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
