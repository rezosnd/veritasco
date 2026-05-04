"use client"
import { useEffect, useState, useRef } from "react"

/* Pulla-EXACT home preloader:
   Cycles through 4 words with clip-path slide-in, then full overlay slides up.
   Word sequence: · School ERP → · Restaurant POS → · Digital Solutions → · VeritasCo */

const WORDS_HOME = [
  "School ERP",
  "Restaurant POS",
  "Digital Solutions",
  "VeritasCo",
]

const PAGE_WORDS: Record<string, string[]> = {
  "School ERP":     ["School ERP"],
  "Restaurant POS": ["Restaurant POS"],
  "Contact":        ["Contact"],
  "About":          ["About Us"],
}

export function PullaPreloader({ pageName = "Home" }: { pageName?: string }) {
  const words = pageName === "Home" ? WORDS_HOME : (PAGE_WORDS[pageName] ?? [pageName])
  const [wordIdx, setWordIdx] = useState(0)           // which word is shown
  const [wordPhase, setWordPhase] = useState<"enter"|"exit">("enter")
  const [overlayPhase, setOverlayPhase] = useState<"show"|"leaving"|"gone">("show")
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const push = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms))

  useEffect(() => {
    if (words.length === 1) {
      // Single word pages — just show and leave
      push(() => setOverlayPhase("leaving"), 900)
      push(() => setOverlayPhase("gone"), 1650)
      return () => timers.current.forEach(clearTimeout)
    }

    // Cycle through words
    // Each word: 300ms enter, 200ms hold, 100ms exit = ~600ms each
    const interval = 600
    words.forEach((_, idx) => {
      push(() => { setWordIdx(idx); setWordPhase("enter") }, idx * interval)
      push(() => setWordPhase("exit"), idx * interval + 250)
    })
    // After all words shown, slide overlay away
    const total = words.length * interval
    push(() => setOverlayPhase("leaving"), total)
    push(() => setOverlayPhase("gone"),    total + 650)

    return () => timers.current.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (overlayPhase === "gone") return null

  return (
    <div
      aria-hidden
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        backgroundColor: "#2d3a52",   /* Blue bg */
        clipPath: overlayPhase === "leaving"
          ? "circle(0% at 50% 50%)"
          : "circle(150% at 50% 50%)",
        transition: overlayPhase === "leaving"
          ? "clip-path 1s cubic-bezier(0.7, 0, 0.3, 1), transform 1s cubic-bezier(0.7, 0, 0.3, 1)"
          : "none",
        transform: overlayPhase === "leaving" ? "scale(1.1)" : "scale(1)",
        transformOrigin: "center center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 10%",
        pointerEvents: overlayPhase === "gone" ? "none" : "all",
      }}
    >
      {/* Text wrapper — exact pulla reveal style */}
      <div className="focus--mask" style={{ position: "relative" }}>
        <div
          className={`flex items-center gap-6 transition-all duration-700 ease-pulla ${
            wordPhase === "enter" ? "translate-y-0 opacity-100 scale-100" : "translate-y-[110%] opacity-0 scale-95"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.12, 0.41, 0.11, 0.9)" }}
        >
          {/* Dot — exact pulla */}
          <span style={{
            width: 10, height: 10, borderRadius: "50%",
            background: "#9bd4d7", /* Cyan dot */
            display: "block", flexShrink: 0,
          }} />
          {/* Word text — exact pulla loader-font style */}
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(40px, 8vw, 110px)",
              fontWeight: 300,
              color: words[wordIdx] === "VeritasCo" ? "#9bd4d7" : "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              transition: "color 0.4s ease",
            }}>
              {words[wordIdx]}
            </span>
        </div>
      </div>

      {/* Progress bar at bottom — thin & elegant */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "rgba(255,255,255,0.1)",
      }}>
        <div style={{
          height: "100%",
          background: "rgba(255,255,255,0.4)",
          width: overlayPhase === "leaving" ? "100%" : `${((wordIdx + 1) / words.length) * 100}%`,
          transition: "width 0.8s linear",
        }} />
      </div>

      {/* Brand bottom-right */}
      <div style={{
        position: "absolute", bottom: "40px", right: "40px",
        fontFamily: "var(--font-body)", fontSize: "10px",
        fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
        color: "rgba(33,37,41,0.15)",
      }}>VeritasCo.Tech</div>
    </div>
  )
}
