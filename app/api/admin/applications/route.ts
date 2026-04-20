import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { withAuth } from "@/lib/auth-middleware"

async function handler(request: NextRequest) {
  try {
    const applications = await prisma.application.findMany({
      orderBy: { createdAt: 'desc' },
    })

    // Map to admin-compatible shape
    const result = applications.map(a => ({
      _id: a.id.toString(),
      fullName: a.fullName,
      email: a.email,
      phone: a.phone,
      position: a.position,
      yearsOfExperience: a.yearsOfExperience,
      currentCompany: a.currentCompany,
      skills: a.skills,
      whyInterested: a.whyInterested,
      pastExperience: a.pastExperience,
      resumeFilename: a.resumeFilename,
      resumeContentType: a.resumeContentType,
      resume: a.resumeData ? {
        filename: a.resumeFilename,
        contentType: a.resumeContentType,
        data: a.resumeData,
      } : null,
      status: a.status,
      createdAt: a.createdAt,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error("[prisma/neon] Admin applications error:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}

export const GET = withAuth(handler)