import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()
  
  // Check password (you should set CLIENT_PASSWORD in Vercel environment variables)
  const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD || 'edulink2025'
  
  if (password === CLIENT_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('client-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    return response
  }
  
  return NextResponse.json({ success: false }, { status: 401 })
}