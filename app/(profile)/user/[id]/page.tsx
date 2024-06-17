import CategoryRankingCard from '@/components/organism/ProfilePage/UserPage/UserProfileRankingCard/UserProfileRankingCard';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { getUserData } from '@/app/_actions/getUserData';
import RecentRecordSection from '@/components/organism/MyPage/RecentRecordSection/RecentRecordSection';
import { getMyRecord } from '@/app/_actions/getMyRecord';

const page = async ({ params }: { params: { id: number } }) => {
  return (
    <div className="flex h-full w-full flex-col bg-gray-30">
      <HeaderBar title="프로필" backBtn />
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll">
        <div className="w-full bg-white">
          {/* TODO: 스켈레톤 */}
          <Suspense fallback={<div>loading...</div>}>
            <UserProfile userData={await getUserData(params.id)} />
          </Suspense>
        </div>
        <div className="no-scrollbar flex flex-1 flex-col gap-[40px] overflow-scroll bg-white p-[20px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-headline-6 text-gray-100">랭킹</span>
            <div className="flex gap-[12px]">
              {/* <CategoryRankingCard res={userData} category="single" name="단식" />
              <CategoryRankingCard res={userData} category="double" name="복식" />
              <CategoryRankingCard res={userData} category="team" name="팀" /> */}
            </div>
          </div>
          <div className="flex w-full flex-1 flex-col gap-[12px]">
            <div className="flex justify-between">
              <span className="text-headline-6 text-gray-100">최근전적</span>
              <Link
                href={`/user/${params.id}/record/`}
                className="text-sub-headline-2 text-gray-60"
              >
                전체 전적 보기
              </Link>
            </div>
            {/* TODO: 스켈레톤 */}
            <Suspense fallback={<div>loading</div>}>
              <RecentRecordSection myRecordData={await getMyRecord(params.id)} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
