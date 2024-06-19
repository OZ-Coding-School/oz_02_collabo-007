'use server';

import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getApplyResult = async (id: number) => {
  try {
    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/application/`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    if (res.status === 500) {
      throw new Error('Failed to fetch data');
    }

    if (!res.ok) {
      throw new Error('failed');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
