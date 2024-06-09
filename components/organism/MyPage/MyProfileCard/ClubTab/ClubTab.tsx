import type { Club } from '@/@types/club';
import type { Team } from '@/@types/team';
import ClubIcon from '@/app/_asset/icons/club.svg';
import TeamIcon from '@/app/_asset/icons/team.svg';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import React, { FC } from 'react';

interface ClubTabProps {
  club: Club | null;
  team: Team | null;
}

const ClubTab: FC<ClubTabProps> = ({ club, team }) => {
  const clubPending = club?.status ? true : false;

  return (
    <div className="flex w-full items-start self-stretch rounded-[8px] bg-white p-[12px] shadow-card">
      <Link
        href={club && !club.status ? `/club/${club?.id}` : '#'}
        className="flex flex-1 flex-col items-center justify-center gap-[8px] border-r border-gray-30 pr-[8px]"
      >
        <div className="flex items-center justify-center gap-[4px] text-body-3 text-primary-60">
          <ClubIcon width={20} height={20} fill="#FC5214" />
          <span>클럽</span>
        </div>
        <div
          className={cn(
            'w-full text-center text-[14px] font-[500] leading-[20px]',
            `${clubPending && 'text-gray-50'}`,
          )}
        >
          {club ? club.name : '-'}
          <span>{clubPending && '(수락 대기)'}</span>
        </div>
      </Link>
      <Link
        href={team ? `/team/${team?.id}` : '#'}
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
