'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { cn } from '@/lib/utils/cn';
import type { ModalContainerProps } from '@/@types/modal';
import useDebounce from '@/lib/hook/useDebounce';
import type { SimpleClubData } from '@/@types/club';
import { hangulToJamo } from '@/lib/hook/hangulToJamo';
import ClubItem from '@/components/organism/SignupForm/ClubField/ClubItem';

const ModalContainer: FC<ModalContainerProps> = ({
  handleCloseModal,
  type,
  label,
  searchData,
  setSelectedId,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<SimpleClubData[]>([]);
  const debounceSearchValue = useDebounce<string>(searchValue, 500);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (debounceSearchValue === '') {
      setFilteredData(() => []);
      return;
    }

    const filtered: SimpleClubData[] = searchData.filter(({ name }: { name: string }) => {
      return hangulToJamo(name).includes(hangulToJamo(debounceSearchValue));
    });

    setFilteredData(() => filtered);
  }, [debounceSearchValue]);

  const handleClubItem = (selectedId: number) => {
    setSelectedId(() => searchData.find(({ id }: { id: number }) => id === selectedId));
    handleCloseModal();
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
          inputRef={inputRef}
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
            {filteredData.map(({ id, name, address, imageUrl }) => (
              <div
                key={id}
                className="w-full cursor-pointer rounded-[8px] bg-white p-[12px] shadow-card"
                onClick={() => handleClubItem(id)}
              >
                <ClubItem name={name} address={address} image={imageUrl} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ModalContainer;
