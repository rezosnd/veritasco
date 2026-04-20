"use client"

import { useRef, useEffect, useState } from "react"

export function AnimatedWaves() {
  const wavesRef = useRef<HTMLDivElement>(null)
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

  // Removed unused mobile JS animation loop to save CPU and prevent freezing
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden z-0" ref={wavesRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className={`wave-ring animate-wave-1 ${isMobile ? 'mobile-wave' : ''}`} />
        <div className={`wave-ring animate-wave-2 ${isMobile ? 'mobile-wave' : ''}`} />
        <div className={`wave-ring animate-wave-3 ${isMobile ? 'mobile-wave' : ''}`} />
        <div className={`wave-ring animate-wave-4 ${isMobile ? 'mobile-wave' : ''}`} />
      </div>

      <style jsx>{`
        .wave-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.1);
          width: 780px;
          height: 780px;
          border-radius: 50%;
          filter: blur(12px);
          box-shadow:
            12px 12px 35px rgba(59, 89, 152, 0.15),
            -12px -12px 35px rgba(255, 255, 255, 0.8),
            inset 12px 12px 25px rgba(255, 255, 255, 0.8),
            inset -12px -12px 25px rgba(59, 89, 152, 0.1);
        }

        .wave-ring::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 85%;
          height: 85%;
          border-radius: 50%;
          filter: blur(12px);
          box-shadow:
            inset 12px 12px 35px rgba(59, 89, 152, 0.15),
            inset -12px -12px 35px rgba(255, 255, 255, 0.8),
            12px 12px 25px rgba(255, 255, 255, 0.8),
            -12px -12px 25px rgba(59, 89, 152, 0.1);
        }

        @keyframes wave-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
        }

        .animate-wave-1 {
          animation: wave-pulse 3s ease-out infinite;
          animation-delay: 0s;
        }

        .animate-wave-2 {
          animation: wave-pulse 3s ease-out infinite;
          animation-delay: 0.75s;
        }

        .animate-wave-3 {
          animation: wave-pulse 3s ease-out infinite;
          animation-delay: 1.5s;
        }

        .animate-wave-4 {
          animation: wave-pulse 3s ease-out infinite;
          animation-delay: 2.25s;
        }

        /* Mobile wave optimizations */
        .mobile-wave {
          will-change: transform, opacity;
          transform: translate3d(-50%, -50%, 0) scale(0.1);
        }

        .mobile-wave::before {
          will-change: transform;
          transform: translate3d(-50%, -50%, 0);
        }
      `}</style>
    </div>
  )
}
