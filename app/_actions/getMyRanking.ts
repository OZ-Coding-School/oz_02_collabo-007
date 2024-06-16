import { ISearchParams } from './getCompData';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyRanking = async (searchParams: ISearchParams) => {
  const { gender = 'male', type = 'single' } = searchParams;

  if (gender === 'team' && type === 'team') {
    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ranking/realtime/myteamrank/`,
      {
        credentials: 'include',
        method: 'GET',
      },
    );

    if (!res.ok) {
      throw new Error('server errors');
    }

    const data = await res.json();
    return data;
  }

  const params = new URLSearchParams();
  params.set('gender', gender);
  params.set('type', type);

  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_BASE_URL}/ranking/realtime/myrank/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
    },
  );

  if (!res.ok) {
    throw new Error('server errors');
  }

  const data = await res.json();

  return data;
};
