"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade-up" | "slide-left" | "slide-right" | "fade" | "reveal-text"
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (animation === "reveal-text") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const inners = el.querySelectorAll(".focus--mask-inner")
            inners.forEach((inner, i) => {
              setTimeout(() => inner.classList.add("visible"), delay + i * 150)
            })
            observer.unobserve(el)
          }
        },
        { threshold }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    const cls =
      animation === "slide-left" ? "sr-left"
      : animation === "slide-right" ? "sr-right"
      : "sr-hidden"

    el.classList.add(cls)
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            el.classList.add("sr-visible")
            el.classList.add("is-revealed") // Triggers border traces
          })
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )

    const timer = setTimeout(() => observer.observe(el), 100)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [animation, delay, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
