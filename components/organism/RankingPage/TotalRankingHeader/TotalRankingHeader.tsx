import Input from '@/components/core/Input/Input';
import React from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';

const TotalRankingHeader = () => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <div className="w-full text-headline-6">전체랭킹</div>
      <div className="relative">
        <SearchIcon className="absolute left-[12px] top-[13px] z-50 h-[20px] w-[20px] fill-gray-50" />
        <Input
          placeholder="남자 단식 선수 검색"
          className=" border-gray-30 py-[10px] pl-[44px] pr-[12px]"
        />
      </div>
    </div>
  );
};

export default TotalRankingHeader;
