'use client';

import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import HelperText from '@/components/core/HelperText/HelperText';

const ConfirmPasswordField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const IconComponent = () => {
    const Icon = passwordVisible ? VisibleOffIcon : VisibleIcon;
    return (
      <Icon
        width={20}
        height={20}
        fill="#787878"
        onClick={() => setPasswordVisible((prev) => !prev)}
      />
    );
  };

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'비밀번호 확인'} name={'confirmPassword'} />
        <Input
          {...register('confirmPassword')}
          type={passwordVisible ? 'text' : 'password'}
          variant={errors.confirmPassword ? 'error' : 'default'}
          inputSize={'mdWith'}
          placeholder="비밀번호 확인"
        />
      </div>
      <div className="absolute right-[12px] top-[40px]">
        <IconComponent />
      </div>
      {typeof errors.confirmPassword?.message === 'string' && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors.confirmPassword.message} />
        </div>
      )}
    </div>
  );
};

export default ConfirmPasswordField;
