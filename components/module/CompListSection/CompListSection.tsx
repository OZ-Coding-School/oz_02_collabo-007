import Link from 'next/link';
import React, { Suspense } from 'react';
import CompList, { ISearchParams } from './CompList/CompList';
import CompListSkeleton from '@/components/core/Skeleton/CompListSkeleton';
import { COMP_LIST_SECTION_LINK } from '@/constants/competition';

interface CompListSectionProps {
  title?: string;
  variant?: 'flex' | 'flexCol' | null;
  currentLocation?: string | null;
  searchParams?: ISearchParams;
  competitionType: string;
}

const CompListSection = ({
  title,
  variant,
  searchParams,
  currentLocation,
  competitionType,
}: CompListSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      {title && (
        <div className={'flex items-center justify-between'}>
          <span className="text-headline-5 text-gray-100">{title}</span>
          <Link
            href={COMP_LIST_SECTION_LINK[title]}
            className="text-sub-headline-2 text-gray-60"
          >
            전체 목록 보기
          </Link>
        </div>
      )}
      <Suspense fallback={<CompListSkeleton title={title} variant={variant} />}>
        <CompList
          title={title}
          variant={variant}
          searchParams={searchParams}
          currentLocation={currentLocation}
          competitionType={competitionType}
        />
      </Suspense>
    </div>
  );
};

export default CompListSection;
