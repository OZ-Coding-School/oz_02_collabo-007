import React from 'react';
import MatchCard from './MatchCard';
import { getCompProgress } from '@/app/_actions/getCompProgress';
import { Match } from '@/@types/competition';

const MatchList = async ({ params }: { params: number }) => {
  const compProgressData: Match[] = await getCompProgress(params);

  return (
    <div className="no-scrollbar flex w-full flex-1 flex-col gap-[16px] overflow-scroll bg-gray-10 px-[20px] py-[16px]">
      {compProgressData.map((match) => (
        <MatchCard match={match} key={match.id} />
      ))}
    </div>
  );
};

export default MatchList;
