'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyRecord = async (id: number) => {
  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/record/?user_id=${id}`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      cache: 'force-cache',
      next: { tags: ['myRecord'] },
    },
  );

  if (res.status === 401) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Server Error`);
  }

  const data = await res.json();

  return data;
};
