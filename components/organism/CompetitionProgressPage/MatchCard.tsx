import React from 'react';
import MatchUsersCard from './MatchUsersCard';
import MatchScoreCard from './MatchScoreCard';
import { Match } from '@/@types/competition';

const MatchCard = ({
  match,
  matchType,
  totalSets,
}: {
  match: Match | undefined;
  matchType: string;
  totalSets: number;
}) => {
  return (
    <div className="flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-card">
      <div className="text-body-3 text-gray-60">
        {match && match.courtNumber ? `${match.courtNumber}번 코트` : '코트 미배정'}
      </div>
      <div className={`flex flex-col items-start gap-[12px] self-stretch text-gray-50`}>
        <div className="flex items-start justify-between self-stretch">
          <div className="flex flex-col gap-[12px]">
            <MatchUsersCard match={match} matchType={matchType} user="aTeamUsers" />
            <MatchUsersCard match={match} matchType={matchType} user="bTeamUsers" />
          </div>
          <MatchScoreCard match={match} totalSets={totalSets} />
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
