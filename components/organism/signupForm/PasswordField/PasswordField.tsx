import InputModule from '@/components/module/InputModule/InputModule';
import Image from 'next/image';
import React from 'react';
import visibleOffIcon from '@/app/_asset/icons/visible-off.svg';

const PasswordField = () => {
  return (
    <div className="w-full relative">
      <InputModule
        label="비밀번호"
        placeholder="비밀번호 입력"
        type="password"
        inputSize="mdWith"
        name="password"
      />
      <Image
        src={visibleOffIcon}
        alt="visible"
        width={20}
        height={20}
        className="absolute top-[38px] right-[12px]"
      />
    </div>
  );
};

export default PasswordField;
