import type { Competition } from '@/@types/competition';
import { filterCompetition } from '@/lib/utils/filterCompetition';
import { cookies } from 'next/headers';

export interface ISearchParams {
  status?: string;
  tier?: string;
  gender?: string;
  type?: string;
  title?: string;
  date?: string;
}

export const getCompData = async (searchParams?: ISearchParams, count?: number) => {
  'use server';
  const cookie = cookies();
  const token = cookie.get('access');

  const {
    gender,
    type,
    status = '전체',
    tier = '전체',
    date = 'closest',
  } = searchParams ?? {};

  const params = new URLSearchParams();
  if (gender && gender !== 'all') params.set('gender', gender);
  if (type && type !== 'all') params.set('matchType', type);
  if (count) params.set('count', `${count}`);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/?${params.toString()}`,
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

  if (!count) {
    return filterCompetition({ data, status, tier, date });
  }

  return data;
};
