import { renewAccessToken } from '@/app/_actions/renewAccessToken';
import { cookies } from 'next/headers';

interface FetchOptions extends RequestInit {
  headers?: {
    [key: string]: string;
  };
}

export const fetchWithToken = async (url: string, options: FetchOptions = {}) => {
  const cookie = cookies();
  const accessToken = cookie.get('access');

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: accessToken ? `Bearer ${accessToken.value}` : '',
    },
  });

  if (res.status === 401) {
    // 토큰 만료 또는 인증 실패
    try {
      const renew = await renewAccessToken();
      console.log('test');
      console.log(renew);
      cookie.set({
        name: 'access',
        value: renew,
        httpOnly: true,
      });

      // 새로운 토큰으로 재시도
      const retryResponse = await fetch(url, {
        headers: {
          ...options.headers,
          Authorization: `Bearer ${renew}`,
        },
        ...options,
      });

      return retryResponse;
    } catch (error) {
      // 토큰 갱신 실패
      return res;
    }
  }
  return res;
};
