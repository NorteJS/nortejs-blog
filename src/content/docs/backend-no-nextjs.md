---
title: Backend no Next.js
description: Mostre como construir APIs leves dentro do próprio projeto e quando é hora de separar serviços.
---

## API Routes

- Vivem em `app/api/*/route.ts` (App Router) ou `pages/api` (legacy).
- São executadas em ambiente Node.js e podem usar qualquer pacote compatível.

## Exemplo simples de endpoint

```ts
// app/api/eventos/route.ts
import { NextResponse } from 'next/server';

const eventos = [
  { id: 'meetup', title: 'Meetup NorteJS', city: 'Belém' },
  { id: 'workshop', title: 'Workshop Next.js', city: 'Manaus' },
];

export async function GET() {
  return NextResponse.json(eventos);
}
```

## Comunicação frontend ↔ backend

- Use `fetch('/api/eventos')` diretamente em Server Components para evitar CORS.
- Para Client Components, utilize SWR/React Query ou `useEffect` básico.

```ts
export async function getEventos() {
  const response = await fetch('http://localhost:3000/api/eventos', { cache: 'no-store' });
  return (await response.json()) as { id: string; title: string }[];
}
```

## Quando o backend do Next.js é suficiente

- Protótipos, demos, PoCs em workshop.
- Dashboards internos ou integrações simples com bancos serverless.

## Quando separar backend (ex: NestJS)

- Necessidade de filas, cron jobs ou websockets dedicados.
- Times distintos cuidando de frontend e backend.
- Regras de negócio complexas que merecem arquitetura específica.

Encoraje a comunidade a começar com API Routes e migrar somente quando surgirem demandas reais.
