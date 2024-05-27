'use client';

import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { cn } from '@/lib/utils/cn';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Error from '@/app/_asset/icons/error-circle.svg';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';

const InputPhone = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    setValue('phone', changePhoneNumber(phoneNumber), {
      shouldValidate: true,
    });
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        <Label label="휴대폰번호" name={'phone'} />
        <div className="self-stretch">
          <input
            {...register('phone')}
            type="text"
            id="phone"
            name="phone"
            placeholder="휴대폰번호"
            className={cn(
              InputVariants({
                variant: errors.phone ? 'error' : 'default',
              }),
              'p-[12px] text-body-1',
            )}
            onChange={handleInput}
          />
        </div>
      </div>
      {errors.phone && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.phone.message as string}
        </div>
      )}
    </div>
  );
};

export default InputPhone;
