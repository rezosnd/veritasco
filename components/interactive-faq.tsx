"use client"

import { useState, useEffect } from "react"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: FAQItem[] = [
  {
    question: "How accurate is the biometric fingerprint system?",
    answer: "Our system boasts a 99.9% accuracy rate with advanced fingerprint recognition technology. It can identify students in under 2 seconds with zero false positives, ensuring reliable attendance tracking even in challenging conditions.",
  },
  {
    question: "Is the data secure and compliant with privacy regulations?",
    answer: "Absolutely. We use bank-grade 256-bit SSL encryption for all data transmission and storage. Our system is fully compliant with GDPR, ISO 27001, and other data protection regulations. Student biometric data is encrypted and never shared with third parties.",
  },
  {
    question: "What happens if the internet connection is lost?",
    answer: "The biometric device has offline storage capability for up to 10,000 attendance records. Attendance marking continues uninterrupted, and data automatically syncs once the connection is restored. You'll receive a notification when sync is complete.",
  },
  {
    question: "How long does installation and setup take?",
    answer: "Complete installation and staff training typically takes 2-3 days. We provide comprehensive onboarding, including hardware setup, software configuration, staff training, and 24/7 support to ensure smooth implementation.",
  },
  {
    question: "Can parents access attendance records in real-time?",
    answer: "Yes! Parents receive instant SMS notifications when students arrive or leave school. They can also access detailed attendance history, reports, and analytics through our secure mobile app and web portal with personalized login credentials.",
  },
  {
    question: "What is included in the free 1-month demo?",
    answer: "The demo includes full hardware installation, complete ERP access for all modules, staff training, real-time data sync, parent notification setup, and 24/7 technical support. No credit card required and absolutely no obligations.",
  },
  {
    question: "How does the fee management system work?",
    answer: "Our integrated fee management system handles fee collection, automated reminders, online payment gateway integration, receipt generation, and comprehensive financial reporting. Parents can pay fees online, and you get real-time payment notifications.",
  },
  {
    question: "Can the system handle multiple campuses or branches?",
    answer: "Yes! Our cloud-based system supports unlimited campuses with centralized management. You can track attendance, fees, and academics across all locations from a single dashboard with role-based access control for different branches.",
  },
  {
    question: "What kind of reports and analytics are available?",
    answer: "We provide comprehensive reports including attendance analytics, fee collection reports, academic performance tracking, student behavior patterns, parent engagement metrics, and custom reports. All data can be exported in multiple formats.",
  },
  {
    question: "How does the emergency notification system work?",
    answer: "In case of emergencies, administrators can send instant notifications to all parents via SMS and app. The system also automatically alerts parents if a student is absent without prior notice, enhancing student safety and security.",
  },
  {
    question: "Is training provided for teachers and staff?",
    answer: "Yes! We provide comprehensive training including online tutorials, live training sessions, detailed documentation, and ongoing support. New staff members can quickly get up to speed with our intuitive interface and 24/7 help desk.",
  },
  {
    question: "What are the system requirements for the school?",
    answer: "Minimal requirements: stable internet connection, power backup for devices, and smartphones/tablets for staff. Our cloud-based system works on any device with a web browser. Hardware devices are plug-and-play with minimal setup.",
  }
]

export function InteractiveFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Reduce animation duration on mobile for better performance
  const animationDuration = isMobile ? '300ms' : '500ms'

  return (
    <div className="max-w-4xl mx-auto">
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="group relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />

            {/* Main FAQ Card */}
            <div className="relative soft-shadow-inset bg-background/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 md:p-6 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl md:rounded-2xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-sm md:text-base leading-relaxed pr-8">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index ? 'rotate-180 bg-primary/20' : 'hover:bg-primary/15'
                  }`}>
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-primary transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Section */}
              <div className={`overflow-hidden transition-all ease-in-out ${
                activeIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
              style={{
                transitionDuration: animationDuration
              }}>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="border-t border-border/30 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl md:rounded-2xl border border-border/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{faqData.length}+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Questions Answered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Support Available</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Schools Served</div>
          </div>
        </div>
      </div>
    </div>
  )
}