import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
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
  { value: "99.9%", label: "Customer Satisfaction" },
]

export default function TestimonialsPage() {
  return (
    <PageWrapper
      badge="500+ Happy Schools"
      title="What Schools Say About VeritasCo.Tech"
      description="Real feedback from real schools. Principals, administrators, and directors across India share how VeritasCo.Tech has transformed their school operations."
      breadcrumb={[{ label: "Testimonials", href: "/testimonials" }]}
      bgImage="/testimonials_bg.png"
      darkHero
    >
      {/* Stats Strip — light */}
      <section className="bg-[#eeeeee] pulla-section">
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-5xl md:text-7xl font-light tracking-tighter text-[#141414] mb-2">{value}</div>
                  <p className="text-sm font-medium text-black/50 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid — dark */}
      <section className="relative bg-[#141414] pulla-section overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/testimonials_bg.png" 
            alt="Background" 
            fill 
            className="object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414]/90 to-[#141414]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-10 max-w-[1400px]">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95]">
                Stories from<br />the Field
              </h2>
              <p className="text-base text-white/40 font-light max-w-sm">
                Trusted by leading educational institutions across India.
              </p>
            </div>
          </ScrollReveal>

          {/* Infinite Marquee Section */}
          <div className="marquee-container relative overflow-hidden py-10 -mx-6 md:-mx-10 select-none">
            {/* Fade gradients on the sides - slightly narrower for better visibility */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#141414] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#141414] to-transparent z-20 pointer-events-none" />
            
            {/* The actual moving track */}
            <div className="animate-marquee flex flex-nowrap gap-8 w-max px-4">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div 
                  key={i} 
                  className="w-[350px] md:w-[550px] flex-shrink-0 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-12 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9bd4d7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div>
                    {/* Rating stars */}
                    <div className="flex gap-1.5 mb-8 relative z-10">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg key={starIdx} className={`w-4 h-4 ${starIdx < t.rating ? "text-[#9bd4d7]" : "text-white/10"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="relative z-10">
                      <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-12 whitespace-normal">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-5 pt-8 border-t border-white/5 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] font-bold text-2xl border border-white/5 group-hover:scale-105 transition-transform duration-500">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg md:text-xl">{t.name}</h4>
                      <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 font-bold">{t.role} · {t.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
