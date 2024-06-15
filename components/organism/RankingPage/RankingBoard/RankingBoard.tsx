import { UserRanking } from '@/@types/ranking';
import type { Tier } from '@/@types/tier';
import type { ISearchParams } from '@/app/_actions/getCompData';
import { getUserRanking } from '@/app/_actions/getUserRanking';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import React from 'react';
import { RankingBoardHeader } from '../RankingBoardHeader/RankingBoardHeader';
import RankingFilters from '../RankingFilters/RankingFilters';

const RankingBoard = async ({
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

  return (
    <div className="flex flex-1 flex-col gap-[8px]">
      <RankingFilters tiers={tiers} usersRankingData={usersRankingData} />
      <RankingBoardHeader />
      {filteredData ? (
        <>
          {filteredData.map((userRanking, index) => (
            <RankingInfoCard userRanking={userRanking} key={index} />
          ))}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-gray-80">
          해당하는 랭킹 유저가 없습니다.
        </div>
      )}
    </div>
  );
};

export default RankingBoard;
