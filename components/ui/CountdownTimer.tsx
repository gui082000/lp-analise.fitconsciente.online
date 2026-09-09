"use client";

import { useEffect, useState } from "react";
import { pad } from "@/lib/countdown";

const INITIAL_SECONDS = 15 * 60;

/**
 * Contador regressivo fixo de 15 minutos. Reinicia sempre que a página é
 * carregada/atualizada (não é persistido entre sessões nem ligado ao relógio).
 */
export function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="mx-auto max-w-[720px] rounded-2xl border border-border bg-secondary/40 p-5 text-center sm:p-7">
      <p className="text-sm font-bold tracking-wide text-primary uppercase">
        ⏱ Preço promocional expira em
      </p>
      <div className="mt-3 flex items-center justify-center gap-2 font-black tabular-nums">
        <span className="rounded-xl bg-foreground px-4 py-2.5 text-3xl text-background sm:text-4xl">
          {pad(minutes)}
        </span>
        <span className="text-2xl text-foreground sm:text-3xl">:</span>
        <span className="rounded-xl bg-foreground px-4 py-2.5 text-3xl text-background sm:text-4xl">
          {pad(seconds)}
        </span>
      </div>
      <p className="mt-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
        minutos · segundos
      </p>
    </div>
  );
}
