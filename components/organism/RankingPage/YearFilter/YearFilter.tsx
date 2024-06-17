'use client';
import React from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import useQueryString from '@/lib/hook/useQueryString';

const YearFilter = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const INITIAL_YEAR = 2023;
  const { searchParams, handleChange } = useQueryString('year');

  const yearsArr = Array.from(
    { length: currentYear - INITIAL_YEAR + 1 },
    (_, index) => INITIAL_YEAR + index,
  ).reverse();

  return (
    <div className="relative flex gap-[4px] py-[6px] pl-[12px]">
      <select
        onChange={handleChange}
        value={searchParams.get('year') ?? ''}
        className="z-10 w-full appearance-none pr-[24px] font-pretendard text-sub-headline-2 text-gray-80 outline-none"
      >
        {yearsArr.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <DropdownIcon className="absolute right-0 top-1/2 h-[24px] w-[24px] -translate-y-1/2 fill-gray-60" />
    </div>
  );
};

export default YearFilter;
