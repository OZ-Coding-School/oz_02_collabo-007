import { cookies } from 'next/headers';
import { ISearchParams } from './getCompData';

export const getMyRanking = async (searchParams: ISearchParams) => {
  const { gender = 'male', type = 'single' } = searchParams;
  const cookie = cookies();
  const token = cookie.get('access');

  const params = new URLSearchParams();
  params.set('gender', gender);
  params.set('matchType', type);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ranking/realtime/myrank/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token.value}` : '',
      },
      cache: 'no-cache',
    },
  );
  if (!res.ok) {
    return;
  }

  const data = await res.json();

  return data;
};
