'use client';

import React, { useRef, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import tennisImg from '@/public/tennis.jpeg';
import PartnerItem from './PartnerItem';
import Modal from '@/components/module/Modal/Modal';

const PartnerField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'파트너 검색'} name={'partner'} />

        <Input
          name="partner"
          inputRef={inputRef}
          placeholder="파트너 검색"
          className="pl-[44px]"
          onFocus={() => setIsOpen((prev) => !prev)}
        />

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[12px] top-[38px]"
        />

        <PartnerItem name="이인호" clubName="라온테니스" image={tennisImg} displayMode />
      </div>

      <AnimatePresence>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            inputRef={inputRef}
            type="partner"
            label="파트너 검색"
          >
            {PARTNERS.length === 0 ? (
              <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
                파트너를 검색해주세요
              </span>
            ) : (
              <>
                {PARTNERS.map(({ id, name, clubName, image }) => (
                  <PartnerItem key={id} name={name} clubName={clubName} image={image} />
                ))}
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerField;

const PARTNERS = [
  {
    id: 1,
    name: '이인호',
    clubName: '라온 테니스',
    image: tennisImg,
  },
  {
    id: 2,
    name: '이인호',
    clubName: '라온 테니스',
    image: tennisImg,
  },
  {
    id: 3,
    name: '이인호',
    clubName: '라온 테니스',
    image: tennisImg,
  },
];
