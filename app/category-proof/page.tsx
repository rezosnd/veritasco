import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Category Proof — VeritasCo.Tech",
  description: "VeritasCo is establishing the category of portable biometric attendance systems for schools.",
}

export default function CategoryProofPage() {
  return (
    <PageWrapper
      badge="Category Proof"
      title="Establishing a New Category"
      description="VeritasCo is pioneering portable biometric attendance systems for schools, addressing the limitations of traditional fixed-device solutions with a handheld, flexible approach."
      breadcrumb={[{ label: "Category Proof", href: "/category-proof" }]}
    >
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start mb-8 md:mb-12">
              <div className="space-y-4">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8 card-hover-effect border border-border/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Limitations of Traditional Solutions</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Traditional fixed-device solutions require complex wiring, lack flexibility, and often cause bottlenecks when students queue up. They struggle with connectivity drops and fail to adapt to dynamic school environments.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8 card-hover-effect border border-border/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Our Portable & Flexible Approach</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We bring attendance directly to the classroom with a handheld, portable approach. Supported by real-time cloud sync and seamless offline capability, we eliminate hardware constraints completely.
                  </p>
                </div>
              </div>
            </div>

            <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8 card-hover-effect mb-12 text-center border border-border/30">
               <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/10">
                 <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                 </svg>
               </div>
               <h2 className="text-2xl font-bold text-foreground mb-4">Current Stage & Growth Strategy</h2>
               <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                 Currently, VeritasCo is in its early stage and has not yet been widely featured in media or search platforms; however, we are actively engaging schools through demos, pilot programs, and direct outreach. We are building early awareness and preparing for upcoming launches and partnerships to strengthen visibility in this category.
               </p>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-4 text-lg font-bold text-foreground">Supporting Evidence</span>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8 card-hover-effect border border-border/30 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Media, Search & Community Association
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      View our Drive folder containing brand association evidence in this category.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8 card-hover-effect border border-border/30 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Press Mentions, SEO Rank & Social Proof
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      View our supporting documents, press mentions, and social evidence.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
