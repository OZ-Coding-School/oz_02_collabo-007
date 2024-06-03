'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signOutUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout/`, {
    method: 'POST',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  cookies().delete('access');
  cookies().delete('refresh');
  redirect('/signin');
};
