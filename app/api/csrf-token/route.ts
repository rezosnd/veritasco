import { NextRequest, NextResponse } from 'next/server';
import { generateCSRFToken, getSessionIdFromRequest } from '@/lib/csrf';

export async function GET(request: NextRequest) {
  try {
    const sessionId = getSessionIdFromRequest(request);
    const csrfToken = generateCSRFToken(sessionId);

    return NextResponse.json({
      csrfToken: csrfToken,
    });

  } catch (error) {
    console.error('CSRF token generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}