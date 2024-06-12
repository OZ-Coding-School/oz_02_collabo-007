import React from 'react';
import CompCardSkeleton from './CompCardSkeleton';

const CompListSkeleton = ({ title }: { title?: string }) => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      {title && (
        <div className="flex items-center justify-between">
          <span className="text-headline-5 text-gray-100">{title}</span>
          <div className="text-sub-headline-2 text-gray-60">전체 목록 보기</div>
        </div>
      )}
      <div>
        <CompCardSkeleton title={title} />
      </div>
    </div>
  );
};

export default CompListSkeleton;
