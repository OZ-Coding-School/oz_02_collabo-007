import React from 'react';
import SigninForm from '@/components/organism/SigninForm/SigninForm';

const page = async () => {
  return (
    <main className="no-scrollbar flex h-full w-full flex-col items-center gap-[56px] overflow-scroll px-[20px] py-[80px]">
      <h1 className="text-headline-2">알케미스트</h1>
      <SigninForm />
    </main>
  );
};

export default page;
