import React from 'react';
import Image from 'next/image';

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
        <div className="h-full w-full bg-gray-30"></div>
      )}
    </div>
  );
};

export default ImageBanner;
