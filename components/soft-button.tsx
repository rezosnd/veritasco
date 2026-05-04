"use client"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface SoftButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const SoftButton = forwardRef<HTMLButtonElement, SoftButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none"

    const variants = {
      primary: "bg-primary text-primary-foreground hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(56,73,130,0.35)] active:scale-[0.98]",
      secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 active:scale-[0.98]",
      outline: "border border-white/30 text-white hover:bg-white/08 hover:border-white/50 active:scale-[0.98]",
    }

    const sizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-7 py-3.5",
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

SoftButton.displayName = "SoftButton"
