import React from 'react';
import Navbar from '@/components/module/Navbar/Navbar';
import {
  SignOutButton,
  MyProfileCard,
  NavigationTab,
} from '@/components/organism/MyPage';
import type { UserData } from '@/@types/user';
import { getMyData } from '../_actions/getMyData';

const page = async () => {
  const userData: UserData = await getMyData();

  return (
    <div className="relative flex h-full flex-col items-center gap-[8px] self-stretch  bg-gray-30 text-gray-100">
      <div className="no-scrollbar relative flex flex-1 flex-col items-center gap-[8px] self-stretch overflow-scroll">
        <MyProfileCard userData={userData} />

        <div className="flex flex-col items-start self-stretch bg-white py-[8px] text-body-1">
          <NavigationTab
            link={'/mypage/competition/?status=all'}
            description="참가 신청한 대회 보기"
          />
          <NavigationTab
            link={`/user/${userData.id}/record`}
            description="내 전적 보기"
          />
          <NavigationTab
            link={`/mypage/ranking/${userData.id}/?gender=${userData.gender}`}
            description="대표 랭킹 설정하기"
          />
        </div>

        <div className="flex flex-1 flex-col items-start self-stretch bg-white py-[8px] text-body-1">
          <NavigationTab link={'#'} description="서비스 소개" />
          <NavigationTab link={'#'} description="이용 약관" />
          <NavigationTab link={'#'} description="회원 탈퇴" />

          <SignOutButton />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default page;
