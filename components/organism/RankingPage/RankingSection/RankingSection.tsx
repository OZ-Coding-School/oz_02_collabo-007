import { UserRanking } from '@/@types/ranking';
import type { Tier } from '@/@types/tier';
import type { ISearchParams } from '@/app/_actions/getCompData';
import { getUserRanking } from '@/app/_actions/getUserRanking';
import React from 'react';
import RankingBoard from '../RankingBoard/RankingBoard';

const RankingSection = async ({
  searchParams,
  tiers,
}: {
  searchParams: ISearchParams;
  tiers: Tier[];
}) => {
  const usersRankingData: UserRanking[] = await getUserRanking(searchParams, tiers);

  const filteredData: UserRanking[] = usersRankingData?.filter((data) => {
    if (!searchParams.club || searchParams.club === 'all') {
      return true;
    }
    if (searchParams.club === '무소속') {
      return data.club === null;
    }
    return data.club?.name === searchParams.club;
  });

  const clubNameSet = new Set(
    usersRankingData
      ? usersRankingData.map((data) => {
          if (!data.club) return '무소속';
          return data.club?.name;
        })
      : [],
  );

  const clubNameArr = Array.from(clubNameSet).sort((a, b) => a.localeCompare(b, 'ko-KR'));

  return (
    <RankingBoard filteredData={filteredData} clubNameArr={clubNameArr} tiers={tiers} />
  );
};

export default RankingSection;
