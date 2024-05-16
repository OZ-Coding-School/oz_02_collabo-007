'use client';

import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import { FieldErrors, UseFormRegister, UseFormSetError } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import { PasswordValues } from '@/@types/password';

const ChangePasswordField = ({
  register,
  errors,
  label,
  type,
}: {
  register: UseFormRegister<PasswordValues>;
  errors: FieldErrors<PasswordValues>;
  label: string;
  type: 'prevPassword' | 'changedPassword' | 'confirmPassword';
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={label} name={type} />
        <input
          {...register(type)}
          type={passwordVisible ? 'text' : 'password'}
          name={type}
          id={type}
          placeholder={label}
          className={cn(
            InputVariants({
              variant: `${type in errors ? 'error' : 'default'}`,
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
      {type in errors && (
        <div className="absolute bottom-[-20px] left-[10px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors[type]?.message}
        </div>
      )}
    </div>
  );
};

export default ChangePasswordField;
