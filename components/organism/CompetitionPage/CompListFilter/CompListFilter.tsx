'use client';
import { useState, useRef, useEffect } from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import Link from 'next/link';

interface CompListFilter {
  filterOption: {
    name: string;
    options: { title: string; value: string }[];
    defaultOption: string;
  };
  searchParams: { [key: string]: string };
}

const CompListFilter = ({ filterOption, searchParams }: CompListFilter) => {
  const { name, options, defaultOption } = filterOption;

  const [selectedValue, setSelectedValue] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (title: string) => {
    setSelectedValue(title);
    setIsOpen(false);
  };

  const handleFilterButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionListClose = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOptionListClose);

    return () => {
      document.removeEventListener('click', handleOptionListClose);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={handleFilterButtonClick}
        className="width-full flex gap-[4px]"
      >
        {selectedValue}
        <DropdownIcon
          width={24}
          height={24}
          fill="#787878"
          className={isOpen ? 'rotate-180' : 'rotate-0'}
        />
      </button>
      {isOpen && (
        <ul className="width-full absolute z-10 bg-white">
          {options.map((option, index) => (
            <li
              key={index}
              value={option.value}
              onClick={() => handleOptionClick(option.title)}
              className="hover:text-primary-60"
            >
              <Link
                href={{
                  pathname: `/competition`,
                  query: {
                    ...searchParams,
                    [name]: option.value,
                  },
                }}
                replace
              >
                {option.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompListFilter;
