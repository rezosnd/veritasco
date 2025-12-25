import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { withAuth } from "@/lib/auth-middleware"

async function handler(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("veritasco")

    const applications = await db
      .collection("applications")
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(applications)
  } catch (error) {
    console.error("[v0] Admin applications API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    )
  }
}

export const GET = withAuth(handler)