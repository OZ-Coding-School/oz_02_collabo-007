'use client';

import Input from '@/components/core/Input/Input';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import type { Ranking } from '@/@types/ranking';
import RankingFilters from '../RankingFilters/RankingFilters';
import { RankingBoardHeader } from '../RankingBoardHeader/RankingBoardHeader';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import { Tier } from '@/@types/tier';
import { hangulToJamo } from '@/lib/utils/hangulToJamo';
import { useSearchParams } from 'next/navigation';

const RankingBoard = ({
  filteredData = [],
  clubNameArr,
  tiers,
  teamTab,
}: {
  filteredData: Ranking[];
  clubNameArr: string[];
  tiers: Tier[];
  teamTab: boolean;
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState<Ranking[]>(filteredData);
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearchValue('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('gender'), searchParams.get('type')]);

  useEffect(() => {
    if (searchValue === '') {
      setSearchedData(() => filteredData);
      return;
    }

    const filtered: Ranking[] = filteredData.filter((data) => {
      if ('team' in data) {
        return hangulToJamo(data.team.name).includes(hangulToJamo(searchValue));
      }

      return hangulToJamo(data.user.username).includes(hangulToJamo(searchValue));
    });

    setSearchedData(() => filtered);
  }, [searchValue, filteredData]);

  return (
    <div className="flex w-full flex-1 flex-col gap-[16px]">
      <div className="flex w-full flex-col gap-[12px]">
        <div className="w-full text-headline-6">전체랭킹</div>
        <div className="relative">
          <SearchIcon className="absolute left-[12px] top-[13px] z-50 h-[20px] w-[20px] fill-gray-50" />
          <Input
            placeholder={teamTab ? '팀 검색' : '선수 검색'}
            className=" border-gray-30 py-[10px] pl-[44px] pr-[12px]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-1 gap-[16px]">
        <div className="flex flex-1 flex-col gap-[8px]">
          <RankingFilters tiers={tiers} clubNameArr={clubNameArr} teamTab={teamTab} />
          <RankingBoardHeader teamTab={teamTab} />
          {searchedData.length !== 0 ? (
            <>
              {searchedData.map((rankingData, index) => (
                <RankingInfoCard rankingData={rankingData} key={index} />
              ))}
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-80">
              해당하는 랭킹 유저가 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RankingBoard;
