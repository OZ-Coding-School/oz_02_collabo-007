import React from 'react';
import Image from 'next/image';
import FlagIcon from '@/app/_asset/icons/flag.svg';

const ImageBanner = ({ img }: { img: string | null }) => {
  return (
    <div className="relative h-[200px] w-full">
      {img ? (
        <Image
          src={img}
          alt="compImg"
          fill
          sizes="200px"
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
