import type { Metadata } from "next";
import { product } from "@/data/content";

export const metadata: Metadata = {
  title: `Política de Privacidade — ${product.name}`,
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:py-20">
      <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">Política de Privacidade</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Este é um texto de exemplo (placeholder). Antes de publicar a página, substitua este
          conteúdo por uma Política de Privacidade revisada por um profissional jurídico (LGPD),
          cobrindo pelo menos:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Quais dados pessoais são coletados (ex: nome, e-mail, dados de pagamento)</li>
          <li>Finalidade do tratamento dos dados (processar a compra, liberar acesso, suporte)</li>
          <li>Com quem os dados são compartilhados (plataforma de checkout, ferramentas de e-mail)</li>
          <li>Uso de cookies e ferramentas de rastreamento (Meta Pixel, Google Ads/GA4)</li>
          <li>Direitos do titular dos dados (acesso, correção, exclusão) e como exercê-los</li>
          <li>Tempo de retenção dos dados e medidas de segurança</li>
        </ul>
      </div>
    </main>
  );
}
