'use client';

import { useState } from 'react';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import Label from '@/components/core/Label/Label';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/core/Input/Input';

const InputPassword = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isVisible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible((isVisible) => !isVisible);
  };

  const IconComponent = () => {
    const Icon = isVisible ? VisibleOffIcon : VisibleIcon;
    return (
      <Icon
        width={24}
        height={24}
        fill="#787878"
        onClick={changeVisible}
        className="absolute bottom-[12px] right-[12px]"
      />
    );
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        <Label label="비밀번호" name="password" />
        <div className="relative self-stretch">
          <Input
            {...register('password')}
            type={isVisible ? 'text ' : 'password'}
            variant={errors.password ? 'error' : 'default'}
            placeholder="비밀번호"
            className="p-[12px] text-body-1"
          />
          <IconComponent />
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
