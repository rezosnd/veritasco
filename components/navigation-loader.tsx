"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

// Only show the logo overlay if navigation takes longer than this threshold.
// Fast cached navigations (<150ms) just get the subtle top progress bar.
const OVERLAY_THRESHOLD_MS = 150

export function NavigationLoader() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [barVisible, setBarVisible] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const isFirstMount = useRef(true)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  const push = (fn: () => void, ms: number) => {
    timersRef.current.push(setTimeout(fn, ms))
  }

  useEffect(() => {
    // Skip the very first mount — page already rendered via SSR
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    clearAllTimers()

    // ─── Start top progress bar immediately (subtle, barely noticeable) ───
    setProgress(0)
    setBarVisible(true)

    push(() => setProgress(35), 60)
    push(() => setProgress(65), 200)
    push(() => setProgress(82), 400)

    // ─── Only show the full logo overlay for slower navigations ───────────
    push(() => setOverlayVisible(true), OVERLAY_THRESHOLD_MS)

    // ─── Complete progress and hide ───────────────────────────────────────
    push(() => setProgress(100), 560)
    push(() => {
      setOverlayVisible(false)
    }, 680)
    push(() => {
      setBarVisible(false)
      setProgress(0)
    }, 900)

    return clearAllTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      {/* ── Top NProgress-style bar ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
        style={{
          opacity: barVisible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      >
        <div
          className="h-full rounded-r-full"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
            boxShadow: "0 0 6px var(--color-primary)",
            transition:
              progress === 0
                ? "none"
                : "width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* ── Premium logo overlay (only on slow navigations) ─────────────── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[9998] flex items-center justify-center bg-background pointer-events-none"
        style={{
          opacity: overlayVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
          // Don't render in DOM at all when not needed (avoids paint cost)
          visibility: overlayVisible ? "visible" : "hidden",
        }}
      >
        <div
          className="flex flex-col items-center gap-4"
          style={{
            transform: overlayVisible ? "scale(1)" : "scale(0.94)",
            transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {/* Logo */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl bg-primary/15"
              style={{
                animation: overlayVisible
                  ? "logoPulse 1.2s ease-in-out infinite"
                  : "none",
              }}
            />
            <Image
              src="/logo.avif"
              alt="VeritasCo.Tech"
              width={52}
              height={52}
              priority
              quality={85}
              className="relative drop-shadow-md"
            />
          </div>

          {/* Brand name */}
          <span className="text-sm font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            VeritasCo.Tech
          </span>

          {/* Progress bar */}
          <div className="w-24 h-[1.5px] bg-border rounded-full overflow-hidden">
            <div
              className="h-full loading-bar rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
