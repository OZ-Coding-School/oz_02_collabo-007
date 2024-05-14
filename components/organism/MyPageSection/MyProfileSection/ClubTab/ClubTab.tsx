import { ClubValues } from '@/app/(profile)/user/[id]/page';
import ClubIcon from '@/app/_asset/icons/club.svg';
import TeamIcon from '@/app/_asset/icons/team.svg';
import Link from 'next/link';
import React, { FC } from 'react';

interface ClubTabProps {
  club: ClubValues | null;
  team: { [key: string]: string } | null;
}

const ClubTab: FC<ClubTabProps> = ({ club, team }) => {
  return (
    <div className="flex w-full items-start self-stretch rounded-[8px] bg-white p-[12px] shadow-card">
      <Link
        href={`/club/1`}
        className="flex flex-1 flex-col items-center justify-center gap-[8px] border-r border-gray-30 pr-[8px]"
      >
        <div className="flex items-center justify-center gap-[4px] text-body-3 text-primary-60">
          <ClubIcon width={20} height={20} fill="#FC5214" />
          <span>클럽</span>
        </div>
        <div className="w-full text-center text-sub-headline-2">
          {club ? club.name : '-'}
        </div>
      </Link>
      <Link
        href={`/team/1`}
        className="flex flex-1 flex-col items-center justify-center gap-[8px] pl-[8px]"
      >
        <div className="flex items-center justify-center gap-[4px] text-body-3 text-primary-60">
          <TeamIcon width={20} height={20} fill="#FC5214" />
          <span>팀</span>
        </div>
        <div className="w-full text-center text-sub-headline-2">
          {team ? team.name : '-'}
        </div>
      </Link>
    </div>
  );
};

export default ClubTab;
