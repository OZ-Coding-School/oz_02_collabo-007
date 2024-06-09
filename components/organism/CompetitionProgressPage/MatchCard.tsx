import React from 'react';
import MatchUsersCard from './MatchUsersCard';
import MatchScoreCard from './MatchScoreCard';
import { Match } from '@/@types/competition';

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-card">
      <div className="text-body-3 text-gray-60">
        {match.courtnumber ? `${match.courtnumber}번 코트` : '코트 미배정'}
      </div>
      <div className="flex flex-col items-start gap-[12px] self-stretch">
        <div className="flex items-start justify-between self-stretch">
          <div className="flex flex-col">
            <MatchUsersCard users={match.aTeamUsers} winnerUser={match.winnerUser} />
            <MatchUsersCard users={match.bTeamUsers} winnerUser={match.winnerUser} />
          </div>
          <MatchScoreCard sets={match.sets} />
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
