---
title: Introdução
description: Contextualize Next.js para devs NorteJS que já vivem o ecossistema Node.js.
---

## O que é Next.js

O _Next.js_ é um frameworks opinativo para React focado em performance e facilidade para desenvolvimento.

Além de ser um **framework opinativo** que implementa as mais novas funcionalidades do React, o Next.js também traz uma coleção de componentes que permite, de forma fácil, que sua aplicação seja performática, acessível e use as melhores práticas.

## Quando a gente fala de Next.js a gente fala do que?

- Roteamento baseado em arquivos (File-based Routing);
- SSR - Renderização no Servidor (SSR é o principal mas podemos escolher outras formas como SSG, ISR, CSR);
- API Routes - Criar APIs dentro do próprio Next.js
- Backend + Frontend (para isso é necessário um servidor)
- Otimizações e performance - Imagens - Code Splitting (Divisão de Código) - SEO - Carregamento rápido e boas métricas de performance
  -E, a partir do Next.JS 13 - Server Components

## Funcionalidadades segundo a Vercel

<img src="/nextjs-features.png" alt="Funcionalidades do Next.js segundo a Vercel" width="800" height="300" />

<!-- ## Por que Next.js é relevante para devs Node.js

- aproveita seu conhecimento de APIs, middlewares e streams;
- roda em cima do runtime que você já domina (Node.js ou edge runtimes compatíveis);
- traz padrões prontos (App Router, layouts, data fetching) que evitam reescrever boilerplate.

## Quando usar Next.js

- landing pages e dashboards com atualização frequente;
- produtos que precisam indexação rápida (SSR/SSG);
- times pequenos que preferem deploy único (frontend + backend leve).

## Next.js vs React puro vs Node.js (Express/Nest)

| Critério     | Next.js                 | React puro                  | Node.js (Express/Nest)       |
| ------------ | ----------------------- | --------------------------- | ---------------------------- |
| Roteamento   | automático por arquivo  | manual (React Router)       | manual (REST/GraphQL)        |
| Renderização | SSR/SSG/ISR nativos     | SPA (CSR)                   | responde dados, não views    |
| Deploy       | um build único          | precisa de bundler + server | precisa de frontend separado |
| Casos ideais | apps híbridos fullstack | SPAs simples                | APIs dedicadas               |

## O que NÃO será coberto neste workshop

- Configurações avançadas de compilações personalizadas;
- Features de edge runtime ou plataformas específicas;
- Integrações com CMS complexos;
- Otimizações profundas de performance.

## Exemplo rápido para abrir a conversa

```ts
type WorkshopQuestion = {
  profile: "frontend" | "backend";
  need: "seo" | "api" | "dashboard";
};

export function nextjsIsFit(question: WorkshopQuestion) {
  if (question.need === "seo") return "Mostre SSR e metadata dinâmica.";
  if (question.profile === "backend")
    return "Enfatize API Routes e familiaridade com Node.js.";
  return "Comece pelo App Router e navegação sem config extra.";
}
```

Use esse snippet para discutir como Next.js resolve dores específicas de quem já trabalha com Node.js todos os dias. -->
