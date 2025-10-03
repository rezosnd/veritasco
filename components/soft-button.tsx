"use client"

import type { ReactNode } from "react"

interface SoftButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
  onClick?: () => void
}

export function SoftButton({ children, variant = "primary", size = "default", onClick }: SoftButtonProps) {
  const baseClasses =
    "font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"

  const variantClasses =
    variant === "primary"
      ? "soft-shadow bg-gradient-to-br from-primary to-accent text-primary-foreground hover:shadow-xl hover:soft-shadow-lg"
      : "soft-shadow bg-card text-primary hover:soft-shadow-lg"

  const sizeClasses = size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses}`} onClick={onClick}>
      {/* Ripple effect on hover */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
