'use client';
import React, { ChangeEvent, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

interface CompListFilter {
  filterOption: {
    name: string;
    options: readonly { title: string; value: string }[];
  };
}

const CompListFilter = ({ filterOption }: CompListFilter) => {
  const { name, options } = filterOption;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname + '?' + createQueryString(name, event.target.value));
  };

  return (
    <div className="relative flex gap-[4px]">
      <select
        name={name}
        id={name}
        onChange={handleChange}
        value={searchParams.get(name) ?? ''}
        className="z-10 w-full appearance-none pr-[24px] text-sub-headline-2 text-gray-80 outline-none"
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
