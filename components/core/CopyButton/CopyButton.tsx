'use client';
import React, { useState } from 'react';
import CopyIcon from '@/app/_asset/icons/textcopy.svg';
import CopyModal from '../CopyModal/CopyModal';
import { AnimatePresence } from 'framer-motion';

const CopyButton = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          handleCopyClick(text);
        }}
      >
        <CopyIcon className=" h-[16px] w-[16px] cursor-pointer fill-gray-80" />
      </div>
      <AnimatePresence>
        {isOpen ? (
          <div className="absolute bottom-[24px] left-[20px] z-50 w-[460px]">
            <CopyModal />
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default CopyButton;
