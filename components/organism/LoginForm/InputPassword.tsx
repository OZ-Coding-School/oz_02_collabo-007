'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import { useState } from 'react';
import visibleIcon from '@/app/_asset/icons/visible.svg';
import checkIcon from '@/app/_asset/icons/check.svg';
import Image from 'next/image';

const InputPassword = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="mt-6 relative">
      <InputModule
        type={isVisible ? 'text' : 'password'}
        label="비밀번호"
        placeholder="비밀번호"
        inputSize="lgWith"
      />
      <Image
        src={isVisible ? visibleIcon : checkIcon}
        width={24}
        height={24}
        alt="visible"
        onClick={() => setVisible(!isVisible)}
        className="absolute right-[12px] bottom-[12px]"
      />
    </div>
  );
};

export default InputPassword;
