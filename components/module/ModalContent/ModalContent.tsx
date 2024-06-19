'use client';

import React, { useEffect, useRef, useState } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import useDebounce from '@/lib/hook/useDebounce';

export interface ModalContentProps {
  type: string;
  label: string;
  handleCloseModal: () => void;
  children: (props: string) => React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({
  type,
  label,
  handleCloseModal,
  children,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce<string>(searchValue, 500);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 500);
  }, []);

  const ModalActionBtn = () => {
    return (
      <XIcon
        width={24}
        height={24}
        fill="#393939"
        onClick={() => handleCloseModal()}
        className="cursor-pointer"
      />
    );
  };

  return (
    <>
      <HeaderBar title={label} actionBtn={<ModalActionBtn />} />

      <div className="relative flex h-auto w-full flex-col gap-[10px] self-stretch bg-white px-[20px] py-[16px]">
        <Input
          name={`${type}Search`}
          placeholder={label}
          className="pl-[44px]"
          value={searchValue}
          ref={searchInputRef}
          onChange={(e) => setSearchValue(() => e.target.value)}
        />

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[32px] top-[26px]"
        />
      </div>

      {children(debounceSearchValue)}
    </>
  );
};

export default ModalContent;
