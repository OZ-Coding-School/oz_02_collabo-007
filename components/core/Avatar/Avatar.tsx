import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  image: StaticImageData;
  name: string;
}

const Avatar: FC<AvatarProps> = ({ image, name }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-[8px]">
      <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
        <Image src={image} alt="avatar" fill sizes="64px" />
      </div>
      <div className="w-full text-center text-sub-headline-2">{name}</div>
    </div>
  );
};

export default Avatar;
