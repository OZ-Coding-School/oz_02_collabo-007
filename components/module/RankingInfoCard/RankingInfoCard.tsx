'use client';

import type { Ranking } from '@/@types/ranking';
import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

const RankingInfoCard = ({ rankingData }: { rankingData: Ranking }) => {
  const ranker = rankingData.rank < 4 ? true : false;

  const href =
    'team' in rankingData
      ? `/team/${rankingData.team.id}`
      : `/user/${rankingData.user.id}`;

  return (
    <>
      <Link
        href={href}
        className="flex items-center justify-between gap-[8px] py-[12px] text-gray-80"
      >
        <div
          className={cn(
            'w-[24px]',
            `${ranker ? 'text-[14px] font-[700] leading-[20px] text-primary-60' : 'text-body-2'}`,
          )}
        >
          {rankingData.rank}
        </div>
        <div className="flex w-[120px] items-center gap-[8px] truncate">
          <div className="relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
            {rankingData.imageUrl == null ? (
              <div className="flex h-full w-full items-center justify-center bg-gray-30">
                <UserIcon className="h-[60%] w-[60%] fill-gray-60" />
              </div>
            ) : (
              <Image
                src={rankingData.imageUrl}
                alt="avatar"
                sizes="24px"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          {'team' in rankingData ? (
            <div className="truncate text-sub-headline-2">{rankingData.club.name}</div>
          ) : (
            <div className="truncate text-sub-headline-2">
              {rankingData.user.username}
            </div>
          )}
        </div>
        <div className="w-full flex-1 truncate text-right text-body-2">
          {rankingData.totalPoints.toLocaleString()}
        </div>
        <div className="w-full flex-1 truncate text-right text-body-2">
          {rankingData.club ? rankingData.club.name : '무소속'}
        </div>
      </Link>
    </>
  );
};

export default RankingInfoCard;
