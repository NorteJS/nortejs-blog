# Next.js pontapé inicial (Kickoff)

> Guia prático e colaborativo para introduzir Next.js a devs que já dominam Node.js ou querem desbravar o mundo TS/JS, cobrindo App Router, rotas, componentes server/client, API Routes e Design System de UI em workshops da comunidade NorteJS.

## Objetivo

Criar um guia acessível, direto e colaborativo para devs da NorteJS que já usam JavaScript/Node.js, mas ainda não dominam Next.js. O conteúdo está organizado por seções pensadas para talks curtas ou workshops práticos.

## Público-alvo

- Pessoas da comunidade NorteJS com experiência prévia em Node.js.
- Facilitadores que precisam de um roteiro pronto para apresentar Next.js.
- Contribuidores que desejam evoluir o repositório público da comunidade.

## Como rodar localmente

```bash
pnpm install
pnpm dev # abre em http://localhost:4321
```

Comandos extras:

- `pnpm build` – gera a versão estática.
- `pnpm preview` – valida o build antes do deploy.

## Como usar em workshops da NorteJS

1. Clone este repo e execute `pnpm dev` para apresentar navegando pelas seções.
2. Utilize a página inicial como roteiro da palestra, abrindo cada capítulo em sequência.
3. Para sessões práticas, combine a leitura com o projeto Next.js real criado com `create-next-app`.
4. Ao final, compartilhe o link do repositório e incentive PRs com exercícios extras.

## Estrutura de arquivos e pastas

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public/
│   └── logo.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── content/
│   │   └── docs/
│   │       ├── backend-no-nextjs.md
│   │       ├── conclusao.md
│   │       ├── criando-o-projeto-nextjs.md
│   │       ├── index.mdx
│   │       ├── introducao.md
│   │       ├── preparacao-do-ambiente.md
│   │       ├── rotas-e-layouts.md
│   │       └── server-components-vs-client-components.md
│   └── content.config.ts
└── tsconfig.json
```

Cada arquivo `.md`/`.mdx` corresponde a uma seção do workshop descrita no sumário lateral.

## Deploy no GitHub Pages

O projeto está configurado para publicar em `https://nortejs.github.io/nortejs-blog/`, usando GitHub Pages + GitHub Actions:

1. No repositório da comunidade, habilite **Settings → Pages → Source = GitHub Actions**.
2. Confirme que o workflow `.github/workflows/deploy.yml` está na branch `main`.
3. Todo push em `main` executa: instala pnpm, roda `pnpm install`, `pnpm run build` e publica o artefato no Pages.
4. O `astro.config.mjs` já define `site` e `base` adequados para `nortejs.github.io/nortejs-blog`. Se o projeto for renomeado ou forkado, atualize essas propriedades para refletir a nova URL.

## Como contribuir

1. Abra uma issue descrevendo o tópico ou melhoria desejada.
2. Crie uma branch (`feat/nome-topico`) e siga o tom acolhedor/comunitário do material.
3. Valide as páginas com `pnpm dev` antes de abrir o PR.
4. Descreva claramente como seu conteúdo pode ser usado em talk ou atividade prática.

Sugestões são super bem-vindas: exemplos adicionais, exercícios guiados, checklists de facilitação e relatos de uso no mundo real.
