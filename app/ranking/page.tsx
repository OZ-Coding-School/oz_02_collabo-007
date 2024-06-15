import React, { Suspense } from 'react';
import Navbar from '@/components/module/Navbar/Navbar';
import type { ISearchParams } from '../_actions/getCompData';
import { getTiers } from '../_actions/getTiers';
import MyRankingCard from '@/components/organism/RankingPage/MyRankingCard';
import type { Tier } from '@/@types/tier';
import RankingBoard from '@/components/organism/RankingPage/RankingBoard/RankingBoard';
import { RankingBoardHeader } from '@/components/organism/RankingPage/RankingBoardHeader/RankingBoardHeader';
import RankingFilters from '@/components/organism/RankingPage/RankingFilters/RankingFilters';
import RankingHeader from '@/components/organism/RankingPage/RankingHeader/RankingHeader';
import TotalRankingHeader from '@/components/organism/RankingPage/TotalRankingHeader/TotalRankingHeader';

const page = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const tiers: Tier[] = await getTiers();

  return (
    <div className="relative flex h-full w-full flex-col">
      <RankingHeader />
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[40px] overflow-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="text-headline-6">내 랭킹</div>
          <MyRankingCard />
        </div>
        <div className="flex w-full flex-col gap-[16px]">
          <TotalRankingHeader />
          <div className="flex gap-[16px]">
            {/* TODO: 스켈레톤 만들기 */}
            <Suspense fallback={<div>loading...</div>}>
              <RankingBoard searchParams={searchParams} tiers={tiers} />
            </Suspense>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
