import type { Set } from '@/@types/competition';
import { UserData } from '@/@types/user';
import React from 'react';

const MatchScoreCard = ({
  sets,
  aTeamUsers,
  bTeamUsers,
}: {
  sets?: Set[];
  aTeamUsers?: UserData[];
  bTeamUsers?: UserData[];
}) => {
  return (
    <div className="flex items-start gap-[4px] text-center text-headline-7">
      {sets ? (
        sets.map((set: Set, index: number) => (
          <div key={set.id} className="flex w-[18px] flex-col gap-[12px]">
            <span className={set.aScore < set.bScore ? 'text-gray-50' : 'text-black'}>
              {set.aScore ? set.aScore : `-`}
            </span>
            <span className={set.bScore < set.aScore ? 'text-gray-50' : 'text-black'}>
              {set.bScore ? set.bScore : `-`}
            </span>
          </div>
        ))
      ) : (
        <div className={`flex w-[18px] flex-col gap-[12px]`}>
          <span className={`${!aTeamUsers ? 'text-gray-50' : 'text-black'}`}>-</span>
          <span className={`${!bTeamUsers ? 'text-gray-50' : 'text-black'}`}>-</span>
        </div>
      )}
    </div>
  );
};

export default MatchScoreCard;
