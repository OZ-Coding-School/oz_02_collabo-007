'use client';
import React, { ChangeEvent, useCallback } from 'react';
import TierFilter from '../../CompetitionPage/CompetitionHomePage/TierFilter/TierFilter';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import type { Tier } from '@/@types/tier';
import { UserRanking } from '@/@types/ranking';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const RankingFilters = ({
  tiers,
  usersRankingData,
}: {
  tiers: Tier[];
  usersRankingData: UserRanking[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname + '?' + createQueryString('club', event.target.value));
  };

  const clubNameSet = new Set(
    usersRankingData.map((data) => {
      if (!data.club) return '무소속';
      return data.club?.name;
    }),
  );

  const clubNameArr = Array.from(clubNameSet).sort((a, b) => a.localeCompare(b, 'ko-KR'));

  return (
    <div className="flex gap-[16px]">
      <TierFilter tiers={tiers} initialValue={{ gender: 'male', type: 'single' }} />
      <div className="relative flex w-[100px]">
        <select
          onChange={handleChange}
          value={searchParams.get('club') ?? ''}
          className="z-10 w-full appearance-none truncate pr-[24px] text-sub-headline-2 text-gray-80 outline-none"
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
