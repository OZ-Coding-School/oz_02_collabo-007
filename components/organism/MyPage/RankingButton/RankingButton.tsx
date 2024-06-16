import React from 'react';
import CheckIcon from '@/app/_asset/icons/check.svg';

const RankingButton = () => {
  return (
    <div className="flex w-full justify-between rounded-[8px] border-[1px] border-gray-30 p-[16px] text-gray-60">
      <div className="flex flex-col gap-[8px]">
        <div className="text-sub-headline-2">남자 단식 국화부</div>
        <div className="text-headline-4">5위</div>
      </div>
      <div className="flex items-center gap-[4px]">
        <CheckIcon width={18} height={18} fill="#FC5214" />
        <div className="text-sub-headline-2 text-primary-60">선택됨</div>
      </div>
    </div>
  );
};

export default RankingButton;
