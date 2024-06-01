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
        cache: 'force-cache',
        next: { tags: [`competition-detail-${id}`] },
      },
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
