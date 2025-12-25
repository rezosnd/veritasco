import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { withAuth } from "@/lib/auth-middleware"

async function handler(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("veritasco")

    const bookings = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(bookings)
  } catch (error) {
    console.error("[v0] Admin bookings API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    )
  }
}

export const GET = withAuth(handler)