"use client"

import { SoftButton } from "./soft-button"
import { useState } from "react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  onSelect: () => void
}

export function PricingCard({ title, price, period, features, popular = false, onSelect }: PricingCardProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div
      className={`relative soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 ${
        popular ? "ring-2 ring-primary scale-105" : ""
      } ${isPressed ? "scale-[0.98]" : "hover:scale-[1.02]"}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold soft-shadow">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl md:text-5xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <SoftButton onClick={onSelect} className="w-full">
        Get Started
      </SoftButton>
    </div>
  )
}
