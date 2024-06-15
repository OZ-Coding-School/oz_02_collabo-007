import { UserRanking } from '@/@types/ranking';
import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';

const RankingInfoCard = ({ userRanking }: { userRanking: UserRanking }) => {
  return (
    <div className="flex items-center justify-between gap-[8px] py-[12px]">
      <span className="w-[24px]">{userRanking.rank}</span>
      <div className="jutify-center flex w-[80px] items-center gap-[8px]">
        <div className="relative h-[24px] w-[24px] overflow-hidden rounded-full">
          {userRanking.imageUrl == null ? (
            <div className="flex h-full w-full items-center justify-center bg-gray-30">
              <UserIcon className="h-[40%] w-[40%] fill-gray-60" />
            </div>
          ) : (
            <Image src={userRanking.imageUrl} alt="avatar" fill sizes="24px" />
          )}
        </div>
        <span>{userRanking.user.username}</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span>{userRanking.totalPoints}</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span>{userRanking.club ? userRanking.club.name : '무소속'}</span>
      </div>
    </div>
  );
};

export default RankingInfoCard;
