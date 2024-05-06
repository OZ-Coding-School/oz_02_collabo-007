import ClubIcon from '@/components/core/ClubIcon/ClubIcon';
import TeamIcon from '@/components/core/Icons/TeamIcon/TeamIcon';
import React, { FC } from 'react';

interface ClubTabProps {
  club: string;
  team: string;
}

const ClubTab: FC<ClubTabProps> = ({ club, team }) => {
  return (
    <div className="flex w-full items-start self-stretch rounded-[8px] bg-white p-[12px] shadow-card">
      <div className="flex flex-1 flex-col items-center justify-center gap-[8px] border-r border-gray-30 pr-[8px]">
        <div className="flex items-center justify-center gap-[4px] text-body-3 text-primary-60">
          <ClubIcon className="h-[20px] w-[20px] fill-primary-60" />
          <span>클럽</span>
        </div>
        <div className="w-full text-center text-sub-headline-2">{club}</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-[8px] pl-[8px]">
        <div className="flex items-center justify-center gap-[4px] text-body-3 text-primary-60">
          <TeamIcon className="h-[20px] w-[20px] fill-primary-60" />
          <span>팀</span>
        </div>
        <div className="w-full text-center text-sub-headline-2">{team}</div>
      </div>
    </div>
  );
};

export default ClubTab;
