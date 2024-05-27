'use client';
import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

interface CompListFilter {
  filterOption: { name: string; info: { title: string; value: string }[] };
}

const CompListFilter = ({ filterOption }: CompListFilter) => {
  const { name, info } = filterOption;
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: event.target.value },
    });
  };

  return (
    <div className="flex gap-[4px]">
      <select name={name} id={name} onChange={handleChange}>
        {info.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <label htmlFor={name}>
        <DropdownIcon width={24} height={24} fill="#787878" />
      </label>
    </div>
  );
};

export default CompListFilter;
