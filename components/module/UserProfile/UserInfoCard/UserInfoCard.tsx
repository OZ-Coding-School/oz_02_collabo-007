import React from 'react';
import TeamIcon from '@/app/_asset/icons/team.svg';
import ClubIcon from '@/app/_asset/icons/group.svg';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Link from 'next/link';
import { UserData } from '@/@types/user';
import { cn } from '@/lib/utils/cn';

interface UserInfoCardProps {
  userData: UserData | null;
  loginBtn: boolean;
}

const UserInfoCard = ({ userData, loginBtn }: UserInfoCardProps) => {
  const clubPending = userData?.club?.status ? true : false;
  const clubName = `${userData?.club?.name} ${clubPending ? '(수락 대기)' : ''}`;

  return (
    <div className="flex flex-col gap-[8px]">
      {userData ? (
        <>
          <Link
            href={`/user/${userData.id}`}
            className="flex items-center gap-[8px] text-headline-4"
          >
            {userData.username}
            {loginBtn && <ChevronRightIcon width={18} height={18} fill="#393939" />}
          </Link>
          <div
            className={cn(
              'flex gap-[8px] text-body-2 text-gray-80',
              `${clubPending && 'text-gray-50'}`,
            )}
          >
            <ClubIcon width={20} height={20} fill="#393939" />
            <span className="flex text-body-2">
              {userData.club ? `${clubName}` : '현재 소속된 클럽이 없습니다'}
            </span>
          </div>
          <div className="flex gap-[8px]">
            <TeamIcon width={20} height={20} fill="#393939" />
            <span className="flex text-body-2 text-gray-80">
              {userData.team ? userData.team.name : '현재 소속된 팀이 없습니다'}
            </span>
          </div>
        </>
      ) : (
        <span className="text-headline-4 text-gray-60">
          대회를 신청하려면 <br /> 로그인 해주세요
        </span>
      )}
    </div>
  );
};

export default UserInfoCard;
