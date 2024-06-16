'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyTitleRanking = async () => {
  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/ranking/`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      cache: 'force-cache',
      next: { tags: ['myTitleRanking'] },
    },
  );

  if (!res.ok) {
    throw new Error(`Server Error`);
  }

  const data = await res.json();
  return data;
};
