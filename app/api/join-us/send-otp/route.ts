import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStore } from '@/lib/otp-store';
import { otpRateLimit } from '@/lib/rate-limit';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting & Security
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const rateLimitResult = otpRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many OTP requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Data Processing
    const { email } = await request.json();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 3. OTP Generation & Storage
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    try {
      await otpStore.set(trimmedEmail, { otp, expiresAt });
    } catch (error) {
      console.error('Failed to store OTP:', error);
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // 4. Professional "Ice-Cold" Email Template
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: trimmedEmail,
      subject: '❄️ VeritasCo - Your Secure Access Code',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>VeritasCo Festive OTP</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #3E467A; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background: linear-gradient(180deg, #3E467A 0%, #5A689F 100%); padding: 50px 10px;">
            <tr>
              <td align="center">
                <div style="max-width: 500px; background-color: #FFFFFF; border-radius: 28px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.3); border: 1px solid #A3C2D1;">
                  
                  <div style="background: linear-gradient(135deg, #5A689F 0%, #3E467A 100%); padding: 50px 20px; text-align: center; position: relative;">
                    
                    <img src="https://iili.io/fME9TZX.png" alt="Veritasco Logo" style="max-width: 140px; position: relative; z-index: 5;">
                    
                    <h1 style="color: #FFFFFF; font-size: 24px; margin: 25px 0 0 0; letter-spacing: 2px; font-weight: 300; text-transform: uppercase;">
                      Happy <span style="font-weight: 800; color: #A3C2D1;">2026</span>
                    </h1>
                  </div>

                  <div style="padding: 45px 35px; text-align: center; background-color: #FFFFFF;">
                    <h2 style="color: #3E467A; font-size: 24px; font-weight: 800; margin: 0 0 10px 0;">Verify Your Email</h2>
                    <p style="color: #5A689F; line-height: 1.6; font-size: 16px; margin: 0 0 35px 0;">
                      Welcome to the holiday season at VeritasCo. Please use the secure access code below to complete your verification.
                    </p>

                    <div style="background-color: #A3C2D1; padding: 40px 20px; border-radius: 24px; margin: 20px 0; border: 2px solid #5A689F; position: relative;">
                      <div style="font-size: 12px; color: #3E467A; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;">Security Access Code</div>
                      <div style="font-size: 48px; font-weight: 900; color: #FFFFFF; letter-spacing: 12px; font-family: 'Courier New', monospace; text-shadow: 2px 2px #5A689F;">
                        ${otp}
                      </div>
                    </div>

                    <div style="background-color: #F8FAFC; border: 1px solid #A3C2D1; border-radius: 12px; padding: 15px; margin-top: 30px;">
                        <p style="color: #3E467A; font-size: 13px; font-weight: 700; margin: 0;">
                           ❄️ This secure code expires in 10 minutes.
                        </p>
                    </div>

                    <div style="border-top: 1px solid #A3C2D1; padding-top: 25px; margin-top: 40px; text-align: left;">
                      <p style="color: #5A689F; font-size: 14px; margin: 0; font-weight: 500;">
                        Stay Cool,<br>
                        <span style="color: #3E467A; font-weight: 800;">The VeritasCo Team</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div style="text-align: center; margin-top: 35px;">
                  <div style="width: 40px; height: 2px; background: #A3C2D1; display: inline-block; border-radius: 10px;"></div>
                  <p style="color: #A3C2D1; font-size: 12px; margin-top: 15px; opacity: 0.8;">
                    © 2025 VeritasCo. Empowering schools through tech.<br>
                    Sent from our cold-storage secure servers.
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // 5. Send Mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'OTP sent successfully',
      email: trimmedEmail
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}