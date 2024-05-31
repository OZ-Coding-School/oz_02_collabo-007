'use client';

import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
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
    <div className="flex flex-col items-start gap-[8px] self-stretch">
      <Label label="휴대폰번호" name={'phone'} />
      <div className="self-stretch">
        <Input
          {...register('phone')}
          placeholder="휴대폰번호"
          variant={errors.phone || errors.root ? 'error' : 'default'}
          className={'p-[12px] text-body-1'}
          onChange={handleInput}
          type="tel"
          enterKeyHint="next"
        />
      </div>
    </div>
  );
};

export default InputPhone;
