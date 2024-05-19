import React from 'react';

const CompCardSkeleton = () => {
  return (
    <div className="flex min-w-full basis-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md">
      <div className="flex gap-[16px]">
        <div className="relative h-[88px] w-[88px] rounded-[8px] bg-gray-20"></div>
        <div className="flex w-[199px] flex-1 flex-col gap-[4px]">
          <div className="flex h-[24px] flex-1 bg-gray-20"></div>
          <div className="flex flex-col gap-[4px]">
            <div className="flex h-[16px] flex-1 bg-gray-20"></div>
            <div className="flex h-[16px] flex-1 bg-gray-20"></div>
            <div className="flex h-[16px] flex-1 bg-gray-20"></div>
          </div>
        </div>
      </div>
      <div className="flex h-[40px] flex-1 rounded-[8px] bg-gray-20"></div>
    </div>
  );
};

export default CompCardSkeleton;
