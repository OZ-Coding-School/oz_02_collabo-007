'use client';

import type { Tier } from '@/@types/tier';
import React from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import useQueryString from '@/lib/hook/useQueryString';

const TierFilter = ({
  tiers,
  initialValue = { gender: 'all', type: 'all' },
}: {
  tiers: Tier[];
  initialValue?: { gender: string; type: string };
}) => {
  const { searchParams, handleChange } = useQueryString('tier');

  const currentGender = searchParams.get('gender') || initialValue.gender;
  const currentType = searchParams.get('type') || initialValue.type;

  const filteredTiers = tiers.filter(({ matchTypeDetails: { gender, type } }) => {
    if (currentGender !== 'all' && currentType !== 'all') {
      return gender === currentGender && type === currentType;
    }
    return true;
  });

  return (
    <div className="relative flex gap-[4px]">
      <select
        name={'tier'}
        id={'tier'}
        onChange={handleChange}
        value={searchParams.get('tier') ?? ''}
        className="z-10 w-full appearance-none pr-[24px] font-pretendard text-sub-headline-2 text-gray-80 outline-none"
      >
        {initialValue.gender === 'all' && <option value="all">전체</option>}
        {filteredTiers.map((tier) => (
          <option key={tier.id} value={tier.name}>
            {tier.name}
          </option>
        ))}
      </select>
      <DropdownIcon
        width={24}
        height={24}
        fill="#787878"
        className="absolute right-0 top-1/2 h-[24px] w-[24px] -translate-y-1/2 fill-gray-60"
      />
    </div>
  );
};

export default TierFilter;
