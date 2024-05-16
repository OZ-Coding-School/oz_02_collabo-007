import type { UserInfo } from '@/@types/user';
import { getUserData } from '@/app/page';
import CategoryRankingCard from '@/components/organism/ProfilePage/UserPage/UserProfileRankingCard/UserProfileRankingCard';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { id: number } }) => {
  const userData: UserInfo = await getUserData();

  return (
    <div className="w-full bg-gray-30">
      <HeaderBar title="프로필" backBtn />
      <div className="no-scrollbar flex w-full flex-col gap-[8px] overflow-y-scroll">
        <div className="w-full bg-white">
          <UserProfile userInfo={userData} />
        </div>
        <div className="flex flex-col gap-[40px] bg-white p-[20px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-headline-6 text-gray-100">랭킹</span>
            <div className="flex gap-[12px]">
              <CategoryRankingCard res={userData} category="single" name="단식" />
              <CategoryRankingCard res={userData} category="double" name="복식" />
              <CategoryRankingCard res={userData} category="team" name="팀" />
            </div>
            <div>그래프</div>
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex justify-between">
              <span className="text-headline-6 text-gray-100">최근전적</span>
              <Link
                href={`/user/${params.id}/record/`}
                className="text-subheadline-2 text-gray-60"
              >
                전체 전적 보기
              </Link>
            </div>
            <div>최근전적카드</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
