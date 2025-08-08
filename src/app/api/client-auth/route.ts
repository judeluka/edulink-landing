import { NextRequest, NextResponse } from 'next/server'

const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD || 'edulink2025'

export async function POST(request: NextRequest) {
  const { password } = await request.json()
  
  if (password === CLIENT_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('client-auth', CLIENT_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    return response
  }
  
  return NextResponse.json({ success: false }, { status: 401 })
}