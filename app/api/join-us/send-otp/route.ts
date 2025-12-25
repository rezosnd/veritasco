import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStore } from '@/lib/otp-store';
import { otpRateLimit } from '@/lib/rate-limit';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    const rateLimitResult = otpRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Too many OTP requests. Please try again later.',
          resetTime: rateLimitResult.resetTime
        },
        { status: 429 }
      );
    }

    const { email } = await request.json();

    const trimmedEmail = email.trim().toLowerCase(); // Trim and normalize email

    if (!trimmedEmail) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP with 10-minute expiration
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
    otpStore.set(trimmedEmail, { otp, expiresAt });

    // Send OTP email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: trimmedEmail,
      subject: 'Veritasco - Your OTP Code',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Veritasco OTP</title>
          <style>
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .fade-in-up {
              animation: fadeInUp 0.6s ease-out;
            }
            .pulse {
              animation: pulse 2s infinite;
            }
            .slide-in {
              animation: slideIn 0.8s ease-out;
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #A3C2D1 0%, #5A689F 50%, #3E467A 100%); min-height: 100vh; padding: 20px;">
          <div style="max-width: 480px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(62, 70, 122, 0.2); animation: fadeInUp 0.8s ease-out;">
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #3E467A 0%, #5A689F 100%); padding: 30px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 30% 20%, rgba(163, 194, 209, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(163, 194, 209, 0.1) 0%, transparent 50%);"></div>
              <img src="https://i.ibb.co/20kBDJM1/logo.png" alt="Veritasco Logo" style="max-width: 140px; height: auto; animation: slideIn 0.8s ease-out; position: relative; z-index: 1;">
              <div style="margin-top: 15px; animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div style="width: 40px; height: 3px; background: linear-gradient(90deg, #A3C2D1, #5A689F); border-radius: 2px; margin: 0 auto 10px auto;"></div>
                <p style="color: #A3C2D1; margin: 0; font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">Secure Verification</p>
              </div>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px; text-align: center; background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);">
              <h2 style="color: #3E467A; margin: 0 0 8px 0; font-size: 24px; font-weight: 700; animation: fadeInUp 0.8s ease-out 0.3s both;">Verify Your Email</h2>
              <p style="color: #5A689F; font-size: 16px; line-height: 1.6; margin: 0 0 35px 0; animation: fadeInUp 0.8s ease-out 0.4s both;">
                Welcome to Veritasco! Please use the verification code below to complete your job application.
              </p>

              <!-- OTP Display -->
              <div style="background: linear-gradient(135deg, #A3C2D1 0%, #5A689F 50%, #3E467A 100%); padding: 30px 20px; border-radius: 16px; margin: 25px 0; box-shadow: 0 8px 25px rgba(62, 70, 122, 0.15); position: relative; overflow: hidden; animation: fadeInUp 0.8s ease-out 0.5s both;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);"></div>
                <div style="font-size: 12px; color: #A3C2D1; margin-bottom: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; position: relative; z-index: 1;">Your Verification Code</div>
                <div style="font-size: 36px; font-weight: 800; color: #FFFFFF; letter-spacing: 6px; font-family: 'Courier New', monospace; text-shadow: 0 2px 4px rgba(0,0,0,0.1); animation: pulse 2s infinite; position: relative; z-index: 1;">${otp}</div>
              </div>

              <!-- Info Section -->
              <div style="background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%); padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #A3C2D1; animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                  <div style="width: 8px; height: 8px; background: linear-gradient(45deg, #3E467A, #5A689F); border-radius: 50%; margin-right: 10px; animation: pulse 3s infinite;"></div>
                  <span style="color: #3E467A; font-weight: 700; font-size: 14px;">Valid for 10 minutes</span>
                </div>
                <p style="color: #5A689F; font-size: 13px; line-height: 1.5; margin: 0;">
                  For security reasons, this code will expire in 10 minutes. If you didn't request this verification, please ignore this email.
                </p>
              </div>

              <!-- Footer -->
              <div style="border-top: 2px solid #A3C2D1; padding-top: 20px; margin-top: 30px; animation: fadeInUp 0.8s ease-out 0.7s both;">
                <p style="color: #5A689F; font-size: 14px; margin: 0; font-weight: 500;">
                  Best regards,<br>
                  <span style="color: #3E467A; font-weight: 700;">The Veritasco Team</span>
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom decoration -->
          <div style="text-align: center; margin-top: 20px; animation: fadeInUp 0.8s ease-out 0.8s both;">
            <div style="display: inline-block; width: 60px; height: 4px; background: linear-gradient(90deg, #A3C2D1, #5A689F, #3E467A); border-radius: 2px;"></div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'OTP sent successfully',
      email: email
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}