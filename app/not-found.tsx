import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <PageWrapper
      badge="404 — Not Found"
      title="Page Not Found"
      description="The page you are looking for doesn't exist or has been moved."
      breadcrumb={[{ label: "404 Error", href: "#" }]}
      bgImage="/hero-bg.png"
    >
      <section className="section-dark pulla-section relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(93,109,142,0.15) 0%, #2d3a52 100%)" }} />
        
        <div className="container mx-auto px-8 md:px-14 max-w-[800px] relative z-10">
          <ScrollReveal>
            <h1 
              style={{ 
                fontFamily: "var(--font-display)", 
                fontSize: "clamp(60px, 15vw, 180px)", 
                fontWeight: 500, 
                color: "rgba(255,255,255,0.05)",
                lineHeight: 1,
                marginBottom: "-20px"
              }}
            >
              404
            </h1>
            <h2 className="pulla-section-title text-white mb-6">Lost in the cloud?</h2>
            <p className="font-light mb-12 max-w-lg mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
              It seems we can't find the page you're looking for. It might have been removed, renamed, or temporarily unavailable.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <TransitionLink href="/" className="pulla-btn pulla-btn-outline-white flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </TransitionLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
