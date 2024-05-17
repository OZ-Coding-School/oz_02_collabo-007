import type { UserData } from '@/@types/user';
import React from 'react';

interface UserProfileRankingCardProps {
  res: UserData;
  name: string;
  category: string;
}

const UserProfileRankingCard = ({ res, name, category }: UserProfileRankingCardProps) => {
  return (
    <div className="flex flex-1 flex-col gap-[4px] rounded-[8px] bg-gray-20 p-[12px] text-center">
      <span className="text-body-3 text-gray-60">{name}</span>
      <span className="text-headline-6 text-gray-60">
        {res.ranking ? res.ranking[category] : '-'}
      </span>
    </div>
  );
};

export default UserProfileRankingCard;
