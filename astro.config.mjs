// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NorteJS Next.js Kickoff',
			description: 'Guia introdutório de Next.js pensado para palestras e workshops da comunidade NorteJS.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'NorteJS',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NorteJS' },
			],
			sidebar: [
				{
					label: 'Workshop Next.js',
					items: [
						{ label: 'Introdução', slug: 'introducao' },
						{ label: 'Preparação do Ambiente', slug: 'preparacao-do-ambiente' },
						{ label: 'Criando o Projeto', slug: 'criando-o-projeto-nextjs' },
						{ label: 'Rotas e Layouts', slug: 'rotas-e-layouts' },
						{ label: 'Server vs Client Components', slug: 'server-components-vs-client-components' },
						{ label: 'Backend no Next.js', slug: 'backend-no-nextjs' },
						{ label: 'Conclusão', slug: 'conclusao' },
					],
				},
			],
		}),
	],
});
