'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';

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
        required
      />
      {passwordVisible ? (
        <VisibleIcon
          width={20}
          height={20}
          fill="#787878"
          className="absolute right-[12px] top-[38px]"
          onClick={() => setPasswordVisible((prev) => !prev)}
        />
      ) : (
        <VisibleOffIcon
          width={20}
          height={20}
          fill="#787878"
          className="absolute right-[12px] top-[38px]"
          onClick={() => setPasswordVisible((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default PasswordField;
