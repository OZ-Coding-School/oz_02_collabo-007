import React, { FC } from 'react';
import Image from 'next/image';

interface InfoBannerProps {
  name: string;
  description: string;
  imageUrl?: string | null;
}

const InfoBanner: FC<InfoBannerProps> = ({ name, description, imageUrl = null }) => {
  return (
    <div className="flex justify-start gap-[20px] self-stretch">
      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="text-headline-4">{name}</div>
        <div className="text-body-2 text-gray-80">{description}</div>
      </div>
      <div className="relative h-[80px] w-[80px] overflow-hidden rounded-[8px]">
        {imageUrl === null ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-30"></div>
        ) : (
          <Image
            src={imageUrl}
            alt="tennis"
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default InfoBanner;
