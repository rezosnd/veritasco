"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const steps = [
  {
    title: "Discovery Call",
    description: "We understand your school structure, current system, and pain points.",
    duration: "Day 1",
  },
  {
    title: "Data Migration",
    description: "Student records, fee history, and staff data migrated securely.",
    duration: "Day 2",
  },
  {
    title: "Setup & Configure",
    description: "Modules configured, users created, biometric devices shipped.",
    duration: "Day 3–4",
  },
  {
    title: "Staff Training",
    description: "Live training session for admin, teachers, and support staff.",
    duration: "Day 5",
  },
  {
    title: "Go Live",
    description: "School is fully live. 24/7 support team on standby.",
    duration: "Day 6",
  },
]

function TimelineItem({ step, index }: { step: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex items-center justify-between w-full mb-32 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
      {/* Spacer for the other side */}
      <div className="w-5/12 hidden md:block" />

      {/* Content */}
      <div className="w-full md:w-5/12 px-4 md:px-0">
        <div 
          className="relative rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            transform: isInView ? "translateY(0)" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.12, 0.41, 0.11, 0.9)"
          }}
        >
          {/* Subtle glow behind the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d5fb7]/20 to-transparent rounded-2xl opacity-50 pointer-events-none" />
          
          <p className="text-[#9bd4d7] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {step.duration}
          </p>
          
          <h3 className="text-white text-3xl font-display mb-4 overflow-hidden flex flex-wrap">
            {/* Pulla-style staggered mask reveal */}
            {step.title.split("").map((char: string, i: number) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  transform: isInView ? "translateY(0)" : "translateY(110%)",
                  opacity: isInView ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.12, 0.41, 0.11, 0.9) ${0.1 + i * 0.04}s, opacity 0.4s ease ${0.1 + i * 0.04}s`
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h3>
          
          <p 
            className="text-white/60 text-sm leading-relaxed font-light"
            style={{
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.12, 0.41, 0.11, 0.9) 0.5s"
            }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  })

  // Map scroll progress to the ball's Y position (from 0 to 100% height)
  // We use useTransform to convert the 0-1 value into a percentage string
  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative w-full py-20 bg-[#212529]" ref={containerRef}>
      
      {/* ══ CENTRAL SVG PIPE & BALL ══ */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] md:-ml-[1px]">
        
        {/* SVG Pipe */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Background track (dim) */}
          <line 
            x1="50%" y1="0" 
            x2="50%" y2="100%" 
            stroke="rgba(255,255,255,0.12)" 
            strokeWidth="2" 
          />
          
          {/* Animated drawn line using framer-motion pathLength */}
          <motion.line 
            x1="50%" y1="0" 
            x2="50%" y2="100%" 
            stroke="url(#gradient-pipe)" 
            strokeWidth="2"
            style={{ pathLength: scrollYProgress }} 
          />

          <defs>
            <linearGradient id="gradient-pipe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d5fb7" />
              <stop offset="100%" stopColor="#9bd4d7" />
            </linearGradient>
          </defs>
        </svg>

        {/* The Ball */}
        <motion.div 
          className="absolute left-1/2 w-5 h-5 rounded-full bg-[#9bd4d7] shadow-[0_0_20px_#9bd4d7]"
          style={{ 
            x: "-50%",
            top: ballY,
            marginTop: "-10px", // center the ball perfectly
            zIndex: 50
          }}
        >
          <div className="absolute inset-[3px] bg-white rounded-full" />
        </motion.div>
      </div>

      {/* ══ TIMELINE ITEMS ══ */}
      <div className="relative z-10 pt-20 pb-10 pr-4 pl-16 md:px-0">
        {steps.map((step, index) => (
          <TimelineItem key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}
