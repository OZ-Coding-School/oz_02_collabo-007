import { cookies } from 'next/headers';

export const getCompData = async (gender?: string, type?: string) => {
  'use server';

  const params = new URLSearchParams();

  if (gender) params.append('gender', gender);
  if (type) params.append('matchType', type);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
      cache: 'no-cache',
    },
  ).then((res) => res.json());

  return res;
};
