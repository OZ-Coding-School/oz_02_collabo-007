import { UserRanking } from '@/@types/ranking';
import type { Tier } from '@/@types/tier';
import type { ISearchParams } from '@/app/_actions/getCompData';
import { getUserRanking } from '@/app/_actions/getUserRanking';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import React from 'react';

const RankingBoard = async ({
  searchParams,
  tiers,
}: {
  searchParams: ISearchParams;
  tiers: Tier[];
}) => {
  const usersRankingData: UserRanking[] = await getUserRanking(searchParams, tiers);
  return (
    <>
      {usersRankingData.map((userRanking, index) => (
        <RankingInfoCard userRanking={userRanking} key={index} />
      ))}
    </>
  );
};

export default RankingBoard;
