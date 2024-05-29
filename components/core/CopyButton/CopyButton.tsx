'use client';
import React from 'react';
import CopyIcon from '@/app/_asset/icons/textcopy.svg';

const CopyButton = ({ text }: { text: string }) => {
  const handleCopyClick = (text: string) => {
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('주소가 클립보드에 복사되었습니다.');
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
