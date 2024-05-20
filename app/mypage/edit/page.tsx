import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import { SignUpForm } from '@/components/organism/SignUpPage';
import { UserData } from '@/@types/user';
import { Club } from '@/@types/club';
import { getClubList } from '@/app/signup/getClubList';
import { getMyData } from '@/app/getMyData';

const page = async () => {
  const [userData, clubList]: [UserData, Club[]] = await Promise.all([
    getMyData(),
    getClubList(),
  ]);

  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="프로필 수정" backBtn />
      <SignUpForm clubList={clubList} userData={userData} />
    </div>
  );
};

export default page;
