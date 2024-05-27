import React from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';

interface CompListFilter {
  filterOption: { name: string; info: { title: string; value: string }[] };
}

const CompListFilter = ({ filterOption }: CompListFilter) => {
  const { name, info } = filterOption;

  return (
    <div className="flex gap-[4px]">
      <select name={name} id={name}>
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
