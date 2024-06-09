import type { Set } from '@/@types/competition';
import React from 'react';

const MatchScoreCard = ({ sets }: { sets?: Set[] }) => {
  return (
    <div className="flex items-start gap-[4px] text-center text-headline-7">
      {sets &&
        sets.map((set: Set, index: number) => (
          <div key={index} className="flex flex-col">
            <span>{set.aScore ? set.aScore : `-`}</span>
            <span>{set.bScore ? set.bScore : `-`}</span>
          </div>
        ))}
    </div>
  );
};

export default MatchScoreCard;
