'use client';

import type { Tier } from '@/@types/tier';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useCallback } from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

const TierFilter = ({
  tiers,
  initialValue = { gender: 'all', type: 'all' },
}: {
  tiers: Tier[];
  initialValue?: { gender: string; type: string };
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentGender = searchParams.get('gender') || initialValue.gender;
  const currentType = searchParams.get('type') || initialValue.type;

  const filteredTiers = tiers.filter(({ matchTypeDetails: { gender, type } }) => {
    if (currentGender !== 'all' && currentType !== 'all') {
      return gender === currentGender && type === currentType;
    }
    return true;
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      if (searchParams.has('club')) params.delete('club');

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname + '?' + createQueryString('tier', event.target.value));
  };

  return (
    <div className="relative flex gap-[4px]">
      <select
        name={'tier'}
        id={'tier'}
        onChange={handleChange}
        value={searchParams.get('tier') ?? ''}
        className="z-10 w-full appearance-none pr-[24px] text-sub-headline-2 text-gray-80 outline-none"
      >
        {initialValue.gender === 'all' && <option value="all">전체</option>}
        {filteredTiers.map((tier) => (
          <option key={tier.id} value={tier.name}>
            {tier.name}
          </option>
        ))}
      </select>
      <label htmlFor={'tier'} className="absolute right-0 top-1/2 -translate-y-1/2">
        <DropdownIcon width={24} height={24} fill="#787878" />
      </label>
    </div>
  );
};

export default TierFilter;
