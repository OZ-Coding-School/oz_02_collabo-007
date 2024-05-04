import React from 'react';
import Navbar from '@/components/module/Navbar/Navbar';
import {
  MyProfileSection,
  NavigationTab,
  SignoutTab,
} from '@/components/organism/MyPageSection';

const page = () => {
  return (
    <div className="flex h-full flex-col items-center gap-[8px] self-stretch bg-gray-30  text-gray-100">
      <div className="no-scrollbar flex flex-1 flex-col items-center gap-[8px] self-stretch overflow-scroll">
        <MyProfileSection />

        <div className="flex flex-col items-start self-stretch bg-white py-[8px] text-body-1">
          <NavigationTab link={'mypage/comp'} description="참가 신청한 대회 보기" />
          <NavigationTab link={'mypage/record'} description="내 전적 보기" />
        </div>

        <div className="flex flex-1 flex-col items-start self-stretch bg-white py-[8px] text-body-1">
          <NavigationTab link={'#'} description="서비스 소개" />
          <NavigationTab link={'#'} description="이용 약관" />
          <NavigationTab link={'#'} description="회원 탈퇴" />

          <SignoutTab />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default page;
