'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import { useState } from 'react';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import InvisibleIcon from '@/app/_asset/icons/visible-off.svg';

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
      {isVisible ? (
        <VisibleIcon
          width={24}
          height={24}
          fill="#787878"
          onClick={changeVisible}
          className="absolute bottom-[12px] right-[12px]"
        />
      ) : (
        <InvisibleIcon
          width={24}
          height={24}
          fill="#787878"
          onClick={changeVisible}
          className="absolute bottom-[12px] right-[12px]"
        />
      )}
    </div>
  );
};

export default InputPassword;
