import React from 'react';
import testImg from '@/public/tennis.jpeg';
import Image from 'next/image';

const ImageBanner = () => {
  return (
    <div className="relative h-[200px] w-full">
      <Image
        src={testImg}
        alt="compImg"
        fill
        sizes="200px"
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
};

export default ImageBanner;
