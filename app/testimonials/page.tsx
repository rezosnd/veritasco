import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

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
    >
      {/* Stats Strip */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-10">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-primary-foreground">
              {stats.map(({ value, label }) => (
                <div key={label} className="space-y-1">
                  <div className="text-2xl md:text-4xl font-bold">{value}</div>
                  <div className="text-xs md:text-base opacity-90">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Grid */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Stories from the Field</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading educational institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="soft-shadow bg-card rounded-2xl p-6 md:p-8 card-hover-effect border border-border/30 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">{t.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{t.role}, {t.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
