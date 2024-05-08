'use client';

import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import { SignUpFormValues } from '../SignUpForm';

const NameField = ({
  register,
  errors,
}: {
  register: UseFormRegister<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
}) => {
  console.log(errors);
  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'이름'} name={'username'} />
        <input
          {...register('username')}
          placeholder="홍길동"
          id="username"
          className={cn(
            InputVariants({
              variant: `${errors.username ? 'error' : 'default'}`,
              inputSize: 'mdWith',
            }),
          )}
        />
      </div>
      {errors.username && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.username.message}
        </div>
      )}
    </div>
  );
};

export default NameField;
