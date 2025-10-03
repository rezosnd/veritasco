"use client"

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Attendance Marking Time",
      manual: "15-20 minutes per class",
      veritasco: "< 2 minutes per class",
    },
    {
      feature: "Accuracy Rate",
      manual: "85-90% (proxy marking common)",
      veritasco: "99.9% (biometric verification)",
    },
    {
      feature: "Parent Notifications",
      manual: "Manual calls/SMS (delayed)",
      veritasco: "Instant automated alerts",
    },
    {
      feature: "Data Security",
      manual: "Paper records (vulnerable)",
      veritasco: "Encrypted cloud storage",
    },
    {
      feature: "Report Generation",
      manual: "Hours of manual work",
      veritasco: "Instant automated reports",
    },
  ]

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 text-foreground font-bold">Feature</th>
            <th className="text-left py-4 px-4 text-muted-foreground font-semibold">Manual Attendance</th>
            <th className="text-left py-4 px-4 text-primary font-semibold">VeritasCo System</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr key={index} className="border-b border-border/50 hover:bg-background/50 transition-colors">
              <td className="py-4 px-4 font-medium text-foreground">{item.feature}</td>
              <td className="py-4 px-4 text-muted-foreground">{item.manual}</td>
              <td className="py-4 px-4 text-primary font-medium">{item.veritasco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
