'use client';

import React, { useTransition } from 'react';
import { signOutUser } from '@/app/_actions/signOutUser';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';

const SignOutButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <form
        className="flex cursor-pointer items-center self-stretch text-error-60"
        action={() => startTransition(() => signOutUser())}
      >
        <button
          type="submit"
          className="flex w-full items-center justify-start px-[24px] py-[16px]"
        >
          로그아웃
        </button>
      </form>
      {isPending && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default SignOutButton;
