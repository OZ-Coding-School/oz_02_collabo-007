import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import { RANKING_CATEGORY } from '@/constants/competition';
import React from 'react';

import YearFilter from '../YearFilter/YearFilter';

const RankingHeader = () => {
  return (
    <div className="flex flex-col gap-[16px] p-[20px]">
      <div className="flex flex-row gap-[8px]">
        <div>
          <h1 className="text-headline-2 text-gray-100">랭킹</h1>
        </div>
        <YearFilter />
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
