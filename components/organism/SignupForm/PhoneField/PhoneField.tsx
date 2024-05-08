'use client';

import Button from '@/components/core/Button/Button';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import { SignUpFormValues } from '../SignUpForm';

const PhoneField = ({
  register,
  errors,
}: {
  register: UseFormRegister<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
}) => {
  return (
    <div className="relative flex w-full items-end gap-[8px] self-stretch">
      <div className="flex-1">
        <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
          <Label label={'휴대폰 번호'} name={'phone'} />
          <input
            defaultValue={''}
            {...register('phone')}
            placeholder="숫자만 입력"
            id="phone"
            className={cn(
              InputVariants({
                variant: `${errors.phone ? 'error' : 'default'}`,
                inputSize: 'mdWith',
              }),
            )}
          />
        </div>
      </div>
      <div>
        <Button
          colors="gray"
          label="중복 확인"
          variant="secondary"
          type="button"
          size="md"
        />
      </div>
      {errors.phone && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.phone.message}
        </div>
      )}
    </div>
  );
};

export default PhoneField;
