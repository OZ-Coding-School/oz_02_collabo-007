import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import ResultCard from '@/components/module/ResultCard/ResultCard';
import React from 'react';

const page = () => {
  return (
    <div className="no-scrollbar flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="대회 결과" backBtn />

      <div className="flex w-full flex-col items-start gap-[16px] p-[20px]">
        <div className="text-headline-2">챔피언스리그</div>
        <div className="text-sub-headline-2">남자 복식 개나리부</div>
      </div>

      <div className="no-scrollbar flex flex-1 flex-col gap-[16px] overflow-scroll bg-gray-10 p-[20px]">
        <ResultCard winner />
        <ResultCard />
      </div>

      <div className="w-full p-[20px]">
        <Button label="대회 전체 결과 보기" />
      </div>
    </div>
  );
};

export default page;
