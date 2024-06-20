import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import React, { FC } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';

export interface ClubItemProps {
  name: string;
  address: string;
  image: string | null;
  isChanged?: boolean;
  displayMode?: boolean;
  handleDelete?: () => void;
}

const ClubItem: FC<ClubItemProps> = ({
  name,
  address,
  image = null,
  isChanged = true,
  displayMode = false,
  handleDelete,
}) => {
  return (
    <div
      className={cn(
        `${displayMode ? 'bg-gray-20' : 'bg-white'}`,
        'flex h-full w-full flex-col items-center gap-[12px]',
      )}
    >
      <div className="flex w-full items-center gap-[16px]">
        <div className="relative h-[56px] w-[56px]">
          {image ? (
            <Image
              src={image}
              alt={name}
              sizes="w-[56px] h-[56px]"
              fill
              className="rounded-[8px] object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full rounded-[8px] bg-gray-30" />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center gap-[4px]">
          <div className="text-headline-6 text-gray-100">{name}</div>
          <div className="text-body-3 text-gray-80">{address}</div>
        </div>
        {displayMode && isChanged && (
          <div onClick={handleDelete}>
            <XIcon width={20} height={20} fill="#393939" />
          </div>
        )}
      </div>
      {!isChanged && (
        <>
          <div className="h-[1px] w-full bg-gray-30" />
          <div
            onClick={handleDelete}
            className="flex w-full items-center justify-end text-sub-headline-2 text-error-60"
          >
            클럽 탈퇴하기
          </div>
        </>
      )}
    </div>
  );
};

export default ClubItem;
