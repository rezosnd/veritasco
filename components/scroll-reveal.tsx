"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  mobileOptimized?: boolean
}

export function ScrollReveal({ children, delay = 0, className = "", mobileOptimized = true }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.classList.remove("opacity-0", "translate-y-8", "md:translate-y-12")
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              if (entry.target) {
                entry.target.classList.remove("opacity-0", "translate-y-4", "translate-y-8", "md:translate-y-12")
                entry.target.classList.add("opacity-100", "translate-y-0")
                setHasAnimated(true)
              }
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: isMobile && mobileOptimized ? 0.05 : 0.1,
        rootMargin: isMobile && mobileOptimized ? "0px 0px -20px 0px" : "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, hasAnimated, isMobile, mobileOptimized])

  const initialClasses = "opacity-0 translate-y-8"

  // On Mobile, entirely disable scroll animations to prevent hide/show flickering and performance drops
  if (isMobile) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] ${hasAnimated ? "opacity-100 translate-y-0" : initialClasses} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
