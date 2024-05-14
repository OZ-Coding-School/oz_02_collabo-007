import { ClubTeamUser } from '@/@types/user';
import UserProfile from '@/components/core/UserProfile/UserProfile';
import React from 'react';

const UserProfileCard = ({ userData }: { userData: ClubTeamUser[] }) => {
  return (
    <>
      <div className="flex w-full items-center gap-[8px] text-body-3 text-gray-60">
        <div className="w-[24px]">랭킹</div>
        <div className="flex w-[80px] items-center gap-[12px]">선수</div>
        <div className="flex-1 text-right">점수</div>
        <div className="flex-1 text-right">소속 팀</div>
      </div>
      {userData?.map(({ id, username, imageUrl, team }) => (
        <UserProfile
          key={id}
          id={id}
          image={imageUrl?.imageUrl}
          name={username}
          rank={team?.rank}
          score={team?.score}
          teamName={team?.name}
        />
      ))}
    </>
  );
};

export default UserProfileCard;
