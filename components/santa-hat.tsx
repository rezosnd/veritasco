"use client"

import Image from "next/image"

export function SantaHat() {
  return (
    /* Positioned top-left (-top-8) and slightly left (-left-4) to break the card border */
    <div className="absolute -top-7 -left-4 md:-top-10 md:-left-6 z-50 pointer-events-none select-none">
      <div className="relative">
        {/* Real Santa Hat Image */}
        <Image 
          src="https://i.ibb.co/k6JwmF9q/santa-cap.png" 
          alt="Santa Hat"
          width={110} 
          height={90}
          priority
          /* Responsive sizing: slightly smaller on mobile, full size on desktop */
          className="w-[70px] h-auto md:w-[110px] drop-shadow-[2px_10px_15px_rgba(0,0,0,0.4)] transform -rotate-[15deg]"
        />
        
        {/* Subtle Static Glow */}
        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-50 -z-10" />
      </div>
    </div>
  )
}