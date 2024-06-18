import React from 'react';

const RecentRecordSectionSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-[12px] self-stretch">
      <div className="flex flex-col items-start gap-[6px] self-stretch">
        <div className="skeleton h-[20px] w-[180px] bg-gray-20"></div>
        <div className="flex items-center ">
          <div className="skeleton h-[10px] w-[300px] bg-gray-20"></div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[16px]">
        <div className="relative flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-xl">
          <div className="skeleton h-[12px] w-[70px] bg-gray-20"></div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[70px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[90px] bg-gray-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[16px]">
        <div className="relative flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-xl">
          <div className="skeleton h-[12px] w-[70px] bg-gray-20"></div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[70px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[90px] bg-gray-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[16px]">
        <div className="relative flex flex-col items-start gap-[12px] self-stretch rounded-[8px] bg-white p-[16px] shadow-xl">
          <div className="skeleton h-[12px] w-[70px] bg-gray-20"></div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[120px] bg-gray-20"></div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="skeleton h-[18px] w-[70px] bg-gray-20"></div>
              <div className="skeleton h-[18px] w-[90px] bg-gray-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRecordSectionSkeleton;
