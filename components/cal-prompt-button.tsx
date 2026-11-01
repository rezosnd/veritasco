"use client"

import { useState, useEffect } from "react"
import { Calendar, Check, Copy, ExternalLink } from "lucide-react"

const ASSISTANTS = [
  { name: "Cal.ai", src: "https://app.cal.com/ai-assistants/cal-ai.svg" },
  { name: "ChatGPT", src: "https://app.cal.com/ai-assistants/chatgpt.svg" },
  { name: "Claude", src: "https://app.cal.com/ai-assistants/claude.svg" },
  { name: "Grok", src: "https://app.cal.com/ai-assistants/grok.svg" },
  { name: "Perplexity", src: "https://app.cal.com/ai-assistants/perplexity.svg" },
  { name: "Muse", src: "https://app.cal.com/ai-assistants/muse.svg" },
  { name: "Instinct", src: "https://app.cal.com/ai-assistants/instinct.svg" },
  { name: "OpenClaw", src: "https://app.cal.com/ai-assistants/openclaw.svg" },
]

export function CalPromptButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const [logoIdx, setLogoIdx] = useState(0)
  const calPrompt = "If not added, add mcp.cal.com/mcp, then book veritasco/create-custome-software-and-service"
  const calUrl = "https://cal.com/veritasco/create-custome-software-and-service"

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoIdx((prev) => (prev + 1) % ASSISTANTS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(calPrompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div className={`inline-flex flex-wrap items-center gap-3 ${className}`}>
      {/* Direct Cal.com Booking Link */}
      <a
        href={calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white hover:bg-[#262626] text-xs font-mono tracking-wider transition-all shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Custom Software Meeting</span>
        <ExternalLink className="w-3 h-3 text-white/60 ml-0.5" />
      </a>

      {/* Copy Prompt for AI Assistants (Cal.com Official Embed) */}
      <div className="relative inline-block">
        <button
          type="button"
          onClick={handleCopy}
          className="relative inline-flex items-stretch h-9 px-0 border border-[rgba(10,10,10,0.15)] rounded-xl bg-white text-[#0a0a0a] hover:bg-[#faf9f5] transition-colors shadow-sm cursor-pointer select-none"
          title="Click to copy AI scheduling prompt"
        >
          <span className="inline-flex items-center gap-2 px-3 text-xs font-medium">
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#737373]" />
            )}
            <span className="font-mono text-[11px] tracking-wide">
              {copied ? "Prompt Copied" : "Copy AI Prompt"}
            </span>
          </span>

          <span className="inline-flex items-center px-2.5 border-l border-[rgba(10,10,10,0.1)] bg-[#faf9f5]">
            <span className="relative w-4 h-4 block">
              {ASSISTANTS.map((asst, i) => (
                <img
                  key={asst.name}
                  src={asst.src}
                  alt={asst.name}
                  className={`absolute inset-0 w-4 h-4 object-contain transition-opacity duration-500 ${
                    i === logoIdx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </span>
          </span>
        </button>

        {/* Tooltip feedback */}
        {copied && (
          <div className="absolute left-1/2 -top-10 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0a0a0a] text-white text-[11px] font-mono shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200 z-50">
            Copied. Open your assistant and paste instructions
          </div>
        )}
      </div>
    </div>
  )
}
