'use client';

import React, { FC } from 'react';
import ChevronIcon from '@/app/_asset/icons/chevron-left.svg';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  backBtn?: boolean;
  actionBtn?: React.ReactNode;
}

const HeaderBar: FC<Props> = ({ title, backBtn = false, actionBtn }) => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center gap-[16px] bg-white">
      <div className="h-[56px] w-[56px] p-[16px]">
        {backBtn && (
          <ChevronIcon
            width={24}
            height={24}
            fill="#121212"
            onClick={() => router.back()}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="flex-1 text-center text-headline-6">{title}</div>
      <div className="h-[56px] w-[56px] p-[16px]">{actionBtn && <>{actionBtn}</>}</div>
    </div>
  );
};

export default HeaderBar;
