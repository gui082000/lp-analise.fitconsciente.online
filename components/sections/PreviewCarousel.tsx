"use client";

import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { previewCarousel } from "@/data/content";

export function PreviewCarousel() {
  const [index, setIndex] = useState(0);
  const items = previewCarousel.items;
  const current = items[index];

  function goTo(nextIndex: number) {
    setIndex((nextIndex + items.length) % items.length);
  }

  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
          {previewCarousel.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 max-w-2xl text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {previewCarousel.heading}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {previewCarousel.subheading}
        </p>

        <div className="relative mx-auto mt-10 max-w-3xl">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Página anterior"
            className="absolute top-1/2 -left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-xl text-primary shadow-card transition-transform hover:scale-105 sm:-left-5"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próxima página"
            className="absolute top-1/2 -right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-xl text-primary shadow-card transition-transform hover:scale-105 sm:-right-5"
          >
            ›
          </button>

          <div className="overflow-hidden rounded-[1.75rem] border-[10px] border-foreground bg-foreground shadow-lift">
            <ResponsiveImage
              key={current.image}
              mobileSrc={current.mobileImage}
              mobileWidth={previewCarousel.mobileWidth}
              mobileHeight={previewCarousel.mobileHeight}
              desktopSrc={current.image}
              desktopWidth={previewCarousel.desktopWidth}
              desktopHeight={previewCarousel.desktopHeight}
              alt={`Prévia do mapa visual: ${current.title}`}
              sizes="(min-width: 640px) 700px, 90vw"
              className="h-auto w-full"
            />
          </div>

          <p className="mt-4 text-sm font-bold text-primary sm:text-base">{current.title}</p>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {items.map((item, i) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Ir para a prévia ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-[width,background-color] duration-150 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-base text-muted-foreground">
          {previewCarousel.closingText}
        </p>
        <div className="mt-5 flex justify-center">
          <CTAButton href="#planos" trackingLabel="preview_cta">
            {previewCarousel.ctaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
