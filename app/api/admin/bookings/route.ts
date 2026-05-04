import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { withAuth } from "@/lib/auth-middleware"

async function handler(request: NextRequest) {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
    })

    const result = bookings.map((b) => ({
      _id: b.id.toString(),
      businessName: b.businessName,
      contactPerson: b.contactPerson,
      email: b.email,
      phone: b.phone,
      volumeCount: b.volumeCount,
      message: b.message,
      status: b.status,
      createdAt: b.createdAt,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error("[prisma/neon] Admin bookings error:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

export const GET = withAuth(handler)