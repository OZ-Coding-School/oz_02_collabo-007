'use client';

import React from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { cn } from '@/lib/utils/cn';
import type { ClubSearchData } from '@/@types/club';
import useModalContent from '@/lib/hook/useModalContent';

export interface ModalContentProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLDivElement>;
  type: string;
  label: string;
  searchData: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
  children: (props: ClubSearchData) => React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({
  setIsOpen,
  type,
  label,
  inputRef,
  searchData,
  setSelectedId,
  children,
}) => {
  const {
    handleCloseModal,
    searchValue,
    setSearchValue,
    searchInputRef,
    filteredData,
    handleClubItem,
  } = useModalContent({
    setIsOpen,
    inputRef,
    searchData,
    setSelectedId,
  });

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
          'flex flex-1 flex-col items-center self-stretch text-body-2',
          `${type === 'club' ? 'gap-[16px] px-[20px] py-[24px]' : 'py-[12px]'}`,
        )}
      >
        {filteredData.length === 0 ? (
          <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
            클럽을 검색해주세요
          </span>
        ) : (
          <>
            {filteredData.map((data) => (
              <div
                key={data.id}
                className="w-full cursor-pointer rounded-[8px] bg-white p-[12px] shadow-card"
                onClick={() => handleClubItem(data.id)}
              >
                {children(data)}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ModalContent;
