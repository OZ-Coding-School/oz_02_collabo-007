import React from 'react';
import MatchCard from './MatchCard';
import { getCompProgress } from '@/app/_actions/getCompProgress';
import { Match } from '@/@types/competition';

const MatchList = async ({
  params,
  searchParams,
  matchType,
  rounds,
  totalSets,
}: {
  params: number;
  searchParams: { roundnumber?: number };
  matchType: string;
  rounds: number[];
  totalSets: number;
}) => {
  const compProgressData: Match[] = await getCompProgress(params, searchParams);
  const matchCount = searchParams.roundnumber ? rounds[searchParams.roundnumber - 1] : 0;

  const getMatchData = (index: number) => {
    return compProgressData.find((match) => match.matchNumber === index + 1);
  };
  return (
    <div className="flex w-full flex-1 flex-col gap-[16px] border-t-[1px] border-gray-30 bg-gray-10 px-[20px] py-[16px]">
      {searchParams.roundnumber !== undefined
        ? Array.from({ length: matchCount }, (_, index) => (
            <MatchCard
              match={getMatchData(index)}
              key={index}
              index={index}
              matchCount={matchCount}
              matchType={matchType}
              totalSets={totalSets}
            />
          ))
        : compProgressData.map((match, index) => (
            <MatchCard
              match={match}
              key={index}
              matchType={matchType}
              totalSets={totalSets}
            />
          ))}
    </div>
  );
};

export default MatchList;
