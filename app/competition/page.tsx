import Navbar from '@/components/module/Navbar/Navbar';
import React from 'react';
import CompListSection from '@/components/module/CompListSection/CompListSection';
import CompListFilter from '@/components/organism/CompetitionPage/CompListFilter/CompListFilter';
import CompListOptionMenuButton from '@/components/module/CompListOptionMenuButton/CompListOptionMenuButton';

const COMP_CATEGORY = [
  { title: '전체' },
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '혼성 복식', gender: 'mix', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
];

const COMP_TIER = {
  name: 'tier',

  options: [
    { title: '전체' },
    { title: '개나리부', value: '개나리부' },
    { title: '국화부', value: '국화부' },
    { title: '브론즈', value: '브론즈' },
    { title: '실버', value: '실버' },
  ],
};

const COMP_STATUS = {
  name: 'status',
  defaultOption: '진행 전',
  options: [
    { title: '진행 전', value: '진행 전' },
    { title: '진행 중', value: '진행 중' },
    { title: '종료', value: '종료' },
  ],
};

const COMP_DATA = {
  name: 'date',
  defaultOption: '대회일 가까운 순',
  options: [
    { title: '대회일 가까운 순', value: 'closest' },
    { title: '대회일 먼 순', value: 'furthest' },
  ],
};

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { gender, type } = searchParams;
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-[16px] p-[20px]">
        <h1 className="text-headline-2 text-gray-100">대회</h1>
        <div className="no-scrollbar flex gap-[8px] overflow-x-scroll">
          {COMP_CATEGORY.map((option, index) => (
            <CompListOptionMenuButton
              pathName="/competition"
              query={{
                ...searchParams,
                title: option.title,
                gender: option.gender,
                type: option.type,
              }}
              variant="round"
              isSelected={gender === option.gender && type === option.type && true}
              title={option.title}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[12px] overflow-y-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex gap-[16px]">
          <CompListFilter filterOption={COMP_TIER} />
          <CompListFilter filterOption={COMP_STATUS} />
          <CompListFilter filterOption={COMP_DATA} />
        </div>
        <div className="flex flex-col">
          <CompListSection
            variant="flexCol"
            compStatus="전체"
            searchParams={searchParams}
            currentLocation="competition"
          />
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
