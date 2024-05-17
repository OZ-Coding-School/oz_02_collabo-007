import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const signOutUser = async () => {
  'use server';

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

const SignOutButton = () => {
  return (
    <form
      className="flex cursor-pointer items-center gap-[16px] self-stretch px-[24px] py-[16px] text-error-60"
      action={signOutUser}
    >
      <button type="submit" className="flex w-full items-center justify-start">
        로그아웃
      </button>
    </form>
  );
};

export default SignOutButton;
