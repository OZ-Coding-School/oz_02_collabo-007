import Link from 'next/link';
import React, { HTMLAttributes, Suspense } from 'react';
import CompList from './CompList/CompList';
import CompListSkeleton from '@/components/core/Skeleton/CompListSkeleton';

const CompListSection = ({
  title,
  compStatus,
  variant,
}: {
  title?: string;
  compStatus?: string | null;
  variant?: 'flex' | 'flexCol' | null;
}) => {
  console.log(compStatus);
  return (
    <div className="flex w-full flex-col gap-[12px]">
      {title && (
        <div className={'flex items-center justify-between'}>
          <span className="text-headline-5 text-gray-100">{title}</span>
          <Link href="/#" className="text-sub-headline-2 text-gray-60">
            전체 목록 보기
          </Link>
        </div>
      )}
      <Suspense fallback={<CompListSkeleton title={title} variant={variant} />}>
        {/* @ts-expect-error Async Server Component */}
        <CompList title={title} compStatus={compStatus} variant={variant} />
      </Suspense>
    </div>
  );
};

export default CompListSection;
