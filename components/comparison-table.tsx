"use client"

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Attendance Marking Time",
      manual: "15-20 minutes per class",
      veritasco: "< 2 minutes per class (in-hand device)",
    },
    {
      feature: "Accuracy Rate",
      manual: "85-90% (proxy marking common)",
      veritasco: "99.9% (biometric fingerprint verification)",
    },
    {
      feature: "Parent Notifications",
      manual: "Manual calls/SMS (hours delayed)",
      veritasco: "Instant automated alerts (under 5 seconds)",
    },
    {
      feature: "Data Security",
      manual: "Paper registers (vulnerable to loss/damage)",
      veritasco: "Bank-grade 256-bit encrypted cloud storage",
    },
    {
      feature: "Report Generation",
      manual: "Hours of tedious manual compilation",
      veritasco: "Instant 1-click automated analytical reports",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-black/10">
        <thead>
          <tr className="bg-[#0a0a0a] text-white">
            <th className="py-4 px-6 font-mono text-xs uppercase tracking-[0.14em] font-medium border-r border-white/10">
              Operational Metric
            </th>
            <th className="py-4 px-6 font-mono text-xs uppercase tracking-[0.14em] font-medium text-white/50 border-r border-white/10">
              Manual Paper Registers
            </th>
            <th className="py-4 px-6 font-mono text-xs uppercase tracking-[0.14em] font-medium text-emerald-400">
              VeritasCo Biometric ERP
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr key={index} className="border-b border-black/10 hover:bg-black/[0.02] transition-colors">
              <td className="py-5 px-6 font-display font-medium text-[#0a0a0a] border-r border-black/10 text-base">
                {item.feature}
              </td>
              <td className="py-5 px-6 text-sm text-[#0a0a0a]/60 font-body border-r border-black/10">
                {item.manual}
              </td>
              <td className="py-5 px-6 text-sm text-[#0a0a0a] font-medium font-body bg-emerald-500/[0.04]">
                {item.veritasco}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
