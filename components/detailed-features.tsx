"use client"

import { useState } from "react"
import { 
  GraduationCap, Smartphone, BookOpen, Bus, 
  Home, Library, Users, BarChart3, 
  LayoutDashboard, Cloud, ShieldCheck, 
  ChevronRight, ChevronDown, CheckCircle2, ArrowUpRight
} from "lucide-react"

const featuresData = [
  {
    icon: GraduationCap,
    title: "School Admission and Fees Management",
    description: "Simplify the admission and fee collection process with VeritasCo.Tech ERP. This ensures efficient financial management and reduces manual work.",
    points: [
      "Student admissions",
      "Fee structure configuration",
      "Fee collection tracking",
      "Due balances monitoring",
      "Concessions and discounts",
      "Fee modifications",
      "Transparent communication with parents and students"
    ]
  },
  {
    icon: Smartphone,
    title: "Student App",
    description: "The VeritasCo.Tech Student App provides an interactive digital platform that helps students stay connected with their academic activities. This improves engagement and learning experience.",
    points: [
      "Digital diary for homework",
      "Performance tracking",
      "LMS access",
      "Important circular alerts",
      "Digital student ID card",
      "Improved communication between school and students"
    ]
  },
  {
    icon: BookOpen,
    title: "Academic Management & LMS",
    description: "The integrated Learning Management System helps schools structure and manage academic content efficiently to improve teaching quality and learning outcomes.",
    points: [
      "Create subjects, chapters, and topics",
      "Upload notes, videos, and study material",
      "Assign homework and assignments",
      "Conduct quizzes and tests",
      "Track student progress",
      "Analyze academic performance"
    ]
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Ensure safe and organized school transport operations with structured transport management tools. Provides better coordination between school and parents.",
    points: [
      "Bus registration management",
      "Route planning and optimization",
      "Driver information management",
      "Stop scheduling",
      "Real-time monitoring options"
    ]
  },
  {
    icon: Home,
    title: "Hostel Management",
    description: "Manage hostel facilities efficiently with structured digital tools. Ensures organized and secure hostel administration.",
    points: [
      "Room allocation system",
      "Student transfers management",
      "Hostel attendance tracking",
      "Building and room records",
      "Occupant management"
    ]
  },
  {
    icon: Library,
    title: "Library Management",
    description: "Efficiently manage the school library with smart tools to keep library resources organized and accessible.",
    points: [
      "Book issue and return tracking",
      "Book inventory management",
      "Supplier records",
      "Journal management",
      "Purchase tracking",
      "Detailed reporting"
    ]
  },
  {
    icon: Users,
    title: "Staff Management and Payroll",
    description: "Simplify HR and payroll processes using automated tools. Ensures accurate and timely payroll processing.",
    points: [
      "Staff records management",
      "Attendance tracking",
      "Leave management",
      "Payroll calculation",
      "Salary updates",
      "Promotion records"
    ]
  },
  {
    icon: BarChart3,
    title: "Advanced Reports and Analytics",
    description: "Generate detailed reports for better decision-making. Helps management make informed decisions efficiently.",
    points: [
      "Fee collection summary",
      "Pending dues",
      "Financial reports",
      "Staff salary reports",
      "Performance reports",
      "Operational insights"
    ]
  },
  {
    icon: LayoutDashboard,
    title: "Management Dashboard",
    description: "Access real-time insights through the management dashboard. Improves transparency and monitoring across the institution.",
    points: [
      "Fee collection trends",
      "Admission statistics",
      "Staff attendance",
      "Financial summaries",
      "Overall school performance"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud-Based School Management",
    description: "Cloud-based platform designed to simplify and automate operations, helping institutions operate efficiently with modern technology.",
    points: [
      "Administrative workflows",
      "Academic management",
      "Communication processes",
      "Digital data storage",
      "Centralized control"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Reliable and Scalable Solution",
    description: "Designed to support long-term institutional growth by providing the tools needed to adapt to modern digital requirements effectively.",
    points: [
      "Reliable performance",
      "Scalable architecture",
      "Structured workflows",
      "Improved productivity",
      "Data-driven decision making"
    ]
  }
]

export function DetailedFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = featuresData[activeIndex]
  const ActiveIcon = activeFeature.icon

  return (
    <section id="features" className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[rgba(10,10,10,0.08)] pb-8">
        <div>
          <div className="label-mono mb-3 text-[#737373]">( 11 Native Modules )</div>
          <h2 className="heading-style-h2 text-[#0a0a0a] tracking-tight">
            VeritasCo.Tech ERP Features
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#737373] max-w-xl font-normal leading-relaxed">
          A comprehensive suite of digital tools designed to transform and simplify every aspect of school operations.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Module Navigation */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-[rgba(10,10,10,0.06)] border border-[rgba(10,10,10,0.08)] rounded-2xl bg-[#ffffff] p-2 overflow-hidden shadow-sm">
          {featuresData.map((feature, index) => {
            const isActive = activeIndex === index
            const Icon = feature.icon
            const idxStr = (index + 1).toString().padStart(2, "0")

            return (
              <div key={index} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center justify-between w-full text-left p-3.5 md:p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#0a0a0a] text-[#f5f4f0] shadow-md"
                      : "text-[#161616] hover:bg-[#f5f4f0]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className={`label-mono text-[11px] shrink-0 ${isActive ? "text-[#a3a3a3]" : "text-[#737373]"}`}>
                      {idxStr}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-white/10 text-white" : "bg-[#f5f4f0] text-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs md:text-sm font-medium truncate">
                      {feature.title}
                    </span>
                  </div>
                  
                  <div className="shrink-0 ml-2">
                    <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 text-white" : "text-[#a3a3a3] opacity-0 group-hover:opacity-100"
                    }`} />
                    <ChevronDown className={`lg:hidden w-4 h-4 transition-transform duration-300 ${
                      isActive ? "rotate-180 text-white" : "text-[#737373]"
                    }`} />
                  </div>
                </button>

                {/* Mobile Accordion Drawer */}
                <div 
                  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-[800px] opacity-100 p-4 border-t border-[rgba(10,10,10,0.06)] bg-[#faf9f5]" : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-xs md:text-sm text-[#737373] leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.points.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-xs text-[#0a0a0a]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0a0a0a] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column: Detailed Sticky Showcase Panel */}
        <div className="hidden lg:block lg:col-span-7 sticky top-28">
          <div 
            key={activeIndex}
            className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 lg:p-12 shadow-sm animate-in fade-in duration-300"
          >
            {/* Top Meta Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[rgba(10,10,10,0.08)]">
              <div className="flex items-center gap-3">
                <span className="label-mono text-[11px] text-[#737373]">
                  MODULE {(activeIndex + 1).toString().padStart(2, "0")} / 11
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#161616]" />
                <span className="label-mono text-[11px] text-[#161616]">ACTIVE ARCHITECTURE</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[rgba(10,10,10,0.1)] flex items-center justify-center bg-[#faf9f5]">
                <ActiveIcon className="w-5 h-5 text-[#0a0a0a]" />
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="heading-style-h3 text-[#0a0a0a] tracking-tight mb-4">
              {activeFeature.title}
            </h3>
            <p className="text-base text-[#737373] font-normal leading-relaxed mb-10 max-w-2xl">
              {activeFeature.description}
            </p>

            {/* Feature Points Grid */}
            <div className="label-mono text-[11px] text-[#737373] uppercase tracking-wider mb-4">
              Core Capabilities & Workflows
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activeFeature.points.map((point, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-[rgba(10,10,10,0.06)] bg-[#faf9f5] hover:border-[rgba(10,10,10,0.15)] transition-all duration-200"
                >
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs md:text-sm text-[#0a0a0a] font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="mt-10 pt-6 border-t border-[rgba(10,10,10,0.06)] flex items-center justify-between text-xs text-[#737373]">
              <span className="label-mono text-[10px]">VERITASCO ENTERPRISE ENGINE</span>
              <span className="label-mono text-[10px]">INTEGRATED BIOMETRIC & CLOUD SYNC</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
