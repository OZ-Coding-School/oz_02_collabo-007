'use server';

import { cookies } from 'next/headers';

export const getApplyResult = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('access');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/application/`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: token ? `Bearer ${token.value}` : '',
        },
        next: { revalidate: 3600, tags: [`competition-apply-success-${id}`] },
      },
    );

    if (res.status === 500) {
      throw new Error('Failed to fetch data');
    }

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
