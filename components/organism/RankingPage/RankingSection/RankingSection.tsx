import type { Ranking } from '@/@types/ranking';
import type { Tier } from '@/@types/tier';
import type { ISearchParams } from '@/app/_actions/getCompData';
import { getUserListRanking } from '@/app/_actions/getUserListRanking';
import React from 'react';
import RankingBoard from '../RankingBoard/RankingBoard';

const RankingSection = async ({
  searchParams,
  tiers,
}: {
  searchParams: ISearchParams;
  tiers: Tier[];
}) => {
  const data: Ranking[] = await getUserListRanking(searchParams, tiers);
  const rankingData = Array.isArray(data) ? data : [];
  const teamTab = searchParams.gender === 'team' && searchParams.type === 'team';

  const filteredData: Ranking[] = rankingData.filter((data) => {
    if (!searchParams.club || searchParams.club === 'all') return true;
    if (searchParams.club === '무소속') return data.club === null;
    return data.club?.name === searchParams.club;
  });

  const clubNameSet = new Set(
    rankingData.map((data) => {
      if (!data.club) return '무소속';
      return data.club?.name;
    }),
  );

  const clubNameArr = Array.from(clubNameSet).sort((a, b) => a.localeCompare(b, 'ko-KR'));

  return (
    <RankingBoard
      filteredData={filteredData}
      clubNameArr={clubNameArr}
      tiers={tiers}
      teamTab={teamTab}
    />
  );
};

export default RankingSection;
