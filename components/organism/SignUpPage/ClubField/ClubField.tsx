'use client';

import React, { useRef, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import type { Club, ClubSearchData } from '@/@types/club';
import ClubItem from './ClubItem';
import ClubModal from './ClubModal';

const ClubField = ({
  isOpen,
  setIsOpen,
  clubList,
  clubData = null,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clubList: ClubSearchData[];
  clubData?: Club | null;
}) => {
  const [selectedId, setSelectedId] = useState<ClubSearchData | null>(clubData);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDelete = () => {
    setSelectedId(() => null);
  };

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'소속 클럽 검색'} name={'club'} />

        <Input
          name="club"
          className="hidden pl-[44px]"
          value={selectedId ? selectedId.id : ''}
          readOnly
        />

        <Input
          name="clubName"
          ref={inputRef}
          placeholder="소속 클럽 검색"
          className="pl-[44px]"
          onFocus={() => setIsOpen((prev) => !prev)}
          value={selectedId ? selectedId.name : ''}
          onChange={(e) => e.target.value}
          variant={selectedId ? 'display' : 'default'}
          autoComplete="off"
        />

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[12px] top-[38px]"
        />

        {selectedId && (
          <div className="w-full cursor-pointer rounded-[8px] bg-gray-20 p-[12px] shadow-card">
            <ClubItem
              name={selectedId.name}
              address={selectedId.address}
              image={selectedId.imageUrl}
              displayMode
              handleDelete={handleDelete}
            />
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <ClubModal
            setIsOpen={setIsOpen}
            inputRef={inputRef}
            clubList={clubList}
            setSelectedId={setSelectedId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClubField;
