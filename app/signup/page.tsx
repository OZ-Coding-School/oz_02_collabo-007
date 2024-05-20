import React from 'react';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { SignUpForm } from '@/components/organism/SignUpPage';
import type { ClubSearchData } from '@/@types/club';
import { getClubList } from './getClubList';

const page = async () => {
  const clubList: ClubSearchData[] = await getClubList();

  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="회원 가입" backBtn />
      <SignUpForm clubList={clubList} />
    </div>
  );
};

export default page;
