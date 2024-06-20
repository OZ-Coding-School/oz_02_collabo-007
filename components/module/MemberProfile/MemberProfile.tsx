import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserIcon from '@/app/_asset/icons/user.svg';

interface MemberProfileProps {
  id: number;
  name: string;
  image: string | null;
  teamName?: string | null;
}

const MemberProfile: FC<MemberProfileProps> = ({ id, name, image, teamName = null }) => {
  return (
    <Link
      href={`/user/${id}`}
      className="flex items-center gap-[8px] self-stretch py-[12px] text-body-2"
    >
      <div className="flex w-[120px] items-center gap-[12px]">
        <div className="relative h-[32px] w-[32px] flex-shrink-0 overflow-hidden rounded-full">
          {image ? (
            <Image
              src={image}
              alt="tennis"
              sizes="32px"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-30">
              <UserIcon className="h-[60%] w-[60%] fill-gray-60" />
            </div>
          )}
        </div>
        <div className="text-sub-headline-2">{name}</div>
      </div>
      <div className="flex-1 text-right">{teamName ? teamName : '-'}</div>
    </Link>
  );
};

export default MemberProfile;
