import { ClubTeamUser } from '@/@types/user';
import React from 'react';
import MemberProfile from '../MemberProfile/MemberProfile';

const MemberSection = ({ userData }: { userData: ClubTeamUser[] }) => {
  return (
    <>
      <div className="flex w-full items-center gap-[8px] text-body-3 text-gray-60">
        <div className="flex w-[120px] items-center gap-[12px]">선수</div>
        <div className="flex-1 text-right">소속 팀</div>
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col overflow-scroll">
        {userData?.map(({ id, username, imageUrl, team }, index) => (
          <MemberProfile
            key={id}
            id={id}
            image={imageUrl}
            name={username}
            teamName={team?.name}
          />
        ))}
      </div>
    </>
  );
};

export default MemberSection;
