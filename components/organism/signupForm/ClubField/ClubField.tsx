'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import searchIcon from '@/app/_asset/icons/search.svg';
import ClubModal from './ClubModal/ClubModal';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import tennisImg from '@/public/tennis.jpeg';
import ClubItem from './ClubModal/ClubItem';

const ClubField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="w-full relative">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'소속 클럽 검색'} name={'club'} />
        <input
          id="club"
          name="club"
          type="text"
          ref={inputRef}
          placeholder="소속 클럽 검색"
          className={cn(
            InputVariants({ variant: 'default', inputSize: 'md' }),
            'pl-[44px]',
          )}
          onFocus={() => setIsOpen((prev) => !prev)}
        />
        <Image
          src={searchIcon}
          alt="search"
          width={20}
          height={20}
          className="absolute top-[38px] left-[12px]"
        />

        <ClubItem
          name={'라온 테니스'}
          address={'서울 서초구 강남대로 99길'}
          image={tennisImg}
          displayMode
        />
      </div>

      <AnimatePresence>
        {isOpen && <ClubModal setIsOpen={setIsOpen} inputRef={inputRef} />}
      </AnimatePresence>
    </div>
  );
};

export default ClubField;
