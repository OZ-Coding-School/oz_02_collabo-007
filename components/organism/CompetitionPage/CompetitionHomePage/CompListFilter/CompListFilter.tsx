'use client';
import React from 'react';

import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import useQueryString from '@/lib/hook/useQueryString';

interface CompListFilter {
  filterOption: {
    name: string;
    options: readonly { title: string; value: string }[];
  };
}

const CompListFilter = ({ filterOption }: CompListFilter) => {
  const { name, options } = filterOption;
  const { handleChange, searchParams } = useQueryString(name);

  return (
    <div className="relative flex gap-[4px]">
      <select
        name={name}
        id={name}
        onChange={handleChange}
        value={searchParams.get(name) ?? ''}
        className="z-10 w-full appearance-none pr-[24px] font-pretendard text-sub-headline-2 text-gray-80 outline-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <label htmlFor={name} className="absolute right-0 top-1/2 -translate-y-1/2">
        <DropdownIcon width={24} height={24} fill="#787878" />
      </label>
    </div>
  );
};

export default CompListFilter;
