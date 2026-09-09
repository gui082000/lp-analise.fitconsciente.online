"use client";

import { navigateAfterTracking, trackCtaClick } from "@/lib/tracking";
import { useTrackedCheckoutHref } from "@/lib/useTrackedCheckoutHref";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  fullWidth?: boolean;
  trackingLabel: string;
  value?: number;
  onClick?: () => void;
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-[1.05rem] text-[0.9375rem] font-extrabold tracking-[.01em] transition-[transform,filter] duration-[180ms] sm:px-10 sm:text-lg";

const VARIANT_CLASSES = {
  solid:
    "bg-gradient-cta text-primary-foreground shadow-cta hover:brightness-[1.06] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border-2 border-primary bg-card text-primary-deep hover:-translate-y-0.5 active:translate-y-0",
};

export function CTAButton({
  href,
  children,
  variant = "solid",
  fullWidth = false,
  trackingLabel,
  value = 0,
  onClick,
}: CTAButtonProps) {
  const resolvedHref = useTrackedCheckoutHref(href);

  function handleClick(event: React.MouseEvent) {
    if (!resolvedHref || !resolvedHref.startsWith("#")) {
      trackCtaClick(trackingLabel, value);
    }
    onClick?.();
    navigateAfterTracking(event, resolvedHref);
  }

  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${fullWidth ? "w-full" : ""}`;

  // Sem `href`: age só como gatilho (ex: abrir o popup de downsell), sem navegar.
  if (!href) {
    return (
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={resolvedHref} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
