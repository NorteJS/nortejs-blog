---
title: Preparação do Ambiente
description: Checklist rápido para palestras e workshops da NorteJS com Next.js.
---

## Node.js (LTS)

- Recomendado: versão LTS corrente (20.x).
- Garanta que todes tenham `node -v` alinhado antes da oficina.
- Sugestão para o slide inicial: link para <https://nodejs.org/pt/download/>.

## npm / pnpm

Escolha um gerenciador único para evitar conflitos:

- `npm` já vem com Node e funciona bem em grupos pequenos.
- `pnpm` economiza tempo em labs com internet limitada.

## create-next-app

Execute o scaffold direto no terminal e peça para a turma acompanhar:

```bash
pnpm create next-app nortejs-next --typescript --eslint --app --no-tailwind --src-dir --use-pnpm
```

> Dica: mostre que o comando já pergunta sobre experimental features. Para o workshop, mantenha o básico.

## Boas práticas iniciais

1. Configure variáveis de ambiente com `.env.local` (mesmo que vazias) para mostrar o fluxo.
2. Rode `pnpm dev` imediatamente para validar a instalação.
3. Adicione um script `"lint": "next lint"` para reforçar qualidade de código.

## Exemplo prático de checklist em código

```ts
type Tool = 'node' | 'pnpm' | 'create-next-app';

type LabStatus = Record<Tool, { installed: boolean; version: string }>;

export const defaultStatus: LabStatus = {
  node: { installed: true, version: '20.11.0' },
  pnpm: { installed: true, version: '9.12.0' },
  'create-next-app': { installed: false, version: 'npx' },
};
```

Use algo parecido para mostrar como registrar o status da galera durante o aquecimento.
