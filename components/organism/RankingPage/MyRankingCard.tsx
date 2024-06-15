import { UserRanking } from '@/@types/ranking';
import { ISearchParams } from '@/app/_actions/getCompData';
import { getMyRanking } from '@/app/_actions/getMyRanking';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import React from 'react';

const MyRankingCard = async ({ searchParams }: { searchParams: ISearchParams }) => {
  // FIXME: 응답 데이터의 타입이 너무 다양해용
  const myRankingData: UserRanking[] | { detail: string } | string =
    await getMyRanking(searchParams);

  return (
    <>
      {Array.isArray(myRankingData) ? (
        <div className="w-full rounded-[8px] border border-primary-60 px-[16px]">
          <RankingInfoCard userRanking={myRankingData[0]} />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 bg-gray-20 py-[12px] text-body-2 leading-[24px] text-gray-60">
          참가한 대회가 없습니다.
        </div>
      )}
    </>
  );
};

export default MyRankingCard;
