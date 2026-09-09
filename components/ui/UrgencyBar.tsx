"use client";

import { useSyncExternalStore } from "react";
import { getTodayFormatted, subscribeOnce } from "@/lib/countdown";

function getServerSnapshot() {
  return null;
}

/**
 * Barra de urgência do topo. A data é calculada no navegador do visitante
 * (não é fixa) para que "somente hoje" continue verdadeiro em qualquer dia
 * que a página for visitada. Estática — não é sticky, rola com a página.
 */
export function UrgencyBar() {
  const today = useSyncExternalStore(subscribeOnce, getTodayFormatted, getServerSnapshot);

  return (
    <div
      className="border-b-4 py-3"
      style={{ backgroundColor: "var(--urgency-bg)", borderColor: "var(--urgency-border)" }}
    >
      <p className="mx-auto max-w-[1200px] px-4 text-center text-[12.5px] font-semibold text-white sm:text-[15px]">
        🎯 Oferta especial somente hoje{today ? `, ${today}` : ""} — preço promocional{" "}
        <span style={{ color: "var(--urgency-highlight)" }}>expira à meia-noite</span>
      </p>
    </div>
  );
}
