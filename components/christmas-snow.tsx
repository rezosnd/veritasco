"use client"

import { useEffect, useState, useRef } from "react"

export function ChristmasSnow() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])
  const [isMobile, setIsMobile] = useState(false)
  const animationRef = useRef<number>()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Reduce snowflakes on mobile for better performance but keep animation
    const flakeCount = isMobile ? 20 : 50
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20,
    }))
    setSnowflakes(flakes)
  }, [isMobile])

  // Use requestAnimationFrame for smoother animations on mobile
  useEffect(() => {
    if (!isMobile) return

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMobile])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Snowflakes with optimized rendering */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={`absolute text-blue-300 opacity-80 ${isMobile ? 'mobile-snow' : 'animate-snowfall'}`}
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            // Use transform3d for hardware acceleration on mobile
            transform: isMobile ? 'translate3d(0, 0, 0)' : undefined,
            willChange: isMobile ? 'transform' : undefined,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}