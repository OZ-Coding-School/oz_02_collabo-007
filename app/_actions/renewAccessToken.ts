import { cookies } from 'next/headers';

export const renewAccessToken = async (): Promise<string> => {
  const cookie = cookies();
  const refreshToken = cookie.get('refresh');

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/token/refresh/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Authorization: refreshToken ? `Bearer ${refreshToken.value}` : '',
    },
  });
  const data = await res.json();
  console.log('data', data);

  if (!res.ok) {
    throw new Error('Failed to refresh token');
  }

  return data.accessToken;
};
