import { cookies } from 'next/headers';

export const getCompProgress = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('access');

    const res = await fetch(
      ` ${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/status/`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: token ? ` Bearer${token.value}` : 'null',
        },
      },
    );

    if (!res.ok) {
      throw new Error('error');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
