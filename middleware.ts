import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { renewAccessToken } from './app/_actions/renewAccessToken';
import { verifyToken } from './app/_actions/verifyToken';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const refreshToken = request.cookies.get('refresh')?.value || null;
  const accessToken = request.cookies.get('access')?.value || null;
  const { pathname } = request.nextUrl;

  if (accessToken) {
    try {
      const isVerify = await verifyToken(accessToken);
      if (isVerify.code) {
        const token = await renewAccessToken();
        response.cookies.set({
          name: 'access',
          value: token,
          httpOnly: true,
        });
      }
    } catch (error) {
      response.cookies.delete('access');
      response.cookies.delete('refresh');
    }
  }

  if (refreshToken) {
    try {
      const refreshVerify = await verifyToken(`${refreshToken}`);

      if (refreshVerify.code) {
        response.cookies.delete('access');
        response.cookies.delete('refresh');
      }
    } catch (error) {
      response.cookies.delete('access');
      response.cookies.delete('refresh');
    }
  }

  // 로그인하지 않은 사용자를 홈으로 리다이렉트
  if (
    !refreshToken &&
    !['/', '/signin/', '/signup/', '/competition/'].includes(pathname) &&
    !/^\/competition\/\d+\/$/.test(pathname) &&
    !/^\/competition\/\d+\/progress\/$/.test(pathname) &&
    !/^\/competition\/\d+\/result\/$/.test(pathname) &&
    !/^\/ranking\/$/.test(pathname) &&
    !/^\/club\/.+$/.test(pathname) &&
    !/^\/team\/.+$/.test(pathname) &&
    !/^\/user\/.+$/.test(pathname)
  ) {
    return NextResponse.redirect(
      new URL('/?alert=로그인 후 이용 가능한 서비스입니다.', request.url),
    );
  }

  // 로그인한 사용자가 로그인 페이지나 회원가입 페이지에 접근z하려 할 때 홈으로 리다이렉트
  if (refreshToken && ['/signin/', '/signup/'].includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // return NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    // 인증이 필요한 경로 전체 작성
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};
