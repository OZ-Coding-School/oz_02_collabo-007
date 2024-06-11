import Navbar from '@/components/module/Navbar/Navbar';
import React from 'react';
import CompListSection from '@/components/module/CompListSection/CompListSection';
import CompListFilter from '@/components/organism/CompetitionPage/CompListFilter/CompListFilter';
import CompListOptionMenuButton from '@/components/module/CompListOptionMenuButton/CompListOptionMenuButton';
import {
  COMP_CATEGORY,
  COMP_DATA,
  COMP_STATUS,
  COMP_TIER,
} from '@/constants/competition';
import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import { redirect } from 'next/navigation';

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  return (
    <div className="flex h-full flex-col">
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
          <CompListFilter filterOption={COMP_TIER} />
          <CompListFilter filterOption={COMP_STATUS} />
          <CompListFilter filterOption={COMP_DATA} />
        </div>
        <div className="flex flex-col">
          <CompListSection
            variant="flexCol"
            searchParams={searchParams}
            currentLocation="competition"
            competitionType="competition"
          />
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
