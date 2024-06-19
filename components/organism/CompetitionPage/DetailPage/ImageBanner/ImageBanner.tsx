import React from 'react';
import Image from 'next/image';
import FlagIcon from '@/app/_asset/icons/flag.svg';

const ImageBanner = ({ img }: { img: string | null }) => {
  return (
    <div className="relative h-[200px] w-full flex-shrink-0">
      {img ? (
        <Image
          src={img}
          alt="compImg"
          sizes="200px"
          fill
          className="h-full w-full object-cover"
          priority
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-30">
          <FlagIcon width={40} height={40} fill="#787878" />
        </div>
      )}
    </div>
  );
};

export default ImageBanner;
