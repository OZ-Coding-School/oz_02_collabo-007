'use client';

import React, { Dispatch, FC, useEffect } from 'react';
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import type { SignUpFormValues } from '@/@types/signup';
import Button from '@/components/core/Button/Button';
import SuccessIcon from '@/app/_asset/icons/success-circle.svg';

interface PhoneFieldProps {
  register: UseFormRegister<SignUpFormValues>;
  getValues: UseFormGetValues<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
  setError: UseFormSetError<SignUpFormValues>;
  isUnique: boolean;
  setIsUnique: React.Dispatch<React.SetStateAction<boolean>>;
  phoneData?: string;
}

const PhoneField: FC<PhoneFieldProps> = ({
  register,
  getValues,
  errors,
  setError,
  phoneData,
  isUnique,
  setIsUnique,
}) => {
  useEffect(() => {
    if (isUnique) {
      setIsUnique(() => false);
    }
  }, [getValues('phone')]);

  const handleCheckPhoneNumber = async () => {
    const phonePattern = /^(?:01[0|1|6-9])(?:\d{3}|\d{4})\d{4}$/;

    if (phonePattern.test(getValues('phone'))) {
      const formData = new FormData();
      formData.append('phone', getValues('phone'));

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/check-phone/`,
          {
            method: 'POST',
            body: formData,
          },
        );

        if (!res.ok) {
          const errorData = await res.json();
          setError('phone', { message: errorData.message });
          return;
        }

        setIsUnique(() => true);
        return;
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log('isUnique', isUnique);

  return (
    <div className="relative flex w-full items-end gap-[8px] self-stretch">
      <div className="flex-1">
        <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
          <Label label={'휴대폰 번호'} name={'phone'} />
          {phoneData ? (
            <input
              defaultValue={phoneData}
              {...register('phone')}
              placeholder="숫자만 입력"
              id="phone"
              className={cn(
                InputVariants({
                  variant: `display`,
                  inputSize: 'mdWith',
                }),
              )}
              readOnly
            />
          ) : (
            <input
              {...register('phone')}
              placeholder="숫자만 입력"
              id="phone"
              className={cn(
                InputVariants({
                  variant: `${errors.phone ? 'error' : 'default'}`,
                  inputSize: 'mdWith',
                }),
                `${isUnique && 'border-success-60'}`,
              )}
            />
          )}
        </div>
      </div>
      {!phoneData && (
        <div>
          <Button
            colors="gray"
            label="중복 확인"
            variant="secondary"
            type="button"
            size="md"
            onClick={handleCheckPhoneNumber}
          />
        </div>
      )}
      {errors.phone && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.phone.message}
        </div>
      )}
      {isUnique && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-success-60">
          <SuccessIcon className="h-[16px] w-[16px] fill-success-60" />
          사용가능한 휴대폰 번호입니다.
        </div>
      )}
    </div>
  );
};

export default PhoneField;
