"use client"

import type React from "react"

import type { ReactNode } from "react"
import { useState } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsPressed(true)

    // Create ripple effect
    const rect = e.currentTarget.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    const newRipple = { x, y, id: Date.now() }
    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)
  }

  return (
    <div
      className={`relative overflow-hidden soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 group cursor-pointer ${
        isPressed ? "soft-shadow-inset scale-[0.98]" : "hover:scale-[1.03]"
      }`}
      onMouseDown={handleInteractionStart}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={handleInteractionStart}
      onTouchEnd={() => setIsPressed(false)}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className="absolute inset-0 bg-primary/30 rounded-full"
            style={{
              animation: "ripple 0.6s ease-out",
            }}
          />
        </span>
      ))}

      <div
        className={`soft-shadow-inset bg-gradient-to-br from-card to-background rounded-xl md:rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 ${
          isPressed ? "scale-95" : "group-hover:scale-110"
        }`}
      >
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">{description}</p>
    </div>
  )
}
