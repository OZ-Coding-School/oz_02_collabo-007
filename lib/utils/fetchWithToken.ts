'use server';
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

  const request = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: accessToken ? `Bearer ${accessToken.value}` : '',
    },
  };

  const res = await fetch(url, request);

  if (accessToken && res.status === 401) {
    // 토큰 만료 또는 인증 실패
    try {
      const renew = await renewAccessToken();

      const newRequest = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${renew}`,
        },
      };
      // 새로운 토큰으로 재시도
      const retryResponse = await fetch(url, newRequest);

      return retryResponse;
    } catch (error) {
      // 토큰 갱신 실패
      return res;
    }
  }
  return res;
};
