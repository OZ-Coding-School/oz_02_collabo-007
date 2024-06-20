import React, { FC } from 'react';
import Image from 'next/image';
import UserIcon from '@/app/_asset/icons/user.svg';

interface AvatarProps {
  name?: string;
  image?: string | null;
}

const Avatar: FC<AvatarProps> = ({ image = null, name = null }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-[8px]">
      <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
        {image == null ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-30">
            <UserIcon className="h-[40%] w-[40%] fill-gray-60" />
          </div>
        ) : (
          <Image
            src={image}
            alt="avatar"
            sizes="64px"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      {name && <div className="w-full text-center text-sub-headline-2">{name}</div>}
    </div>
  );
};

export default Avatar;
