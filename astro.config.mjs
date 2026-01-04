// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

// https://astro.build/config
export default defineConfig({
	site: 'https://nortejs.github.io/nortejs-blog/',
	base: '/nortejs-blog/',
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Next.js pontapé inicial (Kickoff)',
			description:
				'Guia prático e colaborativo para introduzir Next.js a devs que já dominam Node.js ou que querem desbravar o mundo TS e JS, cobrindo App Router, rotas, componentes server/client, API Routes e Design System de UI em workshops da comunidade.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'NorteJS',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/NorteJS/vagas-nortejs' },
				{ icon: 'linkedin', label: 'linkedin', href: 'https://www.linkedin.com/company/nortejs' },
				{ icon: 'instagram', label: 'instagram', href: 'https://www.instagram.com/nortejs_', },
			],
			sidebar: [
				{
					label: 'Intro ao Workshop',
					autogenerate: {
						directory: '00 - introducao',
					},
				},

				{
					label: 'Setup do Projeto',
					autogenerate: {
						directory: '01 - Setup do Projeto',
					},
				},
				{
					label: 'Básico de Roteamento',
					autogenerate: {
						directory: '02 - Roteamento Básico',
					},
				},

				{
					label: 'Estilização',
					autogenerate: {
						directory: '03 - Estilização',
					},
				},
				{
					label: 'Layouts e Páginas',
					autogenerate: {
						directory: '03a - Layouts e Páginas',
					},
				},
				{
					label: 'Componentes do Next',
					autogenerate: {
						directory: '04 - Componentes do Next',
					},
				},
				{
					label: 'A Teoria dos Server Components',
					autogenerate: {
						directory: '05 - teoria dos server components',
					},
				},
				{
					label: 'Fetch de Dados e Rotas Dinâmicas',
					autogenerate: {
						directory: '06 - Fetch de Dados e Rotas Dinâmicas',
					},
				},
				{
					label: 'Server Actions e Formulários',
					autogenerate: {
						directory: '07 - Server Actions e Formulários',
					},
				},
				{
					label: 'Responsividade da Aplicação',
					autogenerate: {
						directory: '08 - Responsividade da Aplicação',
					},
				},
				{
					label: 'Finalização',
					autogenerate: {
						directory: '09 - Finalização',
					},
				},
			],
		}),
		mdx(),

	],
});
