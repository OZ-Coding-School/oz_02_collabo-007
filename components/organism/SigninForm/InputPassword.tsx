'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import { useState } from 'react';
import visibleIcon from '@/app/_asset/icons/visible.svg';
import invisivleIcon from '@/app/_asset/icons/visible-off.svg';
import Image from 'next/image';

const InputPassword = () => {
  const [isVisible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible((isVisible) => !isVisible);
  };
  return (
    <div className="relative mt-6">
      <InputModule
        type={isVisible ? 'text' : 'password'}
        label="비밀번호"
        placeholder="비밀번호"
        inputSize="lgWith"
      />
      <Image
        src={isVisible ? visibleIcon : invisivleIcon}
        width={24}
        height={24}
        alt="visible"
        onClick={changeVisible}
        className="absolute bottom-[12px] right-[12px]"
      />
    </div>
  );
};

export default InputPassword;
