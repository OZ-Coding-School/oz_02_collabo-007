import { MatchTypeKey } from '@/@types/competition';
import { RankingWithoutImage } from '@/@types/ranking';
import { MATCH_TYPE } from '@/constants/competition';
import { cn } from '@/lib/utils/cn';
import React from 'react';

const UserProfileRankingCard = ({
  rankingData,
  name,
  isMain,
}: {
  rankingData: RankingWithoutImage[] | null;
  name: MatchTypeKey;
  isMain: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-[4px] rounded-[8px] bg-gray-20 p-[12px] text-center text-gray-60',
        isMain && 'bg-primary-10 text-primary-60',
      )}
    >
      <span className="text-body-3">{MATCH_TYPE[name]}</span>
      <span className="t text-headline-6">
        {rankingData ? `${rankingData[0].rank}위` : '미정'}
      </span>
    </div>
  );
};

export default UserProfileRankingCard;
