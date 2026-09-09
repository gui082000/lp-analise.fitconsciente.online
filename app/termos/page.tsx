import type { Metadata } from "next";
import { product } from "@/data/content";

export const metadata: Metadata = {
  title: `Termos de Uso — ${product.name}`,
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:py-20">
      <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">Termos de Uso</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Este é um texto de exemplo (placeholder). Antes de publicar a página, substitua este
          conteúdo por Termos de Uso revisados por um profissional jurídico, cobrindo pelo menos:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Natureza digital do produto e forma de entrega do acesso</li>
          <li>Condições de pagamento único, sem assinatura</li>
          <li>Política de garantia e reembolso (prazo, condições, como solicitar)</li>
          <li>Uso permitido do material (uso pessoal, proibição de redistribuição)</li>
          <li>Limitação de responsabilidade e finalidade educacional do conteúdo</li>
          <li>Foro e legislação aplicável</li>
        </ul>
      </div>
    </main>
  );
}
