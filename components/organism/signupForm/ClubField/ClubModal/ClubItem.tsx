import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface Props {
  name: string;
  address: string;
  image: StaticImageData;
}

const ClubItem: FC<Props> = ({ name, address, image }) => {
  return (
    <div
      className="w-full p-[12px] flex items-center gap-[16px] self-stretch"
      style={{ boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)' }}
    >
      <div className="relative w-[56px] h-[56px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="w-[56px] h-[56px]"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-[4px]">
        <div className="text-headline-6 text-gray-100">{name}</div>
        <div className="text-body-3 text-gray-80">{address}</div>
      </div>
    </div>
  );
};

export default ClubItem;
