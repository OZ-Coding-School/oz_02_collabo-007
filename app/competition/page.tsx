import Navbar from '@/components/module/Navbar/Navbar';
import React from 'react';
import { data } from '../data';
import CompList from '@/components/module/CompList/CompList';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

const COMP_CATEGORY = [
  '남자 단식',
  '여자 단식',
  '남자 복식',
  '여자 복식',
  '혼성 복식',
  '팀',
];

const page = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-[16px] p-[20px]">
        <h1 className="text-headline-2 text-gray-100">대회</h1>
        <div className="no-scrollbar flex gap-[8px] overflow-x-scroll">
          {COMP_CATEGORY.map((category) => (
            <div className="flex items-center justify-center whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-body-2 text-gray-80">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col gap-[12px] border-t-[1px] border-gray-30 bg-gray-10  p-[20px]">
        <div className="flex gap-[16px]">
          <div className="flex gap-[4px]">
            <select name="tier" id="tier">
              <option value="">개나리부</option>
              <option value="">국화부</option>
            </select>
            <label htmlFor="tier">
              <DropdownIcon width={24} height={24} fill="#787878" />
            </label>
          </div>
          <div className="flex gap-[4px]">
            <select name="status" id="status">
              <option value="">진행 중</option>
              <option value="">진행 전</option>
              <option value="">종료</option>
            </select>
            <label htmlFor="status">
              <DropdownIcon width={24} height={24} fill="#787878" />
            </label>
          </div>
          <div className="flex gap-[4px]">
            <select name="date" id="date">
              <option value="">대회일 가까운 순</option>
              <option value="">대회일 먼 순</option>
            </select>
            <label htmlFor="date">
              <DropdownIcon width={24} height={24} fill="#787878" />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          {data.compList.comp.map((comp) => (
            <CompList variant="flexCol" compStatus="전체" />
          ))}
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
