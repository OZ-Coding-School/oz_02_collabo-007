import React from 'react';

const RankingInfoCard = () => {
  return (
    <div className="flex justify-between gap-[8px] py-[12px]">
      <span className="w-[24px]">5</span>
      <div className="flex w-[80px] gap-[8px]">
        <div className="h-[24px] w-[24px] rounded-[99px]  bg-gray-40"></div>
        <span>김형섭</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span>1,580</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span>라온테니스</span>
      </div>
    </div>
  );
};

export default RankingInfoCard;
