'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { cookies } from 'next/headers';

export const getMyData = async () => {
  // const cookie = cookies();
  // const user = cookie.get('access')!;
  const res = await fetchWithToken(`${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      // Authorization: `Bearer ${user.value}`,
      'Content-type': 'application/json',
    },
    cache: 'force-cache',
    next: { tags: ['myData'] },
  });

  const data = await res.json();

  return data;
};
