import type { UserData } from '@/@types/user';
import React from 'react';
import CheckIcon from '@/app/_asset/icons/check-circle.svg';
import { Match } from '@/@types/competition';

const MatchUsersCard = ({
  match,
  matchType,
  user,
}: {
  match: Match | undefined;
  matchType: string;
  user: 'aTeamUsers' | 'bTeamUsers';
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center gap-[8px] ${match && match[user] ? 'text-black' : 'text-gray-50'}`}
      >
        {match && match[user]
          ? match[user]?.map((userData) => userData.username).join(' \u00B7 ')
          : matchType === 'double' || matchType === 'team'
            ? '미정 \u00B7 미정'
            : '미정'}
        {match &&
          match[user]?.map((userInfo, index) =>
            match.winnerUser && userInfo.id === match.winnerUser[0].id ? (
              <CheckIcon width={18} height={18} fill="#FC5214" key={index} />
            ) : null,
          )}
      </div>
    </div>
  );
};

export default MatchUsersCard;
