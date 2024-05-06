import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import tennisImg from '@/public/tennis.jpeg';

interface InfoBannerProps {
  name: string;
  description: string;
  image: StaticImageData;
}

const InfoBanner: FC<InfoBannerProps> = ({ name, description, image }) => {
  return (
    <div className="flex justify-start gap-[20px] self-stretch">
      <div className="flex flex-1 flex-col gap-[8px]">
        <div className="text-headline-4">{name}</div>
        <div className="text-body-2 text-gray-80">{description}</div>
      </div>
      <div className="relative h-[80px] w-[80px] overflow-hidden rounded-[8px]">
        <Image src={image} alt="tennis" fill sizes="80px" />
      </div>
    </div>
  );
};

export default InfoBanner;
