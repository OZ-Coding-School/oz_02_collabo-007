import SignInForm from '@/components/organism/SignInPage/SignInForm';
import React from 'react';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Link from 'next/link';

const page = async () => {
  return (
    <main className="no-scrollbar flex h-full w-full flex-col items-center gap-[56px] overflow-scroll px-[20px] py-[80px]">
      <h1 className="text-headline-2">매치포인트</h1>
      <SignInForm />
    </main>
  );
};

export default page;
