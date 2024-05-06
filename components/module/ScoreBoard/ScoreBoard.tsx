import React, { FC } from 'react';
import CheckIcon from '@/app/_asset/icons/check-circle.svg';
import { cn } from '@/lib/utils/cn';

interface ScoreBoardProps {
  board: {
    users: { name: string }[];
    scores: string[];
  };
  isWin?: boolean;
}

const ScoreBoard: FC<ScoreBoardProps> = ({ board, isWin = false }) => {
  return (
    <div className="flex items-start justify-between self-stretch">
      <div className="flex items-center gap-[8px] text-gray-80">
        {board.users.map(({ name }, index) => (
          <div key={index}>{name}</div>
        ))}
        {isWin && <CheckIcon width={18} height={18} fill="#FC5214" />}
      </div>
      <div className="flex items-start gap-[4px] text-center text-headline-7">
        {board.scores.map((score, index) => (
          <div key={index} className={cn(`${!isWin && 'text-gray-50'}`, 'w-[18px]')}>
            {score}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
