'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import searchIcon from '@/app/_asset/icons/search.svg';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import tennisImg from '@/public/tennis.jpeg';
import PartnerModal from './PartnerModal/PartnerModal';
import PartnerItem from './PartnerModal/PartnerItem';

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

        <Image
          src={searchIcon}
          alt="search"
          width={20}
          height={20}
          className="absolute left-[12px] top-[38px]"
        />

        <PartnerItem name="이인호" clubName="라온테니스" image={tennisImg} displayMode />
      </div>

      <AnimatePresence>
        {isOpen && <PartnerModal setIsOpen={setIsOpen} inputRef={inputRef} />}
      </AnimatePresence>
    </div>
  );
};

export default PartnerField;
