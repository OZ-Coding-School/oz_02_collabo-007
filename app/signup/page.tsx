import React from 'react';
import { SignUpForm } from '@/components/organism/SignUpPage';
import type { ClubSearchData } from '@/@types/club';
import { getClubList } from '../_actions/getClubList';

const page = async () => {
  const clubList: ClubSearchData[] = await getClubList();

  return <SignUpForm clubList={clubList} />;
};

export default page;
