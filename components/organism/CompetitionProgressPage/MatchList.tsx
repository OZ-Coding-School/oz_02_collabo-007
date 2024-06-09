import React from 'react';
import MatchCard from './MatchCard';
import { getCompProgress } from '@/app/_actions/getCompProgress';
import { Match } from '@/@types/competition';

const MatchList = async ({
  params,
  searchParams,
  matchType,
}: {
  params: number;
  searchParams: { roundnumber?: string };
  matchType: string;
}) => {
  const compProgressData: Match[] = await getCompProgress(params, searchParams);

  return (
    <div className="no-scrollbar flex w-full flex-1 flex-col gap-[16px] border-t-[1px] border-gray-30 bg-gray-10 px-[20px] py-[16px]">
      {compProgressData.map((match) => (
        <MatchCard match={match} key={match.id} matchType={matchType} />
      ))}
    </div>
  );
};

export default MatchList;
