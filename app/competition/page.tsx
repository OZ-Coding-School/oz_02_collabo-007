import Navbar from '@/components/module/Navbar/Navbar';
import React, { Suspense } from 'react';
import { COMP_CATEGORY, COMP_DATA, COMP_STATUS } from '@/constants/competition';
import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import CompListFilter from '@/components/organism/CompetitionPage/CompetitionHomePage/CompListFilter/CompListFilter';
import CompInfo from '@/components/organism/CompetitionPage/CompetitionHomePage/CompInfo/CompInfo';
import CompCardSkeleton from '@/components/core/Skeleton/CompCardSkeleton';
import { getTiers } from '../_actions/getTiers';
import type { Tier } from '@/@types/tier';
import TierFilter from '@/components/organism/CompetitionPage/CompetitionHomePage/TierFilter/TierFilter';

const page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const tiers: Tier[] = await getTiers();

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex flex-col gap-[16px] p-[20px]">
        <h1 className="text-headline-2 text-gray-100">대회</h1>
        <div className="no-scrollbar flex gap-[8px] overflow-x-scroll">
          <TabGroup
            path={'/competition'}
            items={COMP_CATEGORY.map((category, index) => ({
              text: `${category.title}`,
              option: [{ gender: `${category.gender}` }, { type: `${category.type}` }],
            }))}
            variant="round"
          />
        </div>
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[12px] overflow-y-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex gap-[16px]">
          <TierFilter tiers={tiers} />
          <CompListFilter filterOption={COMP_STATUS} />
          <CompListFilter filterOption={COMP_DATA} />
        </div>
        <Suspense
          fallback={
            <div className="flex w-full flex-col gap-[16px]">
              {Array.from({ length: 5 }, (_, index) => {
                return <CompCardSkeleton key={index} />;
              })}
            </div>
          }
        >
          <CompInfo searchParams={searchParams} />
        </Suspense>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
