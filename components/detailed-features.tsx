"use client"

import { useState } from "react"
import { 
  GraduationCap, Smartphone, BookOpen, Bus, 
  Home, Library, Users, BarChart3, 
  LayoutDashboard, Cloud, ShieldCheck, 
  ChevronRight, ChevronDown, CheckCircle2
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

  return (
    <section id="features" className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
          VeritasCo.Tech ERP Features
        </h2>
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          A comprehensive suite of digital tools designed to transform and simplify every aspect of school operations.
        </p>
      </div>

      <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-4 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-10 border border-border/50">
        
        {/* Left Column: Feature Navigation (Desktop: Sidebar, Mobile: Accordion stack base) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2">
          {featuresData.map((feature, index) => {
            const isActive = activeIndex === index;
            const Icon = feature.icon;

            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center text-left gap-3 px-4 py-3 md:py-4 rounded-xl transition-all duration-200 border ${
                    isActive
                      ? "bg-primary/10 border-primary/20 text-primary font-semibold soft-shadow-inset"
                      : "bg-background/50 border-transparent text-foreground hover:bg-background hover:border-border/50"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? "bg-primary/20 text-primary" : "bg-card text-muted-foreground"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-medium">{feature.title}</span>
                  
                  {/* Arrow indicating active state on desktop, or down angle on mobile */}
                  <ChevronRight className={`hidden lg:block w-4 h-4 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`} />
                  <ChevronDown className={`lg:hidden w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`} />
                </button>

                {/* Mobile Content Display (Inline Accordion) */}
                <div 
                  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-[1000px] opacity-100 mt-2 mb-4" : "max-h-0 opacity-0 m-0"
                  }`}
                >
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5 soft-shadow-inset">
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.points.map((point, ptIdx) => (
                        <div key={ptIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Desktop Content */}
        <div className="hidden lg:flex w-full lg:w-2/3">
          <div className="w-full bg-gradient-to-br from-background to-card rounded-2xl p-8 lg:p-12 border border-border/40 soft-shadow-inset flex flex-col animate-in fade-in zoom-in-95 duration-500" key={activeIndex}>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 soft-shadow">
                {(() => {
                  const ActiveIcon = featuresData[activeIndex].icon;
                  return <ActiveIcon className="w-8 h-8" />
                })()}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                {featuresData[activeIndex].title}
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {featuresData[activeIndex].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
              {featuresData[activeIndex].points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-background border border-transparent hover:border-border/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-base text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
