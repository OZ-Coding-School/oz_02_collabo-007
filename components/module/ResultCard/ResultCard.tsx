import React from 'react';
import CrownIcon from '@/app/_asset/icons/crown.svg';
import StarIcon from '@/app/_asset/icons/star.svg';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import UserIcon from '@/app/_asset/icons/user.svg';

const ResultCard = ({
  userData,
  winner,
}: {
  userData: { username: string; imageUrl: string | null; clubName: string | null }[];
  winner?: boolean;
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[16px] rounded-[8px] px-[16px] py-[20px] shadow-card',
        `${winner && 'border-2 border-warning-60'}`,
      )}
    >
      <div className="flex items-center gap-[8px]">
        <div className="relative flex h-[24px] w-[24px] items-center justify-center">
          <StarIcon
            width={24}
            height={24}
            className={cn('absolute', `${winner ? 'fill-warning-60' : 'fill-gray-50'}`)}
          />
          <CrownIcon width={16} height={16} fill="#fff" className="absolute" />
        </div>
        <div className="text-headline-6">{winner ? '우승' : '준우승'}</div>
      </div>

      <div className="flex items-start gap-[12px] self-stretch">
        {userData.map(({ username, imageUrl, clubName }, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center justify-center gap-[8px]"
          >
            <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="user"
                  sizes="48px"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-30">
                  <UserIcon className="h-[40%] w-[40%] fill-gray-60" />
                </div>
              )}
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="text-sub-headline-2">{username}</div>
              <div className="text-body-3 text-gray-60">
                {clubName ? clubName : '무소속'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
