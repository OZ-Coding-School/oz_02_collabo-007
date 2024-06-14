import type { Competition } from '@/@types/competition';
import { getCompData } from '@/app/_actions/getCompData';
import CompCard from '@/components/module/CompCard/CompCard';
import { cn } from '@/lib/utils/cn';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

export const CompListVariants = cva(`no-scrollbar`, {
  variants: {
    variant: {
      horizontal:
        'flex w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll pb-[10px]',
      vertical: 'flex flex-col w-full gap-[16px]',
    },
  },
});

const HomeCompInfo = async ({ isUser }: { isUser: boolean }) => {
  const compData: Competition[] | { detail: string } = await getCompData({}, 4);
  const AvailableCompData = ({ compData }: { compData: Competition[] }) => {
    const availableCompData = compData.filter((comp) =>
      isUser ? comp.status === 'Registration Available' : comp,
    );

    if (availableCompData.length === 0)
      return (
        <div className="flex min-w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white p-[16px] text-gray-60 shadow-md">
          신청 가능한 대회가 없습니다.
        </div>
      );

    return (
      <>
        {availableCompData.map((comp) => (
          <CompCard key={comp.id} comp={comp} status="all" />
        ))}
      </>
    );
  };

  return (
    <div className="flex w-full flex-col gap-[12px]">
      <div className={'flex items-center justify-between'}>
        <span className="text-headline-5 text-gray-100">대회 정보</span>
        <Link
          href={`/competition/?status=before`}
          className="text-sub-headline-2 text-gray-60"
        >
          전체 목록 보기
        </Link>
      </div>

      <div
        className={cn(CompListVariants({ variant: isUser ? 'horizontal' : 'vertical' }))}
      >
        {Array.isArray(compData) ? (
          <AvailableCompData compData={compData} />
        ) : (
          <div className="flex min-w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white p-[16px] text-gray-60 shadow-md">
            {compData.detail && compData.detail}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCompInfo;
