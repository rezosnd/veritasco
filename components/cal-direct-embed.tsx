"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface CalDirectEmbedProps {
  height?: string
  className?: string
  slug?: string
}

export function CalDirectEmbed({
  height = "640px",
  className = "",
  slug = "veritasco/create-custome-software-and-service",
}: CalDirectEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const calUrl = `https://cal.com/${slug}`

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-[rgba(10,10,10,0.08)] bg-white shadow-sm ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 text-center p-6">
          <Loader2 className="w-6 h-6 text-[#0a0a0a] animate-spin mb-2" />
          <p className="font-mono text-[11px] text-[#737373] uppercase tracking-wider">
            Loading Calendar...
          </p>
        </div>
      )}

      {hasError ? (
        <div className="p-8 text-center bg-white flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-sm text-[#0a0a0a] mb-4 font-medium">
            Schedule a meeting directly on Cal.com
          </p>
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            <span>Open Calendar in New Window ↗</span>
          </a>
        </div>
      ) : (
        <iframe
          src={`${calUrl}?embed=true&theme=light`}
          width="100%"
          height="100%"
          frameBorder="0"
          className="w-full border-0 block"
          style={{ height, minHeight: height }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          title="Direct Cal.com Scheduler"
        />
      )}
    </div>
  )
}
