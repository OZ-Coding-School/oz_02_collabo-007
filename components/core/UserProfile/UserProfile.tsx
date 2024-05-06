import React, { FC } from 'react';
import tennisImg from '@/public/tennis.jpeg';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils/cn';

interface UserProfileProps {
  name: string;
  rank: number;
  image: StaticImageData;
  score: string;
  team: string;
}

const UserProfile: FC<UserProfileProps> = ({ name, rank, image, score, team }) => {
  return (
    <div className="flex items-center gap-[8px] self-stretch py-[12px] text-body-2">
      <div
        className={cn(
          'w-[24px] text-headline-7 text-gray-60',
          `${rank <= 3 && 'text-primary-60'}`,
        )}
      >
        {rank}
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="relative h-[32px] w-[32px]">
          <Image src={image} alt="tennis" fill sizes="32px" className="rounded-full" />
        </div>
        <div className="text-sub-headline-2">{name}</div>
      </div>
      <div className="flex-1 text-right">{score}</div>
      <div className="flex-1 text-right">{team}</div>
    </div>
  );
};

export default UserProfile;
