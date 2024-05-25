'use client';

import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';

const ConfirmPasswordField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'비밀번호 확인'} name={'confirmPassword'} />
        <input
          {...register('confirmPassword')}
          type={passwordVisible ? 'text' : 'password'}
          id="confirmPassword"
          placeholder="비밀번호 확인"
          className={cn(
            InputVariants({
              variant: `${errors.confirmPassword ? 'error' : 'default'}`,
              inputSize: 'mdWith',
            }),
          )}
        />
      </div>
      <div className="absolute right-[12px] top-[38px]">
        {passwordVisible ? (
          <VisibleOffIcon
            width={20}
            height={20}
            fill="#787878"
            onClick={() => setPasswordVisible((prev) => !prev)}
          />
        ) : (
          <VisibleIcon
            width={20}
            height={20}
            fill="#787878"
            onClick={() => setPasswordVisible((prev) => !prev)}
          />
        )}
      </div>
      {errors.confirmPassword && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.confirmPassword.message as string}
        </div>
      )}
    </div>
  );
};

export default ConfirmPasswordField;
