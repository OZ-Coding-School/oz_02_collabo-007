import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import { getUserData } from '@/app/page';
import { getClubList } from '@/app/signup/page';
import { SignUpForm } from '@/components/organism/SignUpPage/SignUpForm';

const page = async () => {
  const [userData, clubList] = await Promise.all([getUserData(), getClubList()]);

  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="프로필 수정" backBtn />
      <SignUpForm clubList={clubList} userData={userData} />
    </div>
  );
};

export default page;
