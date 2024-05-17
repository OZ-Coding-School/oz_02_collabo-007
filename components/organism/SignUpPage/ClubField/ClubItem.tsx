import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import React, { FC } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';

export interface ClubItemProps {
  name: string;
  address: string;
  image: string | null;
  displayMode?: boolean;
  handleDelete?: () => void;
}

const ClubItem: FC<ClubItemProps> = ({
  name,
  address,
  image = null,
  displayMode = false,
  handleDelete,
}) => {
  return (
    <div
      className={cn(
        `${displayMode ? 'bg-gray-20' : 'bg-white'}`,
        'flex h-full w-full items-center gap-[16px]',
      )}
    >
      <div className="relative h-[56px] w-[56px]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="w-[56px] h-[56px]"
            className="rounded-[8px] object-cover"
          />
        ) : (
          <div className="h-full w-full rounded-[8px] bg-gray-30" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-[4px]">
        <div className="text-headline-6 text-gray-100">{name}</div>
        <div className="text-body-3 text-gray-80">{address}</div>
      </div>
      {displayMode && (
        <div onClick={handleDelete}>
          <XIcon width={20} height={20} fill="#393939" />
        </div>
      )}
    </div>
  );
};

export default ClubItem;
