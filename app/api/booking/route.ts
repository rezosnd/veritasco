import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { productType, businessName, contactPerson, email, phone, location, volumeCount, message } = body

    // Save to Neon via Prisma
    await prisma.booking.create({
      data: {
        productType: productType || "erp",
        businessName,
        schoolName: productType === 'erp' ? businessName : '',
        contactPerson,
        email,
        phone,
        location: location || '',
        volumeCount: volumeCount ? String(volumeCount) : '',
        message: message || '',
        status: 'pending',
      },
    })

    console.log("[prisma/neon] Booking saved successfully:", { email, businessName })

    return NextResponse.json({ success: true, message: "Booking request received successfully" }, { status: 200 })
  } catch (error) {
    console.error("[prisma/neon] Booking API Error:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to process booking request" },
      { status: 500 }
    )
  }
}
