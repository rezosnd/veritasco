import { NextRequest, NextResponse } from 'next/server';
import { otpStore } from '@/lib/otp-store';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    const trimmedEmail = email.trim().toLowerCase(); // Trim and normalize email

    if (!trimmedEmail || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    const storedOtpData = await otpStore.get(trimmedEmail);

    if (!storedOtpData) {
      return NextResponse.json(
        { error: 'OTP not found or expired' },
        { status: 400 }
      );
    }

    // Check if OTP has expired
    if (Date.now() > storedOtpData.expiresAt) {
      await otpStore.delete(trimmedEmail); // Clean up expired OTP
      return NextResponse.json(
        { error: 'OTP has expired' },
        { status: 400 }
      );
    }

    // Check if OTP matches
    if (storedOtpData.otp !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // OTP is valid, remove it from store
    await otpStore.delete(trimmedEmail);

    return NextResponse.json({
      message: 'OTP verified successfully',
      verified: true
    });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}