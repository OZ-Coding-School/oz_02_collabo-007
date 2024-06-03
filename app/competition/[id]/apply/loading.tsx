import CompDetailInfoSkeleton from '@/components/core/Skeleton/CompDetailInfoSkeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="no-scrollbar flex flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
      <div className="flex bg-white px-[20px] py-[24px]">
        <div className="flex w-full flex-col gap-[16px]">
          <CompDetailInfoSkeleton />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full flex-1 flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <div className="skeleton h-[24px] w-[150px]"></div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <div className="skeleton h-[20px] w-[80px]"></div>
              <div className="skeleton h-[40px] w-full"></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="skeleton h-[20px] w-[80px]"></div>
              <div className="skeleton h-[40px] w-full"></div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="skeleton h-[20px] w-[80px]"></div>
              <div className="skeleton h-[40px] w-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-[20px]">
          <div className="skeleton h-[48px] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
