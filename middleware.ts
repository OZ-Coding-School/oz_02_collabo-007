import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh')?.value || null;
  const { pathname } = request.nextUrl;

  if (pathname === '/competition/:path+') {
    if (refreshToken === null) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (pathname === '/' || pathname === '/competition/') {
    return NextResponse.next();
  }

  if (pathname === '/signin/' || pathname === '/signup/') {
    if (refreshToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (refreshToken === null) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 인증이 필요한 경로 전체 작성
    '/',
    '/signin/',
    '/signup/',
    '/competition/',
    '/competition/:path+',
    '/mypage/:path*',
    '/club/:path*',
    '/team/:path*',
    '/user/:path*',
  ],
};
