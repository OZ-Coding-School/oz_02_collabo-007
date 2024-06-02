import React from 'react';

const CompDetailInfoSkeleton = () => {
  return (
    <div className="flex h-[full] w-[full] flex-col gap-[20px]">
      <div className="skeleton h-[30px] w-[250px] rounded-[2px] bg-gray-20"></div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[10px]">
          <div className=" skeleton h-[16px] w-[16px] rounded-[2px] bg-gray-20"></div>
          <div className=" skeleton h-[16px] w-[200px] rounded-[2px] bg-gray-20"></div>
        </div>
        <div className="flex gap-[10px]">
          <div className=" skeleton h-[16px] w-[16px] rounded-[2px] bg-gray-20"></div>
          <div className=" skeleton h-[16px] w-[250px] rounded-[2px] bg-gray-20"></div>
        </div>
        <div className="flex gap-[10px]">
          <div className=" skeleton h-[16px] w-[16px] rounded-[2px] bg-gray-20"></div>
          <div className=" skeleton h-[16px] w-[180px] rounded-[2px] bg-gray-20"></div>
        </div>
        <div className="flex gap-[10px]">
          <div className=" skeleton h-[16px] w-[16px] rounded-[2px] bg-gray-20"></div>
          <div className=" skeleton h-[16px] w-[280px] rounded-[2px] bg-gray-20"></div>
        </div>
      </div>
    </div>
  );
};

export default CompDetailInfoSkeleton;
