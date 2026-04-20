import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { joinUsSchema } from "@/lib/validation"
import { formSubmissionRateLimit } from "@/lib/rate-limit"
import { sanitizeHtml, sanitizeFilename } from "@/lib/sanitization"

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    const rateLimitResult = formSubmissionRateLimit(ip)
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many form submissions. Please try again later.', resetTime: rateLimitResult.resetTime },
        { status: 429 }
      )
    }

    const formData = await request.formData()

    const rawData = {
      fullName: formData.get('fullName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      position: formData.get('position')?.toString() || '',
      yearsOfExperience: formData.get('yearsOfExperience')?.toString() || '',
      currentCompany: formData.get('currentCompany')?.toString() || '',
      skills: formData.get('skills')?.toString() || '',
      whyInterested: formData.get('whyInterested')?.toString() || '',
      pastExperience: formData.get('pastExperience')?.toString() || '',
    }

    const yearsOfExperience = Number.parseInt(rawData.yearsOfExperience)
    if (isNaN(yearsOfExperience) || yearsOfExperience < 0) {
      return NextResponse.json({ error: "Please enter a valid number for years of experience." }, { status: 400 })
    }

    const validationResult = joinUsSchema.safeParse({ ...rawData, yearsOfExperience })
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Please check your form data.", details: validationResult.error.issues.map(i => ({ field: i.path.join('.'), message: i.message })) },
        { status: 400 }
      )
    }

    const v = validationResult.data
    const sanitized = {
      ...v,
      fullName: sanitizeHtml(v.fullName),
      currentCompany: v.currentCompany ? sanitizeHtml(v.currentCompany) : null,
      skills: sanitizeHtml(v.skills),
      whyInterested: sanitizeHtml(v.whyInterested),
      pastExperience: sanitizeHtml(v.pastExperience),
    }

    let resumeFilename: string | null = null
    let resumeContentType: string | null = null
    let resumeData: string | null = null

    const resumeFile = formData.get('resume') as File
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "File size too large. Maximum 10MB allowed." }, { status: 400 })
      }
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json({ error: "Invalid file type. Only PDF, DOC, and DOCX files are allowed." }, { status: 400 })
      }
      const arrayBuffer = await resumeFile.arrayBuffer()
      resumeFilename = sanitizeFilename(resumeFile.name)
      resumeContentType = resumeFile.type
      resumeData = Buffer.from(arrayBuffer).toString('base64')
    }

    try {
      await prisma.application.create({
        data: {
          fullName: sanitized.fullName,
          email: sanitized.email,
          phone: sanitized.phone,
          position: sanitized.position,
          yearsOfExperience: sanitized.yearsOfExperience,
          currentCompany: sanitized.currentCompany,
          skills: sanitized.skills,
          whyInterested: sanitized.whyInterested,
          pastExperience: sanitized.pastExperience,
          resumeFilename,
          resumeContentType,
          resumeData,
          status: 'pending',
        },
      })
      console.log("[prisma/neon] Application saved:", { name: sanitized.fullName, email: sanitized.email })
    } catch (dbError) {
      console.error("[prisma/neon] DB error:", dbError)
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[prisma/neon] Application API error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit application. Please try again." }, { status: 500 })
  }
}