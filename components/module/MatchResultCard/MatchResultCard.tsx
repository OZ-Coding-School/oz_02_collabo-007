import React, { FC } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

interface Props {
  match: {
    court: number;
    winner: {
      users: { name: string }[];
      scores: string[];
    };
    loser: {
      users: { name: string }[];
      scores: string[];
    };
  };
}

const MatchResultCard: FC<Props> = ({ match }) => {
  const { court, winner, loser } = match;

  return (
    <div className="flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-card">
      <div className="text-body-3 text-gray-60">{court}번 코트</div>

      <div className="flex flex-col items-start gap-[12px] self-stretch">
        <ScoreBoard board={winner} isWin />
        <ScoreBoard board={loser} />
      </div>
    </div>
  );
};

export default MatchResultCard;
