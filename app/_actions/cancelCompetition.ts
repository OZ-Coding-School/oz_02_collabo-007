'use server';
import { cookies } from 'next/headers';

const cancelCompetition = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('access');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/application/cancel/`,
      {
        credentials: 'include',
        method: 'PUT',
        headers: {
          Authorization: token ? `Bearer ${token.value}` : '',
        },
      },
    );

    if (!res.ok) {
      throw new Error('취소 실패');
    }

    const data = await res.json();
    console.log('cancel -> data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default cancelCompetition;
