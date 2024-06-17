'use client';

import React from 'react';
import TierFilter from '../../CompetitionPage/CompetitionHomePage/TierFilter/TierFilter';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import type { Tier } from '@/@types/tier';
import useQueryString from '@/lib/hook/useQueryString';

const RankingFilters = ({
  tiers,
  clubNameArr,
  teamTab = false,
}: {
  tiers: Tier[];
  clubNameArr: string[];
  teamTab: boolean;
}) => {
  const { handleChange, searchParams } = useQueryString('club');

  return (
    <div className="flex gap-[16px]">
      {!teamTab && (
        <TierFilter tiers={tiers} initialValue={{ gender: 'male', type: 'single' }} />
      )}
      <div className="relative flex w-[100px]">
        <select
          onChange={handleChange}
          value={searchParams.get('club') ?? ''}
          className="z-10 w-full appearance-none truncate pr-[24px] font-pretendard text-sub-headline-2 text-gray-80 outline-none"
        >
          <option value="" disabled>
            클럽 필터
          </option>
          <option value="all">전체</option>
          {clubNameArr.map((clubName, index) => (
            <option key={index} value={clubName}>
              {clubName}
            </option>
          ))}
        </select>
        <DropdownIcon
          width={24}
          height={24}
          fill="#787878"
          className="absolute right-0 top-1/2 z-0 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default RankingFilters;
