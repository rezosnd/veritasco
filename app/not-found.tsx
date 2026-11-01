import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VantraButton } from "@/components/vantra-button"

export default function NotFound() {
  return (
    <PageWrapper
      badge="404 — Status Error"
      title="Page Not Found"
      description="The page you are looking for doesn't exist or has been moved to a different coordinate."
      breadcrumb={[{ label: "404 Error", href: "#" }]}
      bgImage="/hero-bg.png"
    >
      <section className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <ScrollReveal>
          <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-10 md:p-20 shadow-sm flex flex-col items-center max-w-2xl mx-auto">
            <span className="label-mono text-xs text-[#737373] mb-4">
              ERROR CODE [ 404 ]
            </span>
            
            <div className="heading-style-h0 text-[#0a0a0a] leading-none mb-6 font-semibold tracking-tighter">
              404
            </div>

            <h2 className="heading-style-h3 text-[#0a0a0a] tracking-tight mb-4">
              Lost in the cloud?
            </h2>

            <p className="text-sm md:text-base text-[#737373] leading-relaxed max-w-md mb-10 font-normal">
              It seems we can't find the page you're looking for. It might have been removed, renamed, or temporarily unavailable.
            </p>

            <div className="flex items-center justify-center">
              <VantraButton href="/" variant="dark">
                Return to Homepage
              </VantraButton>
            </div>

            <div className="mt-12 pt-6 border-t border-[rgba(10,10,10,0.06)] w-full flex items-center justify-between text-[11px] label-mono text-[#a3a3a3]">
              <span>VERITASCO CLOUD NETWORK</span>
              <span>ORIGIN VERIFIED</span>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </PageWrapper>
  )
}
