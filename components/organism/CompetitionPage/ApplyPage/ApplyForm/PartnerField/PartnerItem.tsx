import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import React from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import UserIcon from '@/app/_asset/icons/user.svg';

interface PartnerItemProps {
  name: string;
  clubName?: string;
  image: string | null;
  handleDelete?: () => void;
  displayMode?: boolean;
  status?: boolean;
}

const PartnerItem = ({
  name,
  clubName,
  image,
  handleDelete,
  displayMode = false,
  status = true,
}: PartnerItemProps) => {
  const Buttons = () => {
    if (displayMode) {
      return (
        <div onClick={handleDelete}>
          <XIcon width={20} height={20} fill="#393939" />
        </div>
      );
    }

    if (!status) {
      return (
        <div className="flex items-center justify-center px-[12px] py-[6px] text-gray-50">
          신청 불가
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center px-[12px] py-[6px]">선택</div>
    );
  };

  return (
    <div
      className={cn(
        'flex w-full items-center gap-[16px] self-stretch rounded-[8px]',
        `${displayMode && 'bg-gray-20'}`,
      )}
    >
      <div className="flex w-full flex-1 items-center gap-[12px] rounded-[8px]">
        <div className="relative h-[32px] w-[32px] overflow-hidden rounded-full">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes="w-[56px] h-[56px]"
              className="rounded-[8px] object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-30">
              <UserIcon className="h-[50%] w-[50%] fill-gray-60" />
            </div>
          )}
        </div>
        <div
          className={cn(
            'flex flex-1 items-center gap-[4px] text-body-2 text-gray-80',
            `${!status && 'text-gray-50'}`,
          )}
        >
          <div>{name}</div>
          {clubName && <div>{`(${clubName})`}</div>}
        </div>
      </div>

      <Buttons />
    </div>
  );
};

export default PartnerItem;
