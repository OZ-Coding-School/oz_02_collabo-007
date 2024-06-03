import React from 'react';
import { signOutUser } from '@/app/_actions/signOutUser';

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
