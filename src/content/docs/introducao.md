---
title: Introdução
description: Contextualize Next.js para devs NorteJS que já vivem o ecossistema Node.js.
---

## O que é Next.js

Next.js é um framework opinativo sobre React que resolve renderização (SSR/SSG), roteamento, dados e empacotamento sem exigir configuração manual. Ele combina servidor e cliente em um único projeto, permitindo que você mantenha o foco em produto em vez de build tooling.

## Por que Next.js é relevante para devs Node.js

- aproveita seu conhecimento de APIs, middlewares e streams;
- roda em cima do runtime que você já domina (Node.js ou edge runtimes compatíveis);
- traz padrões prontos (App Router, layouts, data fetching) que evitam reescrever boilerplate.

## Quando usar Next.js

- landing pages e dashboards com atualização frequente;
- produtos que precisam indexação rápida (SSR/SSG);
- times pequenos que preferem deploy único (frontend + backend leve).

## Next.js vs React puro vs Node.js (Express/Nest)

| Critério | Next.js | React puro | Node.js (Express/Nest) |
| --- | --- | --- | --- |
| Roteamento | automático por arquivo | manual (React Router) | manual (REST/GraphQL) |
| Renderização | SSR/SSG/ISR nativos | SPA (CSR) | responde dados, não views |
| Deploy | um build único | precisa de bundler + server | precisa de frontend separado |
| Casos ideais | apps híbridos fullstack | SPAs simples | APIs dedicadas |

## O que NÃO será coberto neste workshop

- Configurações avançadas de compilações personalizadas;
- Features de edge runtime ou plataformas específicas;
- Integrações com CMS complexos;
- Otimizações profundas de performance.

## Exemplo rápido para abrir a conversa

```ts
type WorkshopQuestion = {
  profile: 'frontend' | 'backend';
  need: 'seo' | 'api' | 'dashboard';
};

export function nextjsIsFit(question: WorkshopQuestion) {
  if (question.need === 'seo') return 'Mostre SSR e metadata dinâmica.';
  if (question.profile === 'backend') return 'Enfatize API Routes e familiaridade com Node.js.';
  return 'Comece pelo App Router e navegação sem config extra.';
}
```

Use esse snippet para discutir como Next.js resolve dores específicas de quem já trabalha com Node.js todos os dias.
