import type { UserData } from '@/@types/user';
import React from 'react';
import CheckIcon from '@/app/_asset/icons/check-circle.svg';

interface MatchUsersCardProps {
  users?: UserData[];
  winnerUser?: UserData[];
}

const MatchUsersCard = ({ users, winnerUser }: MatchUsersCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[8px] text-gray-80">
        {users ? users.map((userData) => userData.username).join(' \u00B7 ') : '미정'}
        {winnerUser &&
          users?.map((userInfo, index) =>
            userInfo.id === winnerUser[0].id ? (
              <CheckIcon width={18} height={18} fill="#FC5214" key={index} />
            ) : null,
          )}
      </div>
    </div>
  );
};

export default MatchUsersCard;
