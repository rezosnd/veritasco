"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroDevice() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-2000 pointer-events-none">
      {/* Glowing background effect */}
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl opacity-50 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Main device image with parallax */}
      <div
        className="relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: isMobile
            ? "none"
            : `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translateZ(50px)`,
        }}
      >
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          {/* Floating animation wrapper */}
          <div className="absolute inset-0 animate-float">
            <Image
              src="/phone.avif"
              alt="VeritasCo Biometric Attendance Device"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 500px"
              quality={85}
            />
          </div>

          {/* Accent circles for depth */}
          <div
            className="hidden md:block absolute top-1/4 -left-8 w-24 h-24 md:w-32 md:h-32 bg-primary/30 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />
          <div
            className="hidden md:block absolute bottom-1/4 -right-8 w-32 h-32 md:w-40 md:h-40 bg-accent/30 rounded-full blur-2xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -1.2}px, ${mousePosition.y * -1.2}px)`,
              transition: "transform 0.2s ease-out",
              animationDelay: "1s",
            }}
          />
        </div>
      </div>

      {/* Feature badges floating around */}
      <div
        className="absolute top-8 left-4 md:top-12 md:left-8 soft-shadow bg-card rounded-2xl px-3 py-2 md:px-4 md:py-3 animate-float"
        style={{
          transform: `translate(${mousePosition.x * -0.8}px, ${mousePosition.y * -0.8}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "0.5s",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm font-semibold text-foreground">99.9% Accurate</span>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-4 md:bottom-12 md:right-8 soft-shadow bg-card rounded-2xl px-3 py-2 md:px-4 md:py-3 animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "1s",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm font-semibold text-foreground">Real-time Sync</span>
        </div>
      </div>

      {/* Premium "Coming Soon" badge — Biometric Attendance App */}
      <div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="relative flex items-center gap-2 bg-gradient-to-r from-primary to-accent rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-lg shadow-primary/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase whitespace-nowrap">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  )
}
