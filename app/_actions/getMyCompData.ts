import { cookies } from 'next/headers';

export interface ISearchParams {
  status?: string;
  tier?: string;
  gender?: string;
  type?: string;
  title?: string;
  date?: string;
}

export const getMyCompData = async (searchParams?: ISearchParams, count?: number) => {
  const cookie = cookies();
  const token = cookie.get('access');

  const { status = 'all' } = searchParams ?? {};
  const params = new URLSearchParams();

  if (status !== 'all') params.set('status', status);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/mycompetitions/?${params.toString()}`,
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
