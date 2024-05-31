import React from 'react';

const CompCardSkeleton = ({ title }: { title?: string }) => {
  return (
    <div className="flex min-w-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md">
      <div className="flex gap-[16px]">
        <div className="skeleton relative h-[88px] w-[88px] rounded-[8px] bg-gray-20"></div>
        <div className="flex w-[199px] flex-1 flex-col gap-[4px]">
          <div className="skeleton h-[24px] bg-gray-20"></div>
          <div className="flex flex-col gap-[4px]">
            <div className="skeleton h-[16px] bg-gray-20"></div>
            <div className="skeleton h-[16px] bg-gray-20"></div>
            <div className="skeleton h-[16px] bg-gray-20"></div>
          </div>
        </div>
      </div>
      {title !== '대회 정보' && (
        <div className="skeleton flex h-[40px] w-full rounded-[8px] bg-gray-20"></div>
      )}
    </div>
  );
};

export default CompCardSkeleton;
