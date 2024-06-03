'use client';

import React, { useEffect, useRef, useState } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { cn } from '@/lib/utils/cn';
import useDebounce from '@/lib/hook/useDebounce';

export interface ModalContentProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLDivElement>;
  type: string;
  label: string;
  children: (props: string) => React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({
  setIsOpen,
  type,
  label,
  inputRef,
  children,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce<string>(searchValue, 500);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleCloseModal = () => {
    inputRef.current?.blur();
    setIsOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    searchInputRef.current?.focus();
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

      <div className="relative flex flex-col gap-[10px] self-stretch bg-white px-[20px] py-[16px]">
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
      <div
        className={cn(
          'no-scrollbar flex h-full w-full flex-1 flex-col items-center self-stretch overflow-scroll bg-white px-[20px] py-[24px] text-body-2',
          `${type === 'club' ? 'gap-[16px] px-[20px] py-[24px]' : 'py-[12px]'}`,
        )}
      >
        {children(debounceSearchValue)}
      </div>
    </>
  );
};

export default ModalContent;
