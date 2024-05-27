import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import Link from 'next/link';

interface CompListFilter {
  filterOption: { name: string; info: { title: string; value: string }[] };
  searchParams: { [key: string]: string };
}

const CompListFilter = ({ filterOption, searchParams }: CompListFilter) => {
  const { name, info } = filterOption;

  return (
    <div className="flex gap-[4px]">
      <select name={name} id={name}>
        {info.map((option, index) => (
          <option key={index} value={option.value}>
            <Link
              href={{
                pathname: `/competition`,
                query: { ...searchParams, [name]: option.value },
              }}
            >
              {option.title}
            </Link>
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
