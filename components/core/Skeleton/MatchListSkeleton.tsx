import React from 'react';

const MatchListSkeleton = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-[16px] border-t-[1px] border-gray-30 bg-gray-10 px-[20px] py-[16px]">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-start gap-[12px] rounded-[8px] bg-white p-[16px] shadow-card"
        >
          <div className="skeleton h-[16px] w-[50px] bg-gray-20"></div>
          <div className="skeleton h-[24px] w-full flex-col bg-gray-20"></div>
          <div className="skeleton h-[24px] w-full flex-col bg-gray-20"></div>
        </div>
      ))}
    </div>
  );
};

export default MatchListSkeleton;
