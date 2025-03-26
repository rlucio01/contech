import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { ScrollLink } from "@/components/scroll-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Contech - Consultoria de TI para Microempresas",
  description: "Soluções de TI personalizadas para microempresas. Telefonia, Segurança, Suporte, Office e Automações.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/images/contech-logo.png" alt="Contech Logo" width={150} height={50} className="h-auto" />
              </Link>
              <nav className="hidden md:flex gap-6">
                <ScrollLink href="#inicio" className="text-sm font-medium hover:text-primary">
                  Início
                </ScrollLink>
                <ScrollLink href="#servicos" className="text-sm font-medium hover:text-primary">
                  Serviços
                </ScrollLink>
                <ScrollLink href="#sobre" className="text-sm font-medium hover:text-primary">
                  Sobre
                </ScrollLink>
                <ScrollLink href="#contato" className="text-sm font-medium hover:text-primary">
                  Contato
                </ScrollLink>
              </nav>
              <ScrollLink
                href="#contato"
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Fale Conosco
              </ScrollLink>
              <button className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </header>
          {children}
          <footer className="w-full border-t bg-gray-50 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
                © 2025 Contech Consultoria de TI. Todos os direitos reservados.
              </p>
              <div className="flex gap-4">
                <Link href="/termos" className="text-sm text-gray-500 hover:text-gray-900">
                  Termos
                </Link>
                <Link href="/privacidade" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacidade
                </Link>
                <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-900">
                  Cookies
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'