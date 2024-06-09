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
          <div key={index} className="flex w-[18px] flex-col gap-[12px]">
            <span
              className={
                set.aScore < set.bScore || !aTeamUsers ? 'text-gray-50' : 'text-black'
              }
            >
              {set.aScore ? set.aScore : `-`}
            </span>
            <span
              className={
                set.bScore < set.aScore || !bTeamUsers ? 'text-gray-50' : 'text-black'
              }
            >
              {set.bScore ? set.bScore : `-`}
            </span>
          </div>
        ))
      ) : (
        <div>
          <div>- - -</div>
          <div>- - -</div>
        </div>
      )}
    </div>
  );
};

export default MatchScoreCard;
