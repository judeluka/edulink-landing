import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PATHS = ['/client']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  const isProtectedPath = PROTECTED_PATHS.some(path => 
    pathname.startsWith(path)
  )
  
  if (!isProtectedPath) {
    return NextResponse.next()
  }

  const authCookie = request.cookies.get('client-auth')
  
  // Check if user is authenticated
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next()
  }

  const loginUrl = new URL('/client-login', request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/client/:path*']
}