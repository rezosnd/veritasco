import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { schoolName, contactPerson, email, phone, studentCount, message } = body

    try {
      const client = await clientPromise
      const db = client.db("veritasco")

      const booking = {
        schoolName,
        contactPerson,
        email,
        phone,
        studentCount: Number.parseInt(studentCount),
        message,
        status: "pending",
        createdAt: new Date(),
      }

      await db.collection("bookings").insertOne(booking)

      console.log("[v0] Booking saved to MongoDB:", booking)
    } catch (dbError) {
      console.error("[v0] MongoDB error:", dbError)
      // Continue even if DB fails - log to console as fallback
      console.log("[v0] Booking request (DB unavailable):", {
        schoolName,
        contactPerson,
        email,
        phone,
        studentCount,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Booking API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process booking request",
      },
      { status: 500 },
    )
  }
}
