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
    >
      {/* Full Feature Explorer */}
      <DetailedFeatures />

      {/* Role-Based Access Table */}
      <ScrollReveal>
        <section id="role-access" className="container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">By Role</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Role-Based Feature Access</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every user — admin, teacher, parent, and student — gets the right tools for their role.
            </p>
          </div>
          <FeatureTable />
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
