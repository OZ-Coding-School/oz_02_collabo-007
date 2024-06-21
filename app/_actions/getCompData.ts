import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { filterCompetition } from '@/lib/utils/filterCompetition';

export interface ISearchParams {
  status?: string;
  tier?: string;
  gender?: string;
  type?: string;
  title?: string;
  date?: string;
  club?: string;
  year?: string;
}

export const getCompData = async (searchParams?: ISearchParams, count?: number) => {
  'use server';

  const {
    gender,
    type,
    status = 'all',
    tier = 'all',
    date = 'closest',
  } = searchParams ?? {};

  const params = new URLSearchParams();
  if (gender && gender !== 'all') params.set('gender', gender);
  if (type && type !== 'all') params.set('matchType', type);
  if (count) params.set('count', `${count}`);

  const res = await fetchWithToken(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
      next: { tags: ['compData'], revalidate: 3600 },
    },
  );

  const data = await res.json();

  if (!count) {
    return filterCompetition({
      data,
      currentStatus: status,
      currentTier: tier,
      date,
    });
  }

  return data;
};
