import React from 'react';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { SignUpForm } from '@/components/organism/SignupForm/SignUpForm';

export const getClubList = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/club/list`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const clubList = await getClubList();

  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="회원 가입" backBtn />
      <SignUpForm clubList={clubList} />
    </div>
  );
};

export default page;
