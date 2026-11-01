import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { VantraButton } from "@/components/vantra-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Testimonials — What Schools Say About VeritasCo.Tech",
  description:
    "Read what 500+ schools across India say about VeritasCo.Tech — real stories from principals, administrators, and directors who transformed their school management.",
}

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    school: "Delhi Public School",
    text: "VeritasCo has transformed our attendance management completely. The real-time parent notifications have significantly improved communication and student safety across our campus.",
    rating: 5,
  },
  {
    name: "Mrs. Priya Sharma",
    role: "Administrator",
    school: "St. Mary's Convent",
    text: "The integrated ERP system is a game-changer. We've reduced administrative work by 60% and parents absolutely love the instant updates. I can't imagine going back.",
    rating: 5,
  },
  {
    name: "Mr. Amit Patel",
    role: "Director",
    school: "Modern Academy",
    text: "Exceptional support and incredibly reliable hardware. The biometric system has completely eliminated proxy attendance. Highly recommended for any serious institution.",
    rating: 5,
  },
  {
    name: "Mrs. Sunita Verma",
    role: "Principal",
    school: "Sunrise International School",
    text: "The fee management module alone saved our accounts team 20 hours every month. Everything is automated, from payment reminders to generation of receipts.",
    rating: 5,
  },
  {
    name: "Mr. Ravi Gupta",
    role: "IT Head",
    school: "Greenfield Academy",
    text: "Setup was surprisingly smooth — 6 days as promised. The support team was with us every step and continues to be available whenever we need them. 10/10 experience.",
    rating: 5,
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Correspondent",
    school: "Lotus Valley School",
    text: "Parents are much more engaged now that they receive instant alerts. Discipline has improved, late arrivals have dropped by 40%, and everyone loves the student app.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Schools Trust Us" },
  { value: "50,000+", label: "Students Tracked Daily" },
  { value: "4.9 / 5", label: "Average Rating" },
  { value: "99.9%", label: "Uptime SLA" },
]

export default function TestimonialsPage() {
  return (
    <PageWrapper
      badge="Client Stories · Verified Reviews"
      title="What educators say about VeritasCo."
      description="Real feedback from principals, directors, and administrators who replaced manual chaos with automated biometric ERP."
      breadcrumb={[{ label: "Testimonials", href: "/testimonials" }]}
      bgImage="/testimonials_bg.png"
      darkHero
    >
      {/* ══ 1. SCORE & STATS BANNER ══ */}
      <section className="section-dark padding-section py-16">
        <div className="padding-global">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="p-8 md:p-10 border-r border-b border-white/10">
                  <div className="heading-style-h2 text-white mb-2">
                    {s.value}
                  </div>
                  <div className="label-mono is-light text-[10px]">
                    ( {s.label} )
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. TESTIMONIALS GRID (Vantra Style Cards) ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-[#0a0a0a]">
                  Feedback from
                  <br />
                  the field.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Verified Schools )</div>
                <div className="section_meta-text">Principals &amp; Administrators across India</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-8 md:p-10 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-amber-500 font-mono text-xs">
                        {"★".repeat(t.rating)}
                      </div>
                      <span className="label-mono text-[10px] text-black/40">
                        ( 0{idx + 1} )
                      </span>
                    </div>

                    <p className="text-base text-[#0a0a0a]/80 leading-relaxed font-normal mb-8">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-black/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-display font-semibold text-xs text-[#0a0a0a]">
                      {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base text-[#0a0a0a]">{t.name}</h4>
                      <p className="font-mono text-xs text-black/50">{t.role} · {t.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. CTA ══ */}
      <section className="section-dark padding-section text-center">
        <div className="padding-global">
          <div className="container-max max-w-2xl mx-auto">
            <div className="label-mono is-light mb-4">Join 500+ Institutions</div>
            <h2 className="heading-style-h1 text-white mb-6">
              Ready to upgrade your school?
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              Schedule a free 1-month live pilot at your campus. We handle all setup and staff training.
            </p>
            <div className="flex justify-center">
              <VantraButton href="/contact" variant="light">
                Book a Free Campus Demo
              </VantraButton>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
