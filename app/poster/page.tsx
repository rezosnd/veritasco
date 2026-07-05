"use client"

import Image from "next/image"
import { ShieldCheck, ChevronRight } from "lucide-react"

export default function PosterGenerator() {
  return (
    <div className="min-h-screen bg-[#050b14] flex flex-col items-center justify-center p-8 font-sans">
      <div className="text-white/50 mb-4 text-sm font-medium tracking-widest uppercase">
        Screenshot this square to post on Instagram/LinkedIn
      </div>
      
      {/* 1080x1080 Square Poster */}
      <div 
        id="social-poster"
        className="relative overflow-hidden shadow-2xl flex flex-col"
        style={{
          width: "1080px",
          height: "1080px",
          transform: "scale(0.65)",
          transformOrigin: "top center",
          fontFamily: "var(--font-display)",
        }}
      >
        {/* TOP HALF - Vibrant Blue */}
        <div className="relative h-[500px] bg-[#1a365d] px-16 pt-16 flex flex-col justify-start">
          {/* Top Logo */}
          <div className="flex items-center justify-center gap-4 mb-16 w-full absolute top-12 left-0">
            <div className="w-10 h-10 relative">
              <Image src="/logo.avif" alt="Logo" fill className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <span className="text-3xl font-bold tracking-wider text-white" style={{ fontFamily: "var(--font-body)" }}>
              veritasco
            </span>
          </div>

          {/* Headline */}
          <div className="mt-24 z-10 max-w-[750px]">
            <h1 className="text-[85px] leading-[1.1] font-bold text-white tracking-tight">
              Why VeritasCo<br />
              works for Nidhi<br />
              Banking too:
            </h1>
          </div>

          {/* Floating Icon (Top Right) */}
          <div className="absolute top-32 right-16 w-48 h-48 bg-gradient-to-br from-[#9bd4d7] to-[#4fd1c5] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
            <ShieldCheck className="w-24 h-24 text-[#0d1d36]" />
            {/* Glossy overlay to make it look 3D */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/40 rounded-3xl" />
          </div>
          
          {/* Faint grid overlay on top half */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        {/* BOTTOM HALF - Dark Navy */}
        <div className="relative h-[580px] bg-[#091426] px-16 pt-16 flex flex-col">
          <div className="flex z-10">
            {/* Left Content */}
            <div className="w-[60%] flex flex-col gap-6">
              <h2 className="text-6xl font-bold text-[#eab308] leading-tight">
                #1<br />
                100% Govt<br />
                Compliant
              </h2>
              
              <div className="mt-8 flex flex-col gap-8">
                <p className="text-3xl text-white font-medium leading-snug tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                  Our Enterprise software is built purely as per Government Act guidelines.
                </p>
                <p className="text-3xl text-white font-medium leading-snug tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                  Manage members, term deposits, loans, and shares seamlessly in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Large Phone Graphic (Right Side Cutout) */}
          <div className="absolute bottom-0 right-0 w-[550px] h-[750px] z-20 translate-y-24 translate-x-12">
            <div className="relative w-full h-full">
              <Image src="/phone.avif" alt="App interface" fill className="object-contain object-bottom drop-shadow-[[-20px_0_40px_rgba(0,0,0,0.5)]]" />
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="absolute bottom-0 left-0 w-full px-16 py-8 flex items-center justify-between z-30 bg-gradient-to-t from-[#091426] via-[#091426]/80 to-transparent">
            <span className="text-2xl font-bold text-white/80" style={{ fontFamily: "var(--font-body)" }}>
              veritasco.tech/nidhi
            </span>
            <div className="flex items-center gap-4 text-2xl font-bold text-white/80 mr-6" style={{ fontFamily: "var(--font-body)" }}>
              @veritascotech
              <div className="w-10 h-10 rounded-full bg-[#eab308] flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-[#091426]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
