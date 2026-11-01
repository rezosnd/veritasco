import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { DetailedFeatures } from "@/components/detailed-features"
import { FeatureTable } from "@/components/feature-table"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "ERP Features — Complete School Management Suite",
  description:
    "Explore all 11 modules of VeritasCo.Tech ERP: admissions, fees, student app, academic LMS, transport, hostel, library, staff payroll, analytics, dashboard, and cloud management.",
}

export default function FeaturesPage() {
  return (
    <PageWrapper
      badge="11 Powerful Modules"
      title="Complete School ERP — Every Feature You Need"
      description="A unified digital platform that transforms every aspect of your school's operations — from student admissions to advanced analytics. Built for Indian schools, designed for simplicity."
      breadcrumb={[{ label: "ERP Overview", href: "/erp" }, { label: "Features", href: "/erp/features" }]}
      bgImage="/hero-bg.png"
    >
      {/* Full Feature Explorer */}
      <DetailedFeatures />

      {/* Role-Based Access Table */}
      <ScrollReveal>
        <section id="role-access" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[rgba(10,10,10,0.08)] pb-8">
            <div>
              <div className="label-mono mb-3 text-[#737373]">( Access Architecture )</div>
              <h2 className="heading-style-h2 text-[#0a0a0a] tracking-tight">
                Role-Based Feature Access
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#737373] max-w-xl font-normal leading-relaxed">
              Every user — admin, teacher, parent, and student — gets the right tools for their role with granular security boundaries.
            </p>
          </div>

          <FeatureTable />
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
