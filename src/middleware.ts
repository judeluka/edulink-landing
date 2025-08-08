import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PATHS = ['/client']
const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD || 'edulink2025'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname.startsWith(path)
  )
  
  if (!isProtectedPath) {
    return NextResponse.next()
  }

  const authCookie = request.cookies.get('client-auth')
  
  if (authCookie?.value === CLIENT_PASSWORD) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/client-login', request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/client/:path*']
}