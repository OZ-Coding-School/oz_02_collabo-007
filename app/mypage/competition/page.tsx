'use client';

import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompList from '@/components/module/CompListSection/CompListSection';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const COMPLIST_OPTIONS = ['전체', '진행 전', '진행 중', '종료'];

const page = () => {
  const searchParams = useSearchParams();
  const compStatus = searchParams.get('status');

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="sticky top-0 z-10">
        <HeaderBar title="참가 신청한 대회" backBtn={true} />
        <div className={`flex gap-[4px] bg-white px-[20px] pt-[12px]`}>
          {COMPLIST_OPTIONS.map((option, index) => (
            <Link
              href={{ pathname: `/mypage/competition`, query: { status: option } }}
              className={`flex h-[32px] flex-1 items-center justify-center text-body-2 ${compStatus === option ? 'border-b-[2px] border-primary-60 text-primary-60' : ''}`}
              key={index}
            >
              {option}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-1 border-t-[1px] border-gray-30 bg-gray-10  p-[20px]">
        <CompList compStatus={compStatus} variant="flexCol" />
      </div>
    </div>
  );
};

export default page;
