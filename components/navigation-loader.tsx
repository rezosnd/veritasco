"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const PAGE_NAMES: Record<string, string> = {
  "/":              "Home",
  "/erp":           "School ERP",
  "/pos":           "Restaurant POS",
  "/about":         "About",
  "/contact":       "Contact",
  "/faq":           "FAQ",
  "/testimonials":  "Testimonials",
  "/privacy-policy":"Privacy",
  "/join-us":       "Join Us",
  "/category-proof":"Category",
}

export function NavigationLoader() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [barVisible, setBarVisible] = useState(false)
  const [pageLabel, setPageLabel] = useState("")
  const [phase, setPhase] = useState<"idle"|"in"|"out">("idle")
  const isFirst = useRef(true)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = [] }
  const push = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms))

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    clear()

    const name =
      PAGE_NAMES[pathname] ??
      PAGE_NAMES[Object.keys(PAGE_NAMES).find(k => k !== "/" && pathname.startsWith(k)) ?? ""] ??
      "Loading"

    setPageLabel(name)
    setProgress(0)
    setBarVisible(true)
    setPhase("idle") // reset first

    push(() => setProgress(40), 30)
    push(() => setProgress(72), 200)
    push(() => setProgress(90), 420)
    push(() => setPhase("in"), 50)
    push(() => setPhase("out"), 720)
    push(() => setPhase("idle"), 1250)
    push(() => setProgress(100), 680)
    push(() => { setBarVisible(false); setProgress(0) }, 950)

    return clear
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      {/* Top progress bar */}
      <div
        aria-hidden
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 10000,
          height: "1.5px", opacity: barVisible ? 1 : 0,
          transition: "opacity 0.2s ease", pointerEvents: "none",
        }}
      >
        <div style={{
          height: "100%", width: `${progress}%`,
          background: "linear-gradient(90deg, #5d6d8e, #8090ad)",
          borderRadius: "0 2px 2px 0",
          transition: progress === 0 ? "none" : "width 0.4s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>

      {/* Pulla page-name overlay — slides up from bottom, then up to reveal */}
      <div
        aria-hidden
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          backgroundColor: "#2d3a52",
          clipPath: phase === "idle" ? "inset(100% 0 0 0)"
                  : phase === "in"   ? "inset(0% 0 0 0)"
                  :                    "inset(0% 0 100% 0)",
          transition: phase === "in"  ? "clip-path 0.6s cubic-bezier(0.12,0.41,0.11,0.9)"
                    : phase === "out" ? "clip-path 0.5s cubic-bezier(0.12,0.41,0.11,0.9)"
                    :                   "none",
          pointerEvents: "none",
        }}
      >
        {/* · PageName — bottom-left */}
        <div style={{
          position: "absolute", bottom: "11%", left: "10%",
          display: "flex", alignItems: "center", gap: "16px",
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.35s ease 0.18s, transform 0.35s ease 0.18s",
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "rgba(255,255,255,0.3)", display: "block", flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(26px,4.5vw,54px)",
            fontWeight: 300, color: "rgba(255,255,255,0.75)",
            letterSpacing: "-0.01em", lineHeight: 1,
          }}>{pageLabel}</span>
        </div>
        {/* brand — bottom-right */}
        <div style={{
          position: "absolute", bottom: "11%", right: "10%",
          fontFamily: "'Open Sans',sans-serif", fontSize: "10px",
          fontWeight: 700, color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.2em", textTransform: "uppercase",
          opacity: phase === "in" ? 1 : 0,
          transition: "opacity 0.35s ease 0.28s",
        }}>VeritasCo.Tech</div>
      </div>
    </>
  )
}
