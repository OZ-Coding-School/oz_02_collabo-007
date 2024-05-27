import Navbar from '@/components/module/Navbar/Navbar';
import React from 'react';
import CompList from '@/components/module/CompListSection/CompListSection';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import Link from 'next/link';
import CompListFilter from '@/components/organism/CompetitionPage/CompListFilter/CompListFilter';

const COMP_CATEGORY = [
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '혼성 복식', gender: 'mix', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
];

const COMP_TIER = {
  name: 'tier',
  info: [
    { title: '개나리부', value: '개나리부' },
    { title: '국화부', value: '국화부' },
    { title: '브론즈', value: '브론즈' },
    { title: '실버', value: '실버' },
  ],
};

const COMP_STATUS = {
  name: 'status',
  info: [
    { title: '진행 전', value: '진행 전' },
    { title: '진행 중', value: '진행 중' },
    { title: '종료', value: '종료' },
  ],
};

const COMP_DATA = {
  name: 'date',
  info: [
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
            <Link
              href={{
                pathname: `/competition`,
                query: {
                  title: option.title,
                  gender: option.gender,
                  type: option.type,
                },
              }}
              className={`flex items-center justify-center whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-body-2 text-gray-80 ${gender === option.gender && type === option.type ? 'bg-primary-10 text-primary-60' : ''}`}
              key={index}
            >
              {option.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[12px] overflow-y-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex gap-[16px]">
          <CompListFilter filterOption={COMP_TIER} searchParams={searchParams} />
          <CompListFilter filterOption={COMP_STATUS} searchParams={searchParams} />
          <CompListFilter filterOption={COMP_DATA} searchParams={searchParams} />
        </div>
        <div className="flex flex-col">
          <CompList variant="flexCol" compStatus="전체" gender={gender} type={type} />
        </div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
