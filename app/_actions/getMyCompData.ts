import { cookies } from 'next/headers';

export const getMyCompData = async () => {
  const cookie = cookies();
  const token = cookie.get('access');

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/mycompetitions/`,
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
