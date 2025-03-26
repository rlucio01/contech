"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ScrollLink({ href, children, className = "" }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Remove o # do href para obter o ID do elemento
    const targetId = href.replace(/.*#/, "")
    const element = document.getElementById(targetId)

    if (element) {
      // Rola suavemente até o elemento
      element.scrollIntoView({ behavior: "smooth" })

      // Atualiza a URL sem recarregar a página
      window.history.pushState({}, "", href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

