import { quickBullets } from "@/data/content";

export function QuickBullets() {
  return (
    <section className="px-4 pb-12 sm:pb-20">
      <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickBullets.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lab-green/15 text-base font-bold text-lab-green">
              ✓
            </span>
            <span className="text-sm leading-snug font-bold text-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
