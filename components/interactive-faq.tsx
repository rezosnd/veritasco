"use client"

import { useState } from "react"

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
    answer: "Complete installation and staff training typically takes 2-3 days (full campus live within 6 days). We provide comprehensive onboarding, including hardware setup, software configuration, staff training, and 24/7 support to ensure smooth implementation.",
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
  },
]

export function InteractiveFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="w-full">
      {/* Vantra Hairline Accordion List */}
      <div className="faq_list">
        {faqData.map((faq, index) => {
          const isOpen = openIdx === index
          return (
            <div
              key={index}
              className={`faq_row ${isOpen ? "is-open" : ""}`}
              onClick={() => setOpenIdx(isOpen ? null : index)}
            >
              <div className="faq_row-head">
                <h3 className="faq_question text-lg md:text-xl font-display font-medium text-[#0a0a0a]">
                  {faq.question}
                </h3>
                <div className="faq_icon">
                  <div className="faq_icon-h" />
                  <div className="faq_icon-v" />
                </div>
              </div>
              <div className="faq_answer">
                <p className="faq_answer-text text-sm md:text-base leading-relaxed text-[#0a0a0a]/70">
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stats Bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/10">
        <div className="p-6 md:p-8 border-r border-b border-black/10">
          <div className="heading-style-h3 text-[#0a0a0a] mb-1">{faqData.length}+</div>
          <div className="label-mono text-[10px] text-black/50">( Questions Answered )</div>
        </div>
        <div className="p-6 md:p-8 border-r border-b border-black/10">
          <div className="heading-style-h3 text-[#0a0a0a] mb-1">24/7</div>
          <div className="label-mono text-[10px] text-black/50">( Support Desk )</div>
        </div>
        <div className="p-6 md:p-8 border-r border-b border-black/10">
          <div className="heading-style-h3 text-[#0a0a0a] mb-1">99.9%</div>
          <div className="label-mono text-[10px] text-black/50">( Scan Accuracy )</div>
        </div>
        <div className="p-6 md:p-8 border-r border-b border-black/10">
          <div className="heading-style-h3 text-[#0a0a0a] mb-1">500+</div>
          <div className="label-mono text-[10px] text-black/50">( Active Schools )</div>
        </div>
      </div>
    </div>
  )
}
