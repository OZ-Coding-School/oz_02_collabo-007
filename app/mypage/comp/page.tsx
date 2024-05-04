'use client';

import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompList from '@/components/organism/CompList/CompList';
import React, { useState } from 'react';

export const COMPLIST_OPTIONS = ['전체', '진행 전', '진행 중', '종료'];

const page = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const changeOption = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="참가 신청한 대회" backBtn={true} />
      <div className="flex gap-[4px] px-[20px] pt-[12px]">
        {COMPLIST_OPTIONS.map((option) => (
          <div className="flex h-[32px] flex-1 justify-center text-gray-80">{option}</div>
        ))}
      </div>
      <div className="flex flex-1 border-t-[1px] border-gray-30 bg-gray-10">
        <CompList />
      </div>
    </div>
  );
};

export default page;
