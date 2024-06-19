import React, { Suspense } from 'react';
import Navbar from '@/components/module/Navbar/Navbar';
import type { ISearchParams } from '../_actions/getCompData';
import { getTiers } from '../_actions/getTiers';
import MyRankingCard from '@/components/organism/RankingPage/MyRankingCard';
import type { Tier } from '@/@types/tier';
import RankingHeader from '@/components/organism/RankingPage/RankingHeader/RankingHeader';
import RankingSection from '@/components/organism/RankingPage/RankingSection/RankingSection';
import { getMyData } from '@/app/_actions/getMyData';
import { UserData } from '@/@types/user';
import MyRankingCardSkeleton from '@/components/core/Skeleton/MyRankingCardSkeleton';
import RankingBoardSkeleton from '@/components/core/Skeleton/RankingBoardSkeleton';

const page = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const [tiers, userData]: [Tier[], UserData] = await Promise.all([
    await getTiers(),
    await getMyData(),
  ]);

  return (
    <div className="relative flex h-full w-full flex-col">
      <RankingHeader />
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[40px] overflow-scroll border-t-[1px] border-gray-30 bg-white p-[20px]">
        {userData && (
          <div className="flex w-full flex-col gap-[12px]">
            <div className="text-headline-6">내 랭킹</div>
            <Suspense fallback={<MyRankingCardSkeleton />}>
              <MyRankingCard searchParams={searchParams} />
            </Suspense>
          </div>
        )}

        <Suspense fallback={<RankingBoardSkeleton />}>
          <RankingSection searchParams={searchParams} tiers={tiers} />
        </Suspense>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
