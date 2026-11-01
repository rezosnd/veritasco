"use client"

import { useState } from "react"
import { Check, Minus } from "lucide-react"

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
    <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-6 md:p-10 shadow-sm overflow-hidden">
      {/* Role Selector Tabs (Mobile & Quick Filter) */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-[rgba(10,10,10,0.08)]">
        <span className="label-mono text-xs text-[#737373] mr-2">ROLE FILTER:</span>
        {(["admin", "teacher", "student", "parent"] as const).map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded-full text-xs label-mono font-medium transition-all duration-300 ${
              activeRole === role
                ? "bg-[#0a0a0a] text-[#f5f4f0] shadow-sm"
                : "bg-[#f5f4f0] text-[#737373] hover:text-[#0a0a0a] hover:bg-[#eae8e1]"
            }`}
          >
            {role.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Features List - Mobile Optimized */}
      <div className="lg:hidden space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
        {features.map((feature, index) => {
          const hasAccess = feature[activeRole]
          return (
            <div
              key={index}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                hasAccess 
                  ? "border-[rgba(10,10,10,0.15)] bg-[#faf9f5]" 
                  : "border-[rgba(10,10,10,0.04)] bg-transparent opacity-40"
              }`}
            >
              <span className="text-xs font-medium text-[#0a0a0a]">{feature.name}</span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  hasAccess ? "bg-[#0a0a0a] text-[#f5f4f0]" : "bg-[#f0eee6] text-[#a3a3a3]"
                }`}
              >
                {hasAccess ? <Check className="w-3 h-3 stroke-[2.5]" /> : <Minus className="w-3 h-3" />}
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop Matrix Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[rgba(10,10,10,0.08)] bg-[#faf9f5]">
              <th className="py-4 px-6 label-mono text-xs text-[#737373] font-semibold uppercase">Feature / Capability</th>
              <th className="py-4 px-6 text-center label-mono text-xs text-[#737373] font-semibold uppercase">Admin</th>
              <th className="py-4 px-6 text-center label-mono text-xs text-[#737373] font-semibold uppercase">Teacher</th>
              <th className="py-4 px-6 text-center label-mono text-xs text-[#737373] font-semibold uppercase">Student</th>
              <th className="py-4 px-6 text-center label-mono text-xs text-[#737373] font-semibold uppercase">Parent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(10,10,10,0.06)] text-sm">
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className="hover:bg-[#faf9f5]/70 transition-colors"
              >
                <td className="py-3.5 px-6 font-medium text-[#0a0a0a]">
                  {feature.name}
                </td>
                
                <td className="py-3.5 px-6 text-center">
                  <div className="inline-flex items-center justify-center">
                    {feature.admin ? (
                      <div className="w-6 h-6 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <span className="text-[#a3a3a3] font-light">—</span>
                    )}
                  </div>
                </td>

                <td className="py-3.5 px-6 text-center">
                  <div className="inline-flex items-center justify-center">
                    {feature.teacher ? (
                      <div className="w-6 h-6 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <span className="text-[#a3a3a3] font-light">—</span>
                    )}
                  </div>
                </td>

                <td className="py-3.5 px-6 text-center">
                  <div className="inline-flex items-center justify-center">
                    {feature.student ? (
                      <div className="w-6 h-6 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <span className="text-[#a3a3a3] font-light">—</span>
                    )}
                  </div>
                </td>

                <td className="py-3.5 px-6 text-center">
                  <div className="inline-flex items-center justify-center">
                    {feature.parent ? (
                      <div className="w-6 h-6 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <span className="text-[#a3a3a3] font-light">—</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
