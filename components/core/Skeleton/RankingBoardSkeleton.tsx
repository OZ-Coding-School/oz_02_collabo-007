import React from 'react';

const RankingBoardSkeleton = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="skeleton h-[18px] w-[70px] bg-gray-20"></div>
      <div className="flex h-[45px] w-full items-center justify-center rounded-[8px] border border-gray-20"></div>
      <div className="flex gap-[16px]">
        <div className="flex flex-1 flex-col gap-[8px]">
          <div className="flex flex-row gap-[16px]">
            <div className="skeleton flex h-[18px] w-[60px] gap-[4px] bg-gray-20 py-[4px]"></div>
            <div className="skeleton flex h-[18px] w-[70px] gap-[4px] bg-gray-20 py-[4px]"></div>
          </div>
          <div className="flex w-full items-center justify-center rounded-[8px] px-[12px] py-[12px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="skeleton mr-4 h-[12px] w-[10px] bg-gray-20"></div>
              <div className="flex w-[120px] items-center gap-[8px] ">
                <div className="skeleton h-[12px] w-[30px] bg-gray-20"></div>
              </div>
            </div>
            <div className="flex w-full flex-1 justify-end">
              <div className="skeleton h-[12px] w-[20px] bg-gray-20"></div>
              <div className="skeleton  ml-4 h-[12px] w-[120px] bg-gray-20"></div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 px-[12px] py-[12px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="skeleton mr-4 h-[18px] w-[10px] bg-gray-20"></div>
              <div className="flex w-[120px] items-center gap-[8px] ">
                <div className="skeleton relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
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
          <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 px-[12px] py-[12px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="skeleton mr-4 h-[18px] w-[10px] bg-gray-20"></div>
              <div className="flex w-[120px] items-center gap-[8px] ">
                <div className="skeleton relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
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
          <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 px-[12px] py-[12px]">
            <div className="flex items-center justify-between gap-[8px]">
              <div className="skeleton mr-4 h-[18px] w-[10px] bg-gray-20"></div>
              <div className="flex w-[120px] items-center gap-[8px] ">
                <div className="skeleton relative h-[24px] w-[24px] flex-shrink-0 overflow-hidden rounded-full">
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
        </div>
      </div>
    </div>
  );
};

export default RankingBoardSkeleton;
