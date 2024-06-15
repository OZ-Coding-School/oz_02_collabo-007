import React, { Suspense } from 'react';
import Navbar from '@/components/module/Navbar/Navbar';
import type { ISearchParams } from '../_actions/getCompData';
import { getTiers } from '../_actions/getTiers';
import MyRankingCard from '@/components/organism/RankingPage/MyRankingCard';
import type { Tier } from '@/@types/tier';
import RankingHeader from '@/components/organism/RankingPage/RankingHeader/RankingHeader';
import RankingSection from '@/components/organism/RankingPage/RankingSection/RankingSection';

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

        {/* TODO: 스켈레톤 만들기 */}
        <Suspense fallback={<div>loading...</div>}>
          <RankingSection searchParams={searchParams} tiers={tiers} />
        </Suspense>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
