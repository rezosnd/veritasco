"use client"

import { useRouter } from "next/navigation"
import { ReactNode, MouseEvent } from "react"

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export function TransitionLink({ href, children, className, style, onClick }: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick?.()
    if ("startViewTransition" in document) {
      ;(document as any).startViewTransition(() => router.push(href))
    } else {
      router.push(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  )
}
