import React from 'react';

const CompDetailSkeleton = () => {
  return (
    <>
      <div className="skeleton h-[200px] w-full bg-gray-20"></div>
      <div className="no-scrollbar flex flex-1 flex-col items-start gap-[26px] overflow-scroll px-[20px] py-[24px]">
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
        <div className="flex flex-col gap-[14px]">
          <div className=" skeleton h-[25px] w-[140px] rounded-[2px] bg-gray-20"></div>
          <div className="flex flex-col gap-[8px]">
            <div className=" skeleton h-[16px] w-[300px] rounded-[2px] bg-gray-20"></div>
            <div className=" skeleton h-[16px] w-[240px] rounded-[2px] bg-gray-20"></div>
          </div>
        </div>
        <div className=" skeleton h-[25px] w-[220px] rounded-[2px] bg-gray-20"></div>
        <div className=" skeleton h-[25px] w-[130px] rounded-[2px] bg-gray-20"></div>
      </div>
      <div className="h-[90px] w-full p-[20px]">
        <div className=" skeleton h-full w-full rounded-[8px] bg-gray-20"></div>
      </div>
    </>
  );
};

export default CompDetailSkeleton;
