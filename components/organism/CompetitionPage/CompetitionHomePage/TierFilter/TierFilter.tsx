'use client';

import type { Tier } from '@/@types/tier';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useCallback } from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

const TierFilter = ({ tiers }: { tiers: Tier[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentGender = searchParams.get('gender') || 'all';
  const currentType = searchParams.get('type') || 'all';

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

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname + '?' + createQueryString('tier', event.target.value));
  };

  return (
    <div className="flex gap-[4px]">
      <select
        name={'tier'}
        id={'tier'}
        onChange={handleChange}
        value={searchParams.get('tier') ?? ''}
      >
        <option value="all">전체</option>
        {filteredTiers.map((tier) => (
          <option key={tier.id} value={tier.name}>
            {tier.name}
          </option>
        ))}
      </select>
      <label htmlFor={'tier'}>
        <DropdownIcon width={24} height={24} fill="#787878" />
      </label>
    </div>
  );
};

export default TierFilter;
