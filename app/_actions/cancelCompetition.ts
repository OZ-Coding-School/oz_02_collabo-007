'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { revalidateTag } from 'next/cache';

const cancelCompetition = async (id: number) => {
  try {
    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/application/cancel/`,
      {
        credentials: 'include',
        method: 'PUT',
      },
    );

    if (!res.ok) {
      throw new Error('취소 실패');
    }

    revalidateTag('compData');

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default cancelCompetition;
