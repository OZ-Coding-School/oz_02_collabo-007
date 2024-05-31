import { cookies } from 'next/headers';

export const getCompDetail = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('token');
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};