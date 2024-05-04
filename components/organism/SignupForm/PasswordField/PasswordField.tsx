'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import Image from 'next/image';
import React, { useState } from 'react';
import visibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import visibleIcon from '@/app/_asset/icons/visible.svg';

const PasswordField = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full">
      <InputModule
        label="비밀번호"
        placeholder="비밀번호 입력"
        type={passwordVisible ? 'text' : 'password'}
        inputSize="mdWith"
        name="password"
      />
      <Image
        src={passwordVisible ? visibleIcon : visibleOffIcon}
        alt="visible"
        width={20}
        height={20}
        className="absolute right-[12px] top-[38px]"
        onClick={() => setPasswordVisible((prev) => !prev)}
      />
    </div>
  );
};

export default PasswordField;