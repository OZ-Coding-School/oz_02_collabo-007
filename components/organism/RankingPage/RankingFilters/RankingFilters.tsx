import React from 'react';
import TierFilter from '../../CompetitionPage/CompetitionHomePage/TierFilter/TierFilter';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import type { Tier } from '@/@types/tier';

const RankingFilters = ({ tiers }: { tiers: Tier[] }) => {
  return (
    <div className="flex gap-[16px]">
      <TierFilter tiers={tiers} defaultValue={{ gender: 'male', type: 'single' }} />
      <div className="flex gap-[4px] py-[4px]">
        <select>
          <option>클럽필터</option>
          <option>라온테니스</option>
        </select>
        <DropdownIcon width={24} height={24} fill="#787878" />
      </div>
    </div>
  );
};

export default RankingFilters;
