'use client';
import React from 'react';
import CopyIcon from '@/app/_asset/icons/textcopy.svg';

const CopyButton = ({ text }: { text: string }) => {
  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('주소가 클립보드에 복사되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => {
        handleCopyClick(text);
      }}
    >
      <CopyIcon className=" h-[16px] w-[16px] cursor-pointer fill-gray-80" />
    </div>
  );
};

export default CopyButton;
