---
title: Conclusão
description: Recapitule o workshop e direcione quem participou para os próximos passos dentro da NorteJS.
---

## Recap do aprendizado

- Montamos o ambiente com Node.js LTS, pnpm e create-next-app.
- Entendemos App Router, rotas estáticas/dinâmicas e layouts.
- Diferenciamos Server e Client Components com exemplos.
- Construímos uma API Route simples e discutimos limites.

## O que você já consegue fazer

- Prototipar apps completos usando Next.js.
- Explicar para outras pessoas da comunidade quando usar cada abordagem.
- Rodar uma oficina curta apresentando todo o conteúdo deste guia.

## Próximos passos

1. Conectar dados reais (PlanetScale, Supabase, Neon, MongoDB Atlas).
2. Adicionar autenticação com NextAuth.js ou Auth.js.
3. Desdobrar o workshop em séries (SSR avançado, Edge, caching).

## Sugestões de estudo e evolução

- [Documentação oficial do Next.js](https://nextjs.org/docs)
- [Playbook NorteJS no GitHub](https://github.com/NorteJS)
- Lives e meetups locais (submeta uma talk com este material!)

## Snippet para encerrar a apresentação

```ts
const workshopJourney = ['setup', 'router', 'dados', 'deploy'] as const;

type Stage = (typeof workshopJourney)[number];

export function nextStep(stage: Stage): string {
  const order: Record<Stage, string> = {
    setup: 'Compartilhe o checklist de ambiente.',
    router: 'Demonstre rotas e layouts ao vivo.',
    dados: 'Mostre Server/Client Components falando entre si.',
    deploy: 'Publique no Vercel/Netlify e compartilhe no Discord NorteJS.',
  };
  return order[stage];
}
```

Finalize convidando quem participou a abrir PRs com melhorias e novos exercícios.
