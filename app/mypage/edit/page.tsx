import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import { SignUpForm } from '@/components/organism/SignUpPage';
import { UserData } from '@/@types/user';
import { Club } from '@/@types/club';
import { getMyData } from '@/app/_actions/getMyData';
import { getClubList } from '@/app/_actions/getClubList';

const page = async () => {
  const [userData, clubList]: [UserData, Club[]] = await Promise.all([
    getMyData(),
    getClubList(),
  ]);

  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll bg-white">
      <HeaderBar title="프로필 수정" backBtn />
      <div className="no-scrollbar h-full w-full flex-1 overflow-scroll">
        <SignUpForm clubList={clubList} userData={userData} editMode />
      </div>
    </div>
  );
};

export default page;
