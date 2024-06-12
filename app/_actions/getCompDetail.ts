'use server';
import { cookies } from 'next/headers';

export const getCompDetail = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('access');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/details/`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: token ? `Bearer ${token.value}` : '',
        },
      },
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
