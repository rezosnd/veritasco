import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { schoolName, contactPerson, email, phone, studentCount, message } = body

    try {
      await prisma.booking.create({
        data: {
          schoolName,
          contactPerson,
          email,
          phone,
          studentCount: Number(studentCount) || 0,
          message: message || '',
          status: 'pending',
        },
      })
      console.log("[prisma/neon] Booking saved:", { schoolName, contactPerson, email })
    } catch (dbError) {
      console.error("[prisma/neon] DB error:", dbError)
    }

    return NextResponse.json({ success: true, message: "Booking request received successfully" }, { status: 200 })
  } catch (error) {
    console.error("[prisma/neon] Booking API error:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking request" }, { status: 500 })
  }
}
