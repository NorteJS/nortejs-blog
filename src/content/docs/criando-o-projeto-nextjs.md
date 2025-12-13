---
title: Criando o Projeto Next.js
description: Passo a passo para gerar o app base e apresentar a estrutura para a comunidade NorteJS.
---

## Criação do projeto

1. Rode `pnpm create next-app nortejs-next` com as flags mostradas na preparação.
2. Entre na pasta e confirme o `package.json` com scripts `dev`, `build`, `start`, `lint`.
3. Faça o primeiro commit com o scaffold limpo.

## Estrutura inicial de pastas

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  lib/
  components/
public/
```

Mostre onde ficam Server Components por padrão (`app/...`) e como separar utilitários em `lib/`.

## App Router

- Cada pasta em `app/` é uma rota.
- `page.tsx` renderiza o conteúdo.
- `layout.tsx` envolve subrotas e pode exportar metadata.

## Convenções importantes

- Use `export const metadata` para configurar SEO por arquivo.
- Importações absolutas com `@/` ajudam na demo (`tsconfig.json` > `paths`).
- Componentes em `app` são Server Components a menos que use `"use client"`.

## Exemplo rápido de página inicial

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-semibold">Next.js pontapé inicial (Kickoff)</h1>
      <p>App criado ao vivo com create-next-app + App Router.</p>
    </section>
  );
}
```

Mantenha o exemplo simples para provar que tudo está funcionando antes de seguir.
