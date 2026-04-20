import Image from "next/image"

/**
 * Next.js App Router loading UI.
 * Shown while page segments are streaming on initial or slow loads.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">

        {/* Layered animated rings + logo */}
        <div className="relative flex items-center justify-center">
          {/* Outer slow ring */}
          <div
            className="absolute w-24 h-24 rounded-full border-2 border-primary/10"
            style={{ animation: "loaderRingOuter 2.4s ease-in-out infinite" }}
          />
          {/* Middle ring */}
          <div
            className="absolute w-16 h-16 rounded-full border border-primary/20"
            style={{ animation: "loaderRingMid 1.8s ease-in-out infinite reverse" }}
          />
          {/* Inner glow */}
          <div
            className="absolute w-12 h-12 rounded-full bg-primary/8"
            style={{ animation: "loaderPulseInner 1.4s ease-in-out infinite" }}
          />
          {/* Logo — sits on top */}
          <Image
            src="/logo.avif"
            alt="VeritasCo"
            width={44}
            height={44}
            priority
            quality={90}
            className="relative z-10 drop-shadow-sm"
          />
        </div>

        {/* Brand name with fade */}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-sm font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            style={{ animation: "loaderFadeText 1.8s ease-in-out infinite" }}
          >
            VeritasCo
          </span>
          <span className="text-[10px] text-muted-foreground/60 tracking-widest uppercase">
            Loading…
          </span>
        </div>

        {/* Three-dot bouncing dots */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary"
              style={{
                animation: `loaderDot 1.2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Inline keyframes injected via a style tag — no external deps */}
      <style>{`
        @keyframes loaderRingOuter {
          0%,100% { transform: scale(1);   opacity: 0.4; }
          50%      { transform: scale(1.15); opacity: 0.8; }
        }
        @keyframes loaderRingMid {
          0%,100% { transform: scale(1);    opacity: 0.3; }
          50%      { transform: scale(1.1);  opacity: 0.7; }
        }
        @keyframes loaderPulseInner {
          0%,100% { opacity: 0.3; transform: scale(0.9); }
          50%      { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes loaderFadeText {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1;   }
        }
        @keyframes loaderDot {
          0%,80%,100% { transform: translateY(0);    opacity: 0.35; }
          40%          { transform: translateY(-6px); opacity: 1;    }
        }
      `}</style>
    </div>
  )
}
