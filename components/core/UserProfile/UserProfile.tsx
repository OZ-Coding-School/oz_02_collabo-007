import React, { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';

interface UserProfileProps {
  id: number;
  name: string;
  rank?: number | null;
  image?: string | null;
  score?: string | null;
  teamName?: string | null;
}

const UserProfile: FC<UserProfileProps> = ({
  id,
  name,
  rank = null,
  image = null,
  score = null,
  teamName = null,
}) => {
  return (
    <Link
      href={`/user/${id}`}
      className="flex items-center gap-[8px] self-stretch py-[12px] text-body-2"
    >
      <div
        className={cn(
          'w-[24px] text-headline-7 text-gray-60',
          `${rank && rank <= 3 && 'text-primary-60'}`,
        )}
      >
        {rank ? rank : '-'}
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="relative h-[32px] w-[32px] overflow-hidden rounded-full">
          {image ? (
            <Image src={image} alt="tennis" fill sizes="32px" />
          ) : (
            <div className="h-full w-full bg-gray-30"></div>
          )}
        </div>
        <div className="text-sub-headline-2">{name}</div>
      </div>
      <div className="flex-1 text-right">{score ? score : '-'}</div>
      <div className="flex-1 text-right">{teamName ? teamName : '-'}</div>
    </Link>
  );
};

export default UserProfile;
