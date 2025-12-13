---
title: Server Components vs Client Components
description: Explicação direta para apresentar durante o workshop NorteJS.
---

## Conceito

- **Server Components** renderizam no servidor, enviando HTML pronto.
- **Client Components** rodam no navegador, habilitando interatividade.

## Diferença prática

| Item         | Server                     | Client             |
| ------------ | -------------------------- | ------------------ |
| Execução     | Node.js / edge             | Browser            |
| Bundler      | não envia JS extra         | envia JS e hidrata |
| Uso de hooks | `use client` não permitido | Hooks liberados    |

## Quando usar cada um

- Server: leitura de dados, páginas estáticas, acesso direto ao banco.
- Client: formulários, componentes controlados, websockets.
- Misture: exporte dados no server e consuma em componentes client menores.

## Exemplos simples

```tsx
// app/eventos/page.tsx (Server Component)
import { getEvents } from "@/data/events";

export default async function Eventos() {
  const events = await getEvents();
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </ul>
  );
}
```

```tsx
"use client";
import { useState } from "react";

type RsvpButtonProps = { eventId: string };

export function RsvpButton({ eventId }: RsvpButtonProps) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Confirmar presença ({count}) para {eventId}
    </button>
  );
}
```

Explique que o segredo está no `"use client"` no topo. Sem isso, o arquivo vira Server Component automaticamente.
