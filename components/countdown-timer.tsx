"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
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
    const targetDate = new Date("2026-01-30T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    // Reduce update frequency on mobile to prevent jitter
    const interval = setInterval(updateCountdown, isMobile ? 5000 : 1000)

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <div className="flex gap-6 justify-center items-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Paper layers effect */}
        <div className="absolute inset-0 bg-card rounded-2xl rotate-2 soft-shadow opacity-30" />
        <div className="absolute inset-0 bg-card rounded-2xl -rotate-1 soft-shadow opacity-50" />
        <div className="relative soft-shadow bg-gradient-to-br from-card to-card/80 rounded-2xl w-24 h-24 flex items-center justify-center mb-3 border border-border/50">
          <span className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{label}</span>
    </div>
  )
}
