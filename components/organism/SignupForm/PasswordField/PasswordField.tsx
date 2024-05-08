'use client';

import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import { SignUpFormValues } from '../SignUpForm';

const PasswordField = ({
  register,
  errors,
}: {
  register: UseFormRegister<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'비밀번호'} name={'password'} />
        <input
          {...register('password')}
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          placeholder="비밀번호"
          className={cn(
            InputVariants({
              variant: `${errors.password ? 'error' : 'default'}`,
              inputSize: 'mdWith',
            }),
          )}
        />
      </div>
      <div className="absolute right-[12px] top-[38px]">
        {passwordVisible ? (
          <VisibleIcon
            width={20}
            height={20}
            fill="#787878"
            onClick={() => setPasswordVisible((prev) => !prev)}
          />
        ) : (
          <VisibleOffIcon
            width={20}
            height={20}
            fill="#787878"
            onClick={() => setPasswordVisible((prev) => !prev)}
          />
        )}
      </div>
      {errors.password && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.password.message}
        </div>
      )}
    </div>
  );
};

export default PasswordField;
