"use client"
import { useState } from "react"

interface Step {
  num: string
  title: string
  desc: string
}

export function InteractiveSteps({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col lg:flex-row gap-16 min-h-[400px]">
      {/* Left Menu */}
      <div className="lg:w-1/3 flex flex-col justify-center gap-6 border-l border-white/10 pl-8">
        {steps.map((step, i) => (
          <button 
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
            className={`text-left transition-all duration-500 ${activeIndex === i ? "text-white scale-[1.02] translate-x-2" : "text-white/30 hover:text-white/60"}`}
          >
            <span className="text-xs font-mono tracking-widest block mb-2">{step.num}.</span>
            <h4 className={`text-xl md:text-2xl transition-all duration-500 ${activeIndex === i ? 'font-medium tracking-tight' : 'font-light'}`}>{step.title}</h4>
          </button>
        ))}
      </div>

      {/* Right Content - Absolute Stack */}
      <div className="lg:w-2/3 relative h-[300px] lg:h-auto">
        {steps.map((step, i) => (
          <div 
            key={i}
            style={{ 
              position: "absolute", inset: 0, 
              opacity: activeIndex === i ? 1 : 0, 
              transform: activeIndex === i ? "translateY(0px)" : "translateY(20px)", 
              transition: "0.6s cubic-bezier(0.12, 0.41, 0.11, 0.9)", 
              pointerEvents: activeIndex === i ? "auto" : "none", 
              display: "flex", flexDirection: "column", justifyContent: "center" 
            }}
          >
            <p style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "rgba(255, 255, 255, 0.3)", marginBottom: "16px" }}>
              STEP {step.num}
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, marginBottom: "20px" }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "18px", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.8, fontWeight: 300, maxWidth: "500px" }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
