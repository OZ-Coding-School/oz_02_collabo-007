import React from 'react';

const UserProfileSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-[24px] px-[20px] py-[24px]">
        <div className="flex w-full items-center justify-between gap-[8px]">
          <div className="flex flex-col gap-[8px]">
            <div className="skeleton h-[18px] w-[80px] bg-gray-20"></div>
            <div className="skeleton h-[16px] w-[180px] bg-gray-20"></div>
            <div className="skeleton h-[16px] w-[280px] bg-gray-20"></div>
          </div>
          <div className="skeleton h-[80px] w-[80px] rounded-[50%] bg-gray-20"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSkeleton;
