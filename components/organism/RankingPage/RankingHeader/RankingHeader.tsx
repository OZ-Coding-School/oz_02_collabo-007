import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import { RANKING_CATEGORY } from '@/constants/competition';
import React from 'react';

const RankingHeader = () => {
  return (
    <div className="flex flex-col gap-[16px] p-[20px]">
      <div className="flex flex-row gap-[8px]">
        <div>
          <h1 className="text-headline-2 text-gray-100">랭킹</h1>
        </div>
        <div className="flex gap-[4px] px-[12px] py-[6px]">
          <select>
            <option>2024</option>
            <option>2025</option>
          </select>
          {/* <DropdownIcon width={24} height={24} fill="#787878" /> */}
        </div>
      </div>
      <TabGroup
        path={'/ranking'}
        items={RANKING_CATEGORY.map((category, index) => ({
          text: `${category.title}`,
          option: [{ gender: `${category.gender}` }, { type: `${category.type}` }],
        }))}
        variant="round"
      />
    </div>
  );
};

export default RankingHeader;
