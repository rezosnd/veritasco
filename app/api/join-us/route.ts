import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { joinUsSchema } from "@/lib/validation"
import { formSubmissionRateLimit } from "@/lib/rate-limit"
import { sanitizeHtml, sanitizeFilename } from "@/lib/sanitization"

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    const rateLimitResult = formSubmissionRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Too many form submissions. Please try again later.',
          resetTime: rateLimitResult.resetTime
        },
        { status: 429 }
      );
    }
    const formData = await request.formData()

    // Extract and validate form data
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

    // Log received data for debugging
    console.log('[v0] Received form data:', {
      ...rawData,
      skills: rawData.skills.substring(0, 50) + '...', // Truncate for logging
      whyInterested: rawData.whyInterested.substring(0, 50) + '...',
      pastExperience: rawData.pastExperience.substring(0, 50) + '...',
    })

    // Validate and parse yearsOfExperience
    const yearsOfExperience = Number.parseInt(rawData.yearsOfExperience)
    if (isNaN(yearsOfExperience) || yearsOfExperience < 0) {
      return NextResponse.json(
        { error: "Please enter a valid number for years of experience." },
        { status: 400 }
      )
    }

    // Validate input data
    const validationResult = joinUsSchema.safeParse({
      ...rawData,
      yearsOfExperience: yearsOfExperience,
    })

    if (!validationResult.success) {
      console.error("[v0] Validation failed:", validationResult.error.issues)
      return NextResponse.json(
        {
          error: "Please check your form data and try again.",
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }

    const validatedData = validationResult.data

    // Sanitize text inputs to prevent XSS
    const sanitizedData = {
      ...validatedData,
      fullName: sanitizeHtml(validatedData.fullName),
      currentCompany: validatedData.currentCompany ? sanitizeHtml(validatedData.currentCompany) : undefined,
      skills: sanitizeHtml(validatedData.skills),
      whyInterested: sanitizeHtml(validatedData.whyInterested),
      pastExperience: sanitizeHtml(validatedData.pastExperience),
    }

    let resumeData = null
    const resumeFile = formData.get('resume') as File

    // Validate file upload
    if (resumeFile && resumeFile.size > 0) {
      // Check file size (max 10MB)
      if (resumeFile.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File size too large. Maximum 10MB allowed." },
          { status: 400 }
        )
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: "Invalid file type. Only PDF, DOC, and DOCX files are allowed." },
          { status: 400 }
        )
      }

      // Convert file to base64
      const arrayBuffer = await resumeFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      resumeData = {
        filename: sanitizeFilename(resumeFile.name),
        contentType: resumeFile.type,
        data: buffer.toString('base64')
      }
    }

    try {
      const client = await clientPromise
      const db = client.db("veritasco")

      const application = {
        ...sanitizedData,
        resume: resumeData,
        status: "pending",
        createdAt: new Date(),
      }

      await db.collection("applications").insertOne(application)

      console.log("[v0] Application saved to MongoDB:", { ...application, resume: resumeData ? { filename: resumeData.filename } : null })
    } catch (dbError) {
      console.error("[v0] MongoDB error:", dbError)
      // Continue even if DB fails - log to console as fallback
      console.log("[v0] Application request (DB unavailable):", {
        fullName: sanitizedData.fullName,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        position: sanitizedData.position,
        yearsOfExperience: sanitizedData.yearsOfExperience,
        currentCompany: sanitizedData.currentCompany,
        skills: sanitizedData.skills.substring(0, 100) + '...',
        whyInterested: sanitizedData.whyInterested.substring(0, 100) + '...',
        pastExperience: sanitizedData.pastExperience.substring(0, 100) + '...',
        resumeFilename: resumeData?.filename,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Application API error:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to submit application. Please try again."

    if (error instanceof Error) {
      if (error.message.includes('connect')) {
        errorMessage = "Database connection error. Please try again in a few minutes."
      } else if (error.message.includes('validation')) {
        errorMessage = "Invalid form data. Please check your inputs and try again."
      } else if (error.message.includes('file')) {
        errorMessage = "File upload error. Please check your resume and try again."
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 },
    )
  }
}