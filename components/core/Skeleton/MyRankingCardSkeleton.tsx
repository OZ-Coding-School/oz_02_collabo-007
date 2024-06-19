import React from 'react';

const MyRankingCardSkeleton = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 bg-gray-10 px-[12px] py-[12px]">
      <div className="flex items-center justify-between gap-[8px]">
        <div className="skeleton mr-4 h-[18px] w-[10px] bg-gray-20"></div>
        <div className="flex w-[120px] items-center gap-[8px] ">
          <div className="relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
            <div className="flex h-full w-full items-center  bg-gray-30"></div>
          </div>
          <div className="skeleton h-[18px] w-[70px] bg-gray-20"></div>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-end">
        <div className="skeleton h-[18px] w-[20px] bg-gray-20"></div>
        <div className="skeleton  ml-4 h-[18px] w-[120px] bg-gray-20"></div>
      </div>
    </div>
  );
};

export default MyRankingCardSkeleton;
