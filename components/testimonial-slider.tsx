"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function TestimonialSlider({ testimonials }: { testimonials: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered || !scrollRef.current) return
    const el = scrollRef.current
    let animationId: number
    let accum = el.scrollLeft

    const scroll = () => {
      accum += 0.5 // Slower, smoother scroll
      if (accum >= el.scrollWidth / 2) {
        accum = 0
      }
      el.scrollLeft = accum
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isHovered])

  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}>
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-8" 
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
      >
        {[...testimonials, ...testimonials].map((testi, idx) => (
          <div key={idx} className="shrink-0 w-[85vw] md:w-[400px] pulla-card rounded-[24px] p-8 h-full border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-md">
            <div className="flex gap-1 mb-6 text-[#9bd4d7]">★★★★★</div>
            <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">"{testi.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#3d4d6a]/50 flex items-center justify-center text-white font-medium">
                {testi.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">{testi.name}</h4>
                <p className="text-white/30 text-xs font-mono tracking-wider">{testi.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Glassmorphism Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => scrollByAmount(-400)} className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-xl">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => scrollByAmount(400)} className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-xl">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
