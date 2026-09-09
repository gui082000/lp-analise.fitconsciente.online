"use client";

import { useSyncExternalStore } from "react";

const UTM_KEYS_TO_PRESERVE = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

function noopSubscribe() {
  return () => {};
}

function buildTrackedHref(href: string | undefined): string | undefined {
  if (!href) return href;

  const trckUserId = window.trckUserId;
  if (!trckUserId) return href;

  try {
    const url = new URL(href);
    const pageParams = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS_TO_PRESERVE) {
      const value = pageParams.get(key);
      if (value) url.searchParams.set(key, value);
    }
    url.searchParams.set("utm_term", trckUserId);
    return url.toString();
  } catch {
    // href inválido (ex.: fallback "#" quando o checkout não tem env var configurada).
    return href;
  }
}

/**
 * Reconstrói `href` acrescentando `utm_term=<trckUserId>` (usado pelo webhook
 * de compra — Lowify nesta LP, ver CLAUDE.md — pra casar a compra com o
 * visitante certo, mesmo padrão que a Wiapy já usa noutra LP) e preservando
 * os UTMs
 * originais da própria página. window.trckUserId é setado pelo tracker.js
 * (ver app/layout.tsx) antes da hidratação — useSyncExternalStore garante que
 * o valor "cru" seja usado no snapshot do servidor (evita mismatch de
 * hidratação) e o valor com utm_term entre assim que o cliente assume.
 */
export function useTrackedCheckoutHref(href: string | undefined): string | undefined {
  return useSyncExternalStore(
    noopSubscribe,
    () => buildTrackedHref(href),
    () => href,
  );
}
