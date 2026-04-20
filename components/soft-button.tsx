"use client"

import type { ReactNode, ButtonHTMLAttributes } from "react"

interface SoftButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "default" | "lg"
  onClick?: () => void
}

export function SoftButton({ children, variant = "primary", size = "default", onClick, className, ...props }: SoftButtonProps) {
  const baseClasses =
    "font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"

  const variantClasses =
    variant === "primary"
      ? "soft-shadow bg-gradient-to-br from-primary to-accent text-primary-foreground hover:shadow-xl hover:soft-shadow-lg"
      : "soft-shadow bg-card text-primary hover:soft-shadow-lg"

  const sizeClasses = 
    size === "lg" ? "px-10 py-5 text-lg" : 
    size === "sm" ? "px-6 py-3 text-sm" : 
    "px-8 py-4 text-base"

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ''}`} 
      onClick={onClick}
      {...props}
    >
      {/* Ripple effect - fixed for mobile iOS double-tap bug by using active state mapping or isolating hover logic */}
      <span className="absolute inset-0 bg-white/20 translate-y-full md:group-hover:translate-y-0 active:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
