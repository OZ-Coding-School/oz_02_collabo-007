import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh')?.value || null;
  const { pathname } = request.nextUrl;

  // 로그인하지 않은 사용자를 홈으로 리다이렉트
  if (
    !refreshToken &&
    !['/', '/signin/', '/signup/', '/competition/'].includes(pathname)
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그인한 사용자가 로그인 페이지나 회원가입 페이지에 접근z하려 할 때 홈으로 리다이렉트
  if (refreshToken && ['/signin/', '/signup/'].includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 인증이 필요한 경로 전체 작성
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};
