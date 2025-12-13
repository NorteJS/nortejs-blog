---
title: HTTP e REST
description: Conceitos práticos de HTTP e padrão REST para usar em APIs e API Routes.
---

## O básico de HTTP para devs Node

- **Métodos comuns**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- **Status importantes**: `200` OK, `201` Created, `204` No Content, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.
- **Idempotência**: `GET`, `PUT`, `DELETE` devem ser idempotentes; `POST` não.

Explique isso rápido no workshop com exemplos curtos e bons nomes de endpoints.

## Padrão REST (prático)

- Recursos são substantivos: `/api/eventos`, `/api/usuarios/123`.
- Use métodos HTTP para ações e status para sinais claros.
- Evite verbos na URL (não `/api/createEvent`).

## Exemplo de API Route (Next.js - App Router)

```ts
// src/app/api/eventos/route.ts
import { NextResponse } from "next/server";

const db = [{ id: "meetup", title: "Meetup NorteJS" }];

export function GET() {
  return NextResponse.json(db);
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body?.title) return new NextResponse("Missing title", { status: 400 });
  const novo = { id: String(Date.now()), title: body.title };
  db.push(novo);
  return NextResponse.json(novo, { status: 201 });
}
```

Use esse exemplo para mostrar criação e leitura simples durante o hands-on.

## Consumindo a API do frontend

Em Server Components você pode usar `fetch('/api/eventos')` (sem CORS). Em Client Components, mostre `fetch` com `useEffect` ou uma lib como SWR.

```ts
// exemplo rápido em Client Component
"use client";
import { useEffect, useState } from "react";

export default function EventosList() {
  const [items, setItems] = useState<Array<{ id: string; title: string }>>([]);
  useEffect(() => {
    fetch("/api/eventos")
      .then((r) => r.json())
      .then(setItems);
  }, []);
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}
```

## Boas práticas rápidas

- Valide payloads e retorne códigos HTTP apropriados.
- Use headers `Content-Type: application/json` e trate erros no cliente.
- Documente seus endpoints (README, Swagger, OpenAPI simples).

Pronto para usar em 5–10 minutos como um módulo no workshop.
