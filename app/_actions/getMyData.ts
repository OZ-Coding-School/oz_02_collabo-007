import { cookies } from 'next/headers';

export const getMyData = async () => {
  'use server';

  const cookie = cookies();
  const user = cookie.get('access')!;
  if (user) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.value}`,
        'Content-type': 'application/json',
      },
      cache: 'force-cache',
      next: { tags: ['myData'] },
    }).then((res) => res.json());

    return res;
  }
};
