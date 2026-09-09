/** Nunca notifica — usado com useSyncExternalStore para um valor lido 1x no cliente. */
export function subscribeOnce() {
  return () => {};
}

/** Data de hoje formatada por extenso em pt-BR (ex: "26 de agosto"). */
export function getTodayFormatted(): string {
  return new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
}

export function pad(value: number): string {
  return value.toString().padStart(2, "0");
}
