'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyData = async () => {
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    cache: 'force-cache',
    next: { tags: ['myData'] },
  });

  if (res.status === 401) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Server Error`);
  }

  const data = await res.json();

  return data;
};
