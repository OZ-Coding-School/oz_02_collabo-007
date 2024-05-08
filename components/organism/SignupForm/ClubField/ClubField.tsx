'use client';

import React, { useRef, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import tennisImg from '@/public/tennis.jpeg';
import ClubItem from './ClubItem';
import Modal from '@/components/module/Modal/Modal';

const ClubField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'소속 클럽 검색'} name={'club'} />

        <Input
          name="club"
          inputRef={inputRef}
          placeholder="소속 클럽 검색"
          className="pl-[44px]"
          onFocus={() => setIsOpen((prev) => !prev)}
        />

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[12px] top-[38px]"
        />

        <ClubItem
          name={'라온 테니스'}
          address={'서울 서초구 강남대로 99길'}
          image={tennisImg}
          displayMode
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <Modal setIsOpen={setIsOpen} inputRef={inputRef} type="club" label="클럽 검색">
            {CLUBS.length === 0 ? (
              <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
                클럽을 검색해주세요
              </span>
            ) : (
              <>
                {CLUBS.map(({ id, name, address, image }) => (
                  <ClubItem key={id} name={name} address={address} image={image} />
                ))}
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClubField;

const CLUBS = [
  {
    id: 1,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
  {
    id: 2,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
  {
    id: 3,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
];
