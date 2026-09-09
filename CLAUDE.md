@AGENTS.md

# lp-analise.fitconsciente.online — Landing Page de Vendas (FitConsciente)

## O que é este projeto

Landing page de vendas clonada do projeto `landing-page-oferta`
(`WiliamDutra/analisesclinicasastras`, produto "Atlas Visual de Análises Clínicas") pra virar uma
nova oferta do FitConsciente. Conteúdo/copy ainda não trocado (ver
`docs/superpowers/specs/2026-09-08-lpanalise-clone-tracking-design.md` no repo do painel
`dados.fitconsciente.online` pro plano completo). Tracking server-side aponta pro mesmo painel
que a LP `www.fitconsciente.online` já usa (`dados.fitconsciente.online`), com Pixel/GA4/TikTok
próprios e isolados por domínio. Checkout: **Lowify** (sem adaptador de webhook ainda).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` em `app/globals.css`, sintaxe `oklch`)
- Fonte: **Plus Jakarta Sans** via `next/font/google`
- Deploy: **Vercel**
- Versionamento: **GitHub**
- Sem banco de dados por enquanto (entra **Supabase** se o projeto precisar guardar dados)

> Este projeto usa Next.js 16 — pode ter diferenças de API/convenções em relação a versões
> anteriores. Antes de usar uma API do Next.js, confira `node_modules/next/dist/docs/`.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento (localhost:3000)
npm run build    # build de produção
npm run start    # roda o build de produção localmente
npm run lint     # eslint
```

## Estrutura de pastas

```
app/            → rotas (App Router): page.tsx (home), layout.tsx, termos/, privacidade/
components/
  sections/     → uma seção da landing page por arquivo (Hero, PainSection, PricingSection...)
  ui/           → peças reutilizáveis (CTAButton, PricingCard, CountdownBanner, DownsellModal...)
lib/            → tracking.ts (Pixel/GA4 + UTMs), checkoutLinks.ts (monta URL de checkout)
data/           → content.ts (toda a copy da página, separada dos componentes)
```

## Sistema de Design

Extraído por engenharia reversa da página de referência (`atlasanalisesclinicas.shop`) e
documentado pelo usuário. Resumo — para o detalhamento completo (todos os tokens, componentes,
animações), ver o histórico da conversa com o usuário ou o plano original do projeto.

- **Cores**: tokens OKLCH em `@theme` (`app/globals.css`) — `primary` roxo vívido, `primary-deep`
  roxo escuro, `secondary`/`accent` lilás claro, `background`/`foreground` quase-branco/preto
  arroxeados, acentos `lab-blue`/`lab-teal`/`lab-green`. Barra de urgência usa cores hardcoded
  (`#116530` fundo, `#FF8A00` borda, `#FFE45C` destaque) — fora do sistema de tokens, de propósito.
- **Tipografia**: fonte única Plus Jakarta Sans. Títulos extrabold (800), tracking apertado.
  Peso 900 (`font-black`) só nos dígitos do countdown.
- **Layout**: sem container global — cada seção usa `max-w-[1200px] mx-auto px-4` (ou
  `max-w-4xl`/`max-w-2xl` pontualmente). Mobile-first: 1 coluna → `md:` 2 colunas → `lg:` 3.
- **Componentes**: botão CTA em pill com gradiente (`.btn-cta`), cards com `.reveal` (fade+slide-up
  no scroll via `animation-timeline: view()`), FAQ com `<details>/<summary>` nativo, countdown com
  dígitos em pílulas escuras.
- **Animações**: 100% CSS (sem Framer Motion/GSAP/AOS), respeita `prefers-reduced-motion`.

## Convenções

- Toda a copy (textos, preços, FAQ, depoimentos) fica em `data/content.ts` — não hardcodar texto
  direto nos componentes de seção.
- Componentes de seção (`components/sections/`) são "burros": recebem dados de `data/content.ts`
  e só cuidam de layout/estilo.
- CTAs sempre usam o componente `CTAButton` (`components/ui/`), com o texto específico do bloco.
- Links de checkout vêm de variáveis de ambiente (`NEXT_PUBLIC_CHECKOUT_URL_*`), nunca hardcoded.
- Imagens reais (mapas, prints de depoimentos) ainda não existem — usar placeholders visuais
  fáceis de substituir depois (manter a estrutura/proporção pronta para trocar por `next/image`).

## Segurança

- Segredos **apenas** em variáveis de ambiente (`.env.local`, nunca commitado — `.env*` está no
  `.gitignore`, com exceção do `.env.example`, que só documenta os nomes das variáveis).
- **Nenhuma variável sensível leva prefixo `NEXT_PUBLIC_`.** As variáveis públicas deste projeto
  (IDs de pixel, URLs de checkout) não são segredos — são feitas para rodar no navegador.
- Ao integrar qualquer API/lib nova, checar a documentação oficial atual antes de usar. Se a API
  tiver versão na URL, essa versão fica numa constante única, fácil de atualizar depois.

## Como trabalhamos

- Plano é aprovado antes de construir. Uma mudança por vez — não alterar o que não foi pedido.
- Design e seções da página são construídos **junto com o usuário**, seção por seção, mostrando
  o resultado (dev server) antes de avançar.
- Git desde o início; commit a cada mudança relevante aprovada (`feat`/`fix`/`refactor`/`chore`).
  **Nunca fazer push sem o usuário revisar antes.**
- Explicações sempre em português simples. Quando der erro, explicar antes de corrigir.
- Design caprichado e responsivo (mobile-first) — tem que ficar bom no celular desde o início.
