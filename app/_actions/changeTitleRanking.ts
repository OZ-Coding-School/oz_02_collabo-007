'use server';

import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { revalidateTag } from 'next/cache';

export const changeTitleRanking = async (type: string) => {
  try {
    const mainRanking = { mainRanking: type };

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/main/ranking`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mainRanking),
      },
    );

    if (!res.ok) {
      throw new Error('server errors');
    }
    const data = await res.json();
    revalidateTag('myTitleRanking');

    return data;
  } catch (error) {
    console.log(error);
  }
};
