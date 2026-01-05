---
title: Criando um Layout
---

Criar layouts no Next.js é fácil. Os layouts são orientados para a composição. Ou seja, você pode ter vários layouts aninhados de seções diferentes de sua aplicação.

- Para criar um layout, devemos utilizar o nome `layout.tsx` para nosso arquivo.
- Se o arquivo estiver na raiz da pasta `app`, ele será um layout global. Se estiver dentro de alguma subpasta, será um layout localizado.

## Criando um Layout para nossa Aplicação

No caso específico da VagasNorteJs, em todas as páginas exibimos o menu superior (navbar) e o rodapé (footer). Então um bom candidato para layout seria um componente que renderize a _navbar_ e o _footer_, de forma que o conteúdo fique no "meio".

Vamos criar então, antes de mais nada três componentes:

1. O componente `<Navbar>`
2. O componente `<Footer>`
3. Um componente `<Logo>`

## O Componente `<Logo>`

Com o Figma aberto, podemos extrair facilmente o logo para svg. Entretanto, especialmente neste caso (e em muitos outros) uma abordagem interessante é criarmos um componente React para nosso logo. Isso faz com que nosso _svg_ fique ainda mais poderoso e interativo.

No caso da nossa aplicação, se prestarmos atenção ao design proposto, o logotipo pode tanto estar colocado em um background claro ou escuro. Dependendo da situação, a cor do logo irá mudar.

### Extraindo o logo para um componente React

1. Vamos exportar o svg do logo do Figma
2. Vamos _passar_ o svg pelo [svgomg](https://svgomg.net/) (que é uma aplicação útil para fazer uma "limpeza", garantir boas práticas e compressão no nosso _svg_)
3. Por fim vamos usar a ferramenta [svgr](https://react-svgr.com/playground/?typescript=true) para transformar nosso SVG em um componente React.

Feito isso, o céu é o limite. Temos um componente logo que agora irá aceitar uma prop `bg` que poderá ser `light` ou `dark`.

- Se a prop for `light`, o texto do logo renderizará com a cor `#333`
- Se a prop for `dark`, o texto do logo renderizará com a cor `#fff`

### Código final do componente `<Logo>`

```typescript title="components/layout/logo.tsx"
import { SVGProps } from "react"
type LogoProps = {
  bg: "dark" | "light"
} & SVGProps<SVGSVGElement>;
const LogoSvgComponent = ({ bg = "light", ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={41}
    viewBox="0 0 192 41"
    fill="none"
    {...props}
  >
    <path fill={bg === "dark" ? "#000" : "#fff"} d="M0 0h192v41H0z" />
    <path
      fill={bg === "dark" ? "#fff" : "#000"}
      d="M13.304 33 3 10.12h5.568L17.048 29h.416l8.48-18.88h5.568L21.208 33zm22.246 0q-2.592 0-3.968-1.312t-1.376-3.744q0-2.4 1.376-3.712t3.968-1.312h12.288v-.768q0-1.952-1.92-1.952H32.35v-3.68h14.784q2.913 0 4.128 1.344 1.215 1.312 1.216 3.712V33zm.832-3.68h11.456V26.6H36.382q-.608 0-.96.384-.32.352-.32.96t.32.992q.352.384.96.384M59.914 40.2v-3.68h9.664q1.92 0 1.92-1.952V33h-7.04q-4.288 0-6.688-2.112t-2.4-6.112q0-4.032 2.4-6.144t6.688-2.112h11.68v18.624q0 2.272-1.312 3.648Q73.514 40.2 70.73 40.2zm4.544-10.88h7.04V20.2h-7.04q-2.08 0-3.2 1.152-1.088 1.12-1.088 3.424 0 2.272 1.088 3.424 1.12 1.12 3.2 1.12M84.05 33q-2.591 0-3.968-1.312t-1.376-3.744q0-2.4 1.376-3.712 1.377-1.312 3.968-1.312h12.288v-.768q0-1.952-1.92-1.952H80.85v-3.68h14.784q2.913 0 4.128 1.344 1.216 1.312 1.216 3.712V33zm.832-3.68h11.456V26.6H84.882q-.608 0-.96.384-.32.352-.32.96t.32.992q.353.384.96.384m19.084 3.84v-3.68h15.68q1.344 0 1.344-1.504 0-1.472-1.344-1.472h-10.144q-2.849 0-4.32-1.28-1.472-1.313-1.472-3.744 0-2.464 1.472-3.776 1.504-1.344 4.32-1.344h14.592v3.68h-14.368q-1.376 0-1.376 1.344 0 .672.384 1.056t.992.384h10.752q2.496 0 3.808 1.312 1.344 1.28 1.344 3.744 0 2.496-1.344 3.904-1.344 1.376-3.808 1.376z"
    />
    <path fill={bg === "dark" ? "#000" : "#fff"} d="M129 1.736h61v32h-61z" />
    <path
      fill={bg === "dark" ? "#fff" : "#000"}
      d="M134.02 7.122h-1.14l-1.44-2.52v2.52h-1.08v-4.2h1.14l1.44 2.52v-2.52h1.08zm3.423-3.06q0-.36-.36-.36h-1.02q-.36 0-.36.36v1.92q0 .36.36.36h1.02q.36 0 .36-.36zm1.08 1.92q0 .63-.288.918-.282.282-.912.282h-1.5q-.63 0-.918-.282-.282-.288-.282-.918v-1.92q0-.63.282-.912.288-.288.918-.288h1.5q.63 0 .912.288.288.282.288.912zm.603-3.06h2.52q.63 0 .912.288.288.282.288.912v.54q0 .498-.168.774-.162.276-.522.366l.75 1.32h-1.17l-.69-1.26h-.84v1.26h-1.08zm2.64 1.2q0-.36-.36-.36h-1.2v1.26h1.2q.36 0 .36-.36zm3.718 3h-1.08v-3.36h-1.26v-.84h3.6v.84h-1.26zm5.011 0h-3.33v-4.2h3.33v.84h-2.25v.81h1.77v.84h-1.77v.87h2.25z"
    />
    <path stroke="url(#a)" strokeWidth={6} d="M130 29.788h28.695" />
    <path
      stroke={bg === "dark" ? "#fff" : "#000"}
      strokeWidth={6}
      d="M130 21.744h28.695m-3 3V2.625M133 23.78v-8.044m31 5v12.065m25.458-3.046-22.958-.019m22.868-24.111h-28.694"
    />
    <path
      stroke={bg === "dark" ? "#fff" : "#000"}
      strokeWidth={6}
      d="M0-3h29.516"
      transform="matrix(-.82782 -.56099 .5487 -.83601 189.217 23.975)"
    />
    <path
      stroke={bg === "dark" ? "#fff" : "#000"}
      strokeWidth={6}
      d="M186.378 3.736v12.065M163.674 2.625V14.69m22.758 5.53v12.065"
    />
    <path fill={bg === "dark" ? "#000" : "#fff"} d="M189.5 20.236v4.005l-16.956-11.566z" />
    <path
      fill={bg === "dark" ? "#000" : "#fff"}
      d="M189.5 20.236v4.005l-16.956-11.566zm-10.522 4.005-.989 1.508-18.304-11.562-.001-3.016 1.485 1.006z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={130}
        x2={158.695}
        y1={33.288}
        y2={33.288}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f4e60b" />
        <stop offset={0.5} stopColor="#018d5e" />
        <stop offset={1} stopColor="#3178c6" />
      </linearGradient>
    </defs>
  </svg>
)
export default LogoSvgComponent
```

## O componente Navbar

O componente `<Navbar>` será feito de acordo com o Figma:

### Código do componente `<Navbar>`

```typescript title="components/layout/navbar.tsx"
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoSvgComponent from '../logo';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href ?? ''))

  return (
    <nav className="flex justify-between p-4 w-full max-w-7xl mx-auto items-center mb-2">
      <div>
        {/* <Image src="/logo/logo-default.svg" alt="Logo NorteJS" width={180} height={120} /> */}
        <LogoSvgComponent bg="light" />
      </div>

      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/" className={cn(
            "hover:font-medium ease-in-out duration-300",
            isActive('/') && 'font-medium')
            }>
            Home
          </Link>
          {isActive('/') && <div className="border-b-[3px] border-blue-400/90 rounded-2xl" />}
        </li>

        <li>
          <Link href="/sobre" className={`hover:font-medium ease-in-out duration-300  ${isActive('/sobre') ? 'font-medium' : ''}`}>Sobre</Link>
          {isActive('/sobre') && <div className="border-b-[3px] border-blue-400/90 rounded-2xl" />}
        </li>

        <li>
          <Link href="/vagas" className={`hover:font-medium ease-in-out duration-300  ${isActive('/vagas') ? 'font-medium' : ''}`}>Vagas</Link>
          {isActive('/vagas') && <div className="border-b-[3px] border-blue-400/90 rounded-2xl" />}
        </li>

        <li>
          <Link href="/cadastrar-vagas" className={`hover:font-medium ease-in-out duration-300  ${isActive('/cadastrar-vagas') ? 'font-medium' : ''}`}>Cadastrar Vagas</Link>
          {isActive('/cadastrar-vagas') && <div className="border-b-[3px] border-blue-400/90 rounded-2xl" />}
        </li>
      </ul>
    </nav >
  )
}
```

## O componente Footer

O componente `<Footer>` será feito de acordo com o Figma:

### Código do componente `<Footer>`

```typescript title="components/layout/footer.tsx"
import { Github, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import LogoSvgComponent from '../logo'
export default function Footer() {
  return (
    <footer className="bg-black mt-8 pt-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4 max-w-7xl mx-auto">
        <div className="flex flex-row items-center space-x-5">
          {/* <Image
            src="/logo/logo-dark.svg"
            alt="Logo NorteJS"
            width={230}
            height={41}
          /> */}
          <LogoSvgComponent bg="dark" />
          <p className="text-white max-w-md">Nós conectamos candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.</p>
        </div>

        <div className="flex space-x-4 items-center ">
          <Link className="text-white hover:scale-115 ease-in-out duration-300 " href="https://github.com/your-repo-link" target="_blank" >
            <Github />
          </Link>
          <Link className="text-white hover:scale-115 ease-in-out duration-300 " href="https://github.com/your-repo-link" target="_blank" >
            <Linkedin />
          </Link>
          <Link className="text-white hover:scale-115 ease-in-out duration-300" href="https://github.com/your-repo-link" target="_blank" >
            <Instagram/>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-4" />
    </footer>
  )
}
```

## O componente Layout

Agora que temos os 3 componentes prontos, vamos ajustar nosso layout para que nosso conteúdo seja "abraçado" pela `<Navbar />` e pelo `<Footer />`.

Um ponto importante é que, para cada página ou layout, podemos exportar um [objeto metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) que conterá informações importantes da página (especialmente para SEO), como título, descrição e outros.

### Código do componente `<Layout />`

```typescript title="app/layout.tsx"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const MavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VagasNorteJs",
  description:
    "O VagasNorteJs conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MavenPro.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
```
