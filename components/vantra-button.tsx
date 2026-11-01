"use client"

import React from "react"
import Link from "next/link"

interface VantraButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "dark" | "light" | "ghost"
  className?: string
  external?: boolean
  type?: "button" | "submit" | "reset"
  ariaLabel?: string
}

export function VantraButton({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
  external = false,
  type = "button",
  ariaLabel,
}: VantraButtonProps) {
  const variantClass = variant === "light" ? "is-light" : variant === "ghost" ? "is-ghost" : ""

  const innerContent = (
    <>
      <div className="button_text-col">
        <div className="button_text-row">
          <span className="button_text">{children}</span>
        </div>
        <div className="button_text-row">
          <span className="button_text">{children}</span>
        </div>
      </div>
      <div className="button_chip">
        <div className="button_chip-row">
          <div className="button_icon">
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5">
              <path d="M5 13 13 5M6.5 5H13v6.5" />
            </svg>
          </div>
        </div>
        <div className="button_chip-row is-second">
          <div className="button_icon">
            <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5">
              <path d="M5 13 13 5M6.5 5H13v6.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`button ${variantClass} ${className}`}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {innerContent}
        </a>
      )
    }

    return (
      <Link href={href} className={`button ${variantClass} ${className}`} aria-label={ariaLabel} onClick={onClick}>
        {innerContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variantClass} ${className}`}
      aria-label={ariaLabel}
    >
      {innerContent}
    </button>
  )
}

