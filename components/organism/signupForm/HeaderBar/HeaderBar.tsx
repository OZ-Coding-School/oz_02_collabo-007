'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import chevronIcon from '@/app/_asset/icons/chevron-left.svg';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  backBtn?: boolean;
  actionBtn?: React.ReactNode;
}

const HeaderBar: FC<Props> = ({ title, backBtn = false, actionBtn }) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center items-center gap-[16px] bg-white">
      <div className="w-[56px] h-[56px] p-[16px]">
        {backBtn && (
          <Image
            src={chevronIcon}
            alt="back"
            width={24}
            height={24}
            onClick={() => router.back()}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="flex-1 text-center text-headline-6">{title}</div>
      <div className="w-[56px] h-[56px] p-[16px]">{actionBtn && <>{actionBtn}</>}</div>
    </div>
  );
};

export default HeaderBar;
