import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh')?.value;
  const { pathname } = request.nextUrl;
  console.log(pathname);

  if (pathname === '/' || pathname === '/competition/') {
    return NextResponse.next();
  }

  if (pathname === '/signin/' || pathname === '/signup/') {
    if (refreshToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();

  // 로그인 페이지 접근 시, 이미 로그인 되어 있다면 메인 페이지로 리다이렉트
  // if (pathname === '/login') {
  //   if (accessToken) {
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
  //   // 로그인 페이지는 보호되지 않은 경로이므로, accessToken이 없어도 접근 가능
  //   return NextResponse.next();
  // }
  // if (!accessToken) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/signin/',
    '/signup/',
    '/competition/',
    // 인증이 필요한 경로 전체 작성
  ],
};
