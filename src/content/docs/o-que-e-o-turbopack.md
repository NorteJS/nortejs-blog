---
title: O que é o Turbopack
description: Atalho para o conteúdo do módulo de Setup (material base).
---

O Turbopack é um bundler e dev server que é otimizado para rodar o Next.js.

Quando você roda `npx next dev` (ou `npm run dev` que roda o `next dev`) por trás dos panos, ele compila as rotas e arquivos e sobe um servidor que se recarrega toda vez que um arquivo é alterado.

Como ele é escrito em Rust e tem uma integração profunda com o Next.js, o desenvolvimento tende a ser mais rápido do que com o servidor anterior (que usava webpack por trás dos panos).

Pra rodar o seu _dev server_ com Turbopack, basta rodar `npm run dev` ou, se estiver em versões antigas do Next.js, passando a flag `--turbopack`.
