'use client';

import React, { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';
import Button from '@/components/core/Button/Button';
import SuccessIcon from '@/app/_asset/icons/success-circle.svg';
import WarningIcon from '@/app/_asset/icons/warning-circle.svg';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';
import { usePathname } from 'next/navigation';

interface PhoneFieldProps {
  isUnique: boolean;
  setIsUnique: React.Dispatch<React.SetStateAction<boolean>>;
  phoneData?: string;
}

const PhoneField: FC<PhoneFieldProps> = ({ phoneData, isUnique, setIsUnique }) => {
  const {
    register,
    getValues,
    setError,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const pathname = usePathname();
  const phonePattern = /^(?:01[0|1|6-9])\s(?:\d{4})\s\d{4}$/;
  const watchPhone: string = watch('phone');

  useEffect(() => {
    if (isUnique) setIsUnique(() => false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchPhone]);

  const handleCheckPhoneNumber = async () => {
    if (phonePattern.test(getValues('phone'))) {
      const formData = new FormData();
      formData.append('phone', getValues('phone').replace(/\s+/g, ''));

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

  const variant = phoneData ? 'display' : errors.phone ? 'error' : 'default';

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    setValue('phone', changePhoneNumber(phoneNumber), {
      shouldValidate: true,
    });
  };

  return (
    <div className="relative flex w-full items-end gap-[8px] self-stretch">
      <div className="flex-1">
        <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
          <Label label={'휴대폰 번호'} name={'phone'} />
          <input
            defaultValue={phoneData ? changePhoneNumber(phoneData) : ''}
            {...register('phone')}
            placeholder="숫자만 입력"
            id="phone"
            readOnly={!!phoneData}
            className={cn(
              InputVariants({
                variant,
                inputSize: 'mdWith',
              }),
              `${isUnique && 'border-success-60'}`,
            )}
            onChange={handleInput}
          />
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
          {errors.phone.message as string}
        </div>
      )}
      {isUnique && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-success-60">
          <SuccessIcon className="h-[16px] w-[16px] fill-success-60" />
          사용가능한 휴대폰 번호입니다.
        </div>
      )}

      {pathname === '/signup/' &&
        phonePattern.test(watchPhone) &&
        !isUnique &&
        !errors.phone && (
          <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-warning-60">
            <WarningIcon className="h-[16px] w-[16px] fill-warning-60" />
            휴대폰 중복 검사를 진행해주세요.
          </div>
        )}
    </div>
  );
};

export default PhoneField;
