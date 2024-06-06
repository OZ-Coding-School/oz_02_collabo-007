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
} from '@/constants/competition/competition';

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { gender, type } = searchParams;
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-[16px] p-[20px]">
        <h1 className="text-headline-2 text-gray-100">대회</h1>
        <div className="no-scrollbar flex gap-[8px] overflow-x-scroll">
          {COMP_CATEGORY.map((option, index) => (
            <CompListOptionMenuButton
              pathName="/competition"
              query={{
                ...searchParams,
                title: option.title,
                gender: option.gender,
                type: option.type,
              }}
              variant="round"
              isSelected={gender === option.gender && type === option.type && true}
              title={option.title}
              key={index}
            />
          ))}
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
            compStatus="전체"
            searchParams={searchParams}
            currentLocation="competition"
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
