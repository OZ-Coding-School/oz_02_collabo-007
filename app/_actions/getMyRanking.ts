import { ISearchParams } from './getCompData';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyRanking = async (searchParams: ISearchParams) => {
  const { gender = 'male', type = 'single' } = searchParams;

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

  const data = await res.json();

  // FIXME: 변경
  if (res.status === 404) {
    return data;
  }

  return data;
};
