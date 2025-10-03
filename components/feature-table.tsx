"use client"

import { useState } from "react"

interface Feature {
  name: string
  admin: boolean
  teacher: boolean
  student: boolean
  parent: boolean
}

const features: Feature[] = [
  { name: "Manage Academics", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Employee", admin: true, teacher: false, student: false, parent: false },
  { name: "Manage Student", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Attendance", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Parents", admin: true, teacher: false, student: false, parent: false },
  { name: "Manage Class", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Subject", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Exam", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Student Score", admin: true, teacher: true, student: false, parent: false },
  { name: "Fee Collection Management", admin: true, teacher: false, student: false, parent: false },
  { name: "Manage Expenses", admin: true, teacher: false, student: false, parent: false },
  { name: "Hostel Management", admin: true, teacher: false, student: false, parent: false },
  { name: "Transportation Management", admin: true, teacher: false, student: false, parent: false },
  { name: "System Setting", admin: true, teacher: false, student: false, parent: false },
  { name: "Reports", admin: true, teacher: true, student: false, parent: false },
  { name: "Role Management", admin: true, teacher: false, student: false, parent: false },
  { name: "Manage Assignment", admin: true, teacher: true, student: false, parent: false },
  { name: "Manage Study Materials", admin: true, teacher: true, student: false, parent: false },
  { name: "Invoices", admin: true, teacher: false, student: false, parent: true },
  { name: "Payment History", admin: true, teacher: false, student: false, parent: true },
  { name: "View Academics", admin: true, teacher: true, student: true, parent: true },
]

export function FeatureTable() {
  const [activeRole, setActiveRole] = useState<"admin" | "teacher" | "student" | "parent">("admin")

  return (
    <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden">
      {/* Role Selector - Mobile Friendly */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
        {(["admin", "teacher", "student", "parent"] as const).map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`flex-1 min-w-[calc(50%-0.25rem)] md:min-w-0 px-4 py-3 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 ${
              activeRole === role
                ? "soft-shadow bg-gradient-to-br from-primary to-accent text-primary-foreground scale-105"
                : "soft-shadow-inset bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        ))}
      </div>

      {/* Features List - Mobile Optimized */}
      <div className="space-y-2 md:space-y-3 max-h-[400px] md:max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {features.map((feature, index) => {
          const hasAccess = feature[activeRole]
          return (
            <div
              key={index}
              className={`soft-shadow-inset rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center justify-between transition-all duration-300 ${
                hasAccess ? "bg-primary/5 border-l-4 border-primary" : "bg-background opacity-50"
              }`}
            >
              <span className="text-sm md:text-base font-medium text-foreground">{feature.name}</span>
              <div
                className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center ${
                  hasAccess ? "bg-primary soft-shadow" : "bg-muted"
                }`}
              >
                {hasAccess && (
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop Table View - Hidden on Mobile */}
      <div className="hidden lg:block mt-8 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="soft-shadow-inset bg-background">
              <th className="text-left p-4 rounded-tl-2xl text-foreground font-bold">Feature</th>
              <th className="text-center p-4 text-foreground font-bold">Admin</th>
              <th className="text-center p-4 text-foreground font-bold">Teacher</th>
              <th className="text-center p-4 text-foreground font-bold">Student</th>
              <th className="text-center p-4 rounded-tr-2xl text-foreground font-bold">Parent</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-border hover:bg-primary/5 transition-colors">
                <td className="p-4 text-foreground font-medium">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.admin && (
                    <div className="w-6 h-6 bg-primary rounded-full mx-auto flex items-center justify-center soft-shadow">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.teacher && (
                    <div className="w-6 h-6 bg-primary rounded-full mx-auto flex items-center justify-center soft-shadow">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.student && (
                    <div className="w-6 h-6 bg-primary rounded-full mx-auto flex items-center justify-center soft-shadow">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.parent && (
                    <div className="w-6 h-6 bg-primary rounded-full mx-auto flex items-center justify-center soft-shadow">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
