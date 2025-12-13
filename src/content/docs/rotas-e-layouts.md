---
title: Rotas e Layouts
description: Demonstre como o App Router organiza páginas, dinâmica de pastas e navegação compartilhada.
---

## Rotas estáticas

- Qualquer pasta com `page.tsx` vira uma rota (`/sobre`, `/contato`).
- Ideal para conteúdo fixo, landing pages e páginas de apoio para o workshop.

## Rotas dinâmicas

Use colchetes para criar parâmetros (`app/eventos/[slug]/page.tsx`).

```tsx
// app/eventos/[slug]/page.tsx
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

const eventos = {
  meetup: 'Meetup mensal em Belém',
  workshop: 'Workshop Next.js Hands-on',
};

export default function Evento({ params }: Props) {
  const descricao = eventos[params.slug as keyof typeof eventos];
  if (!descricao) return notFound();
  return (
    <article>
      <h1>Evento: {params.slug}</h1>
      <p>{descricao}</p>
    </article>
  );
}
```

## Layouts compartilhados

- `layout.tsx` na pasta define a moldura para todas as rotas filhas.
- Use para menus, breadcrumbs e providers globais.

```tsx
// app/eventos/layout.tsx
export default function EventosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header>Agenda NorteJS</header>
      <section>{children}</section>
    </main>
  );
}
```

## Navegação entre páginas

- Prefira `Link` de `next/link` para benefício de prefetch.
- Em demos, mostre a diferença entre usar `<a>` e `<Link>` (tempo de carregamento e preservação de estado).

```tsx
import Link from 'next/link';

export function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/eventos/meetup">Meetup</Link>
      <Link href="/eventos/workshop">Workshop</Link>
    </nav>
  );
}
```

Encerre reforçando que roteamento é por convenção — perfeito para workshops rápidos.
