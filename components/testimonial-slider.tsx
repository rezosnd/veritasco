"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const DEFAULT_TESTIMONIALS = [
  { quote: "The QR ordering system eliminated all our waiter bottlenecks during Sunday rush hours.", name: "Chef Sanjeev", location: "Patna, Bihar" },
  { quote: "Our table turnover increased by 35% within the first two weeks of going live.", name: "Rohit Verma", location: "Bhubaneswar, Odisha" },
  { quote: "Orders route straight from phone scans to kitchen display screens with zero mistakes.", name: "Ananya Sen", location: "Kolkata, WB" },
]

export function TestimonialSlider({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const items = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered || !scrollRef.current) return
    const el = scrollRef.current
    let animationId: number
    let accum = el.scrollLeft

    const scroll = () => {
      accum += 0.5
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
        {[...items, ...items].map((testi, idx) => (
          <div key={idx} className="shrink-0 w-[85vw] md:w-[400px] rounded-3xl p-8 h-full border border-[rgba(10,10,10,0.08)] bg-white shadow-sm">
            <div className="flex gap-1 mb-6 text-[#0a0a0a]">★★★★★</div>
            <p className="text-[#0a0a0a]/80 font-normal leading-relaxed mb-8 text-base">"{testi.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center font-medium text-sm">
                {testi.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-[#0a0a0a] font-medium text-sm">{testi.name}</h4>
                <p className="text-[#737373] text-xs font-mono tracking-wider">{testi.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          type="button"
          onClick={() => scrollByAmount(-400)} 
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[rgba(10,10,10,0.12)] text-[#0a0a0a] hover:bg-[#faf9f5] transition-all shadow-md"
          aria-label="Previous testimonials"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          type="button"
          onClick={() => scrollByAmount(400)} 
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[rgba(10,10,10,0.12)] text-[#0a0a0a] hover:bg-[#faf9f5] transition-all shadow-md"
          aria-label="Next testimonials"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
