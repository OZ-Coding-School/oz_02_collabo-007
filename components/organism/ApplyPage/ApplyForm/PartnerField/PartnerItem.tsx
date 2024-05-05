import { cn } from '@/lib/utils/cn';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import xIcon from '@/app/_asset/icons/x.svg';

interface Props {
  name: string;
  clubName: string;
  image: StaticImageData;
  displayMode?: boolean;
}

const PartnerItem: FC<Props> = ({ name, clubName, image, displayMode = false }) => {
  return (
    <div
      className={cn(
        `${displayMode && 'bg-gray-20'}`,
        'flex w-full items-center gap-[12px] self-stretch rounded-[8px] px-[20px] py-[12px] ',
      )}
    >
      <div className="relative h-[32px] w-[32px] overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="w-[56px] h-[56px]"
          className="rounded-[8px] object-cover"
        />
      </div>
      <div className="flex flex-1 items-center gap-[4px] text-body-2 text-gray-80">
        <div>{name}</div>
        <div>({clubName})</div>
      </div>
      {displayMode && (
        <div>
          <Image src={xIcon} alt="del" width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default PartnerItem;
