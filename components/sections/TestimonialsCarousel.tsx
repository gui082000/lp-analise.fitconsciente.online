"use client";

import { useState } from "react";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { testimonials, testimonialsSection } from "@/data/content";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function goTo(nextIndex: number) {
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  }

  return (
    <section className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl">
          {testimonialsSection.heading}
        </h2>

        <div className="relative mx-auto mt-10 max-w-[300px] sm:max-w-[340px]">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="absolute top-1/2 -left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-xl text-primary shadow-card transition-transform hover:scale-105 sm:-left-14"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="absolute top-1/2 -right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-xl text-primary shadow-card transition-transform hover:scale-105 sm:-right-14"
          >
            ›
          </button>

          <div className="overflow-hidden rounded-[1.75rem] border-[10px] border-foreground bg-foreground shadow-lift">
            <ResponsiveImage
              key={current.id}
              mobileSrc={current.mobile.src}
              mobileWidth={current.mobile.width}
              mobileHeight={current.mobile.height}
              desktopSrc={current.desktop.src}
              desktopWidth={current.desktop.width}
              desktopHeight={current.desktop.height}
              alt="Depoimento em print de conversa de um estudante sobre o Atlas Visual de Análises Clínicas"
              sizes="340px"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Ir para o depoimento ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-[width,background-color] duration-150 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
