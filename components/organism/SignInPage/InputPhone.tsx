'use client';

import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';
import HelperText from '@/components/core/HelperText/HelperText';

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
          <Input
            {...register('phone')}
            placeholder="휴대폰번호"
            variant={errors.phone ? 'error' : 'default'}
            className={'p-[12px] text-body-1'}
            onChange={handleInput}
          />
        </div>
      </div>
      {typeof errors.phone?.message === 'string' && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors.phone.message} />
        </div>
      )}
    </div>
  );
};

export default InputPhone;
