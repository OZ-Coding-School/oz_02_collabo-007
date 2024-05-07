import { cn } from '@/lib/utils/cn';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';

interface Props {
  name: string;
  address: string;
  image: StaticImageData;
  displayMode?: boolean;
}

const ClubItem: FC<Props> = ({ name, address, image, displayMode = false }) => {
  return (
    <div
      className={cn(
        `${displayMode ? 'bg-gray-20' : 'bg-white'}`,
        'flex w-full items-center gap-[16px] self-stretch rounded-[8px] p-[12px] shadow-card',
      )}
    >
      <div className="relative h-[56px] w-[56px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="w-[56px] h-[56px]"
          className="rounded-[8px] object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-[4px]">
        <div className="text-headline-6 text-gray-100">{name}</div>
        <div className="text-body-3 text-gray-80">{address}</div>
      </div>
      {displayMode && (
        <div>
          <XIcon width={20} height={20} fill="#393939" />
        </div>
      )}
    </div>
  );
};

export default ClubItem;