import type { Match, Set } from '@/@types/competition';
import { UserData } from '@/@types/user';
import React from 'react';

const MatchScoreCard = ({
  match,
  totalSets,
}: {
  match: Match | undefined;
  totalSets: number;
}) => {
  return (
    <div className="flex items-start gap-[4px] text-center text-headline-7">
      {Array.from({ length: totalSets }, (_, index) => (
        <div key={index} className="flex w-[18px] flex-col gap-[12px] text-gray-50">
          <span
            className={
              (match?.aTeamUsers && !match.sets) ||
              (match?.aTeamUsers && match.sets && !match.sets[index]) ||
              (match?.sets && match.sets[index]?.bScore < match.sets[index]?.aScore)
                ? 'text-black'
                : 'text-gray-50'
            }
          >
            {!match || !match.sets || typeof match.sets[index]?.aScore !== 'number'
              ? '-'
              : match.sets[index].aScore}
          </span>
          <span
            className={
              (match?.bTeamUsers && !match.sets) ||
              (match?.bTeamUsers && match.sets && !match.sets[index]) ||
              (match?.sets && match.sets[index]?.aScore < match.sets[index]?.bScore)
                ? 'text-black'
                : 'text-gray-50'
            }
          >
            {!match || !match.sets || typeof match.sets[index]?.bScore !== 'number'
              ? '-'
              : match.sets[index].bScore}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MatchScoreCard;
