'use client';
import { UserRanking } from '@/@types/ranking';
import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import { cn } from '@/lib/utils/cn';

const RankingInfoCard = ({ userRanking }: { userRanking: UserRanking }) => {
  const ranker = userRanking.rank < 4 ? true : false;

  return (
    <>
      <div className="flex items-center justify-between gap-[8px] py-[12px] text-gray-80">
        <div
          className={cn(
            'w-[24px]',
            `${ranker ? 'text-[14px] font-[700] leading-[20px] text-primary-60' : 'text-body-2'}`,
          )}
        >
          {userRanking.rank}
        </div>
        <div className="flex w-[100px] items-center gap-[8px] truncate">
          <div className="relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
            {userRanking.imageUrl == null ? (
              <div className="flex h-full w-full items-center justify-center bg-gray-30">
                <UserIcon className="h-[60%] w-[60%] fill-gray-60" />
              </div>
            ) : (
              <Image src={userRanking.imageUrl} alt="avatar" fill sizes="24px" />
            )}
          </div>
          <div className="truncate text-sub-headline-2">{userRanking.user.username}</div>
        </div>
        <div className="flex flex-1 justify-end text-body-2">
          <div>{userRanking.totalPoints.toLocaleString()}</div>
        </div>
        <div className="flex flex-1 justify-end text-body-2">
          <div>{userRanking.club ? userRanking.club.name : '무소속'}</div>
        </div>
      </div>
    </>
  );
};

export default RankingInfoCard;
