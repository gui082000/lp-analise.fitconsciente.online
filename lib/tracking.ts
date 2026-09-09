import type { MouseEvent } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    ttq?: { track: (...args: unknown[]) => void };
    trckUserId?: string;
  }
}

/** Painel de tracking server-side (identifica visitante, expõe GA4 config). */
export const TRACKING_PANEL_ORIGIN = "https://dados.fitconsciente.online";

/**
 * Dispara os eventos de início de checkout no Meta Pixel e no GA4, se os
 * scripts estiverem carregados (ambos são condicionais à existência dos IDs
 * em variável de ambiente — ver app/layout.tsx).
 */
export function trackCtaClick(label: string, value: number) {
  if (typeof window === "undefined") return;

  const eventId = crypto.randomUUID();
  const currency = "BRL";

  window.fbq?.("track", "InitiateCheckout", { content_name: label, value, currency }, { eventID: eventId });
  // Chave da TikTok é "event_id" (snake_case), diferente do "eventID" do Meta
  // — confirmado na doc oficial (Events API 2.0 > Event Deduplication).
  window.ttq?.track("InitiateCheckout", { content_name: label, value, currency }, { event_id: eventId });
  window.gtag?.("event", "begin_checkout", { content_name: label, value, currency });

  fetch(`${TRACKING_PANEL_ORIGIN}/api/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      trck_user_id: window.trckUserId,
      event_name: "InitiateCheckout",
      event_id: eventId,
      content_name: label,
      value,
      currency,
      event_source_url: window.location.href,
      skip_ga4: true,
    }),
  }).catch(() => {});
}

/**
 * Previne a navegação padrão de um <a> e a refaz via window.location.href
 * depois de um delay curto. Sem isso, o clique já começa a sair da página
 * antes do fbq/gtag terminarem de mandar o evento — o navegador cancela a
 * requisição no meio do caminho. Só vale a pena pra navegação de verdade
 * (checkout externo); âncoras tipo "#planos" não saem da página, então não
 * têm essa corrida.
 */
export function navigateAfterTracking(event: MouseEvent, href: string | undefined) {
  if (!href || href.startsWith("#")) return;
  event.preventDefault();
  window.setTimeout(() => {
    window.location.href = href;
  }, 150);
}
