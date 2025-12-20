// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nortejs.github.io/nortejs-blog/',
	base: '/nortejs-blog/',
	integrations: [
		starlight({
			title: 'Next.js pontapé inicial (Kickoff)',
			description:
				'Guia prático e colaborativo para introduzir Next.js a devs que já dominam Node.js ou que querem desbravar o mundo TS e JS, cobrindo App Router, rotas, componentes server/client, API Routes e Design System de UI em workshops da comunidade.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'NorteJS',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NorteJS' },
			],
			sidebar: [
				{
					label: 'Módulo Next.js',
					items: [
						{ label: 'Boas-vindas', slug: 'boas-vindas' },
						{ label: 'Quem somos nós?', slug: 'quem-somos-nos' },
						{ label: 'O que vamos aprender?', slug: 'o-que-vamos-aprender' },
						{ label: 'Pré-requisitos', slug: 'pre-requisitos' },
						{ label: 'Introdução', slug: 'introducao' },
						{ label: 'Por que usar next.js', slug: 'por-que-usar-nextjs' },
						{ label: 'Preparação do Ambiente', slug: 'preparacao-do-ambiente' },
						{ label: 'Criando o Projeto', slug: 'criando-o-projeto-nextjs' },
						{ label: 'Rotas e Layouts', slug: 'rotas-e-layouts' },
						{ label: 'Server vs Client Components', slug: 'server-components-vs-client-components' },
						{ label: 'Backend no Next.js', slug: 'backend-no-nextjs' },
						{ label: 'Conclusão', slug: 'conclusao' },
					],
				},
				{
					label: 'Módulo REST & HTTP',
					items: [
						{ label: 'HTTP e REST', slug: 'rest' },
					],
				},
			],
		}),
	],
});
