'use client';

import React, { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Button from '@/components/core/Button/Button';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';
import { usePathname } from 'next/navigation';
import HelperText from '@/components/core/HelperText/HelperText';

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
          <Input
            defaultValue={phoneData ? changePhoneNumber(phoneData) : ''}
            {...register('phone')}
            variant={variant}
            inputSize={'mdWith'}
            placeholder="숫자만 입력"
            readOnly={!!phoneData}
            className={`${isUnique && 'border-success-60'}`}
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
            className="px-[12px] py-[11px] text-[16px] leading-[24px]"
          />
        </div>
      )}
      {typeof errors.phone?.message === 'string' && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors.phone.message} />
        </div>
      )}
      {isUnique && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="success" helperText={'사용가능한 휴대폰 번호입니다.'} />
        </div>
      )}

      {pathname === '/signup/' &&
        phonePattern.test(watchPhone) &&
        !isUnique &&
        !errors.phone && (
          <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
            <HelperText
              variant="warning"
              helperText={'휴대폰 중복 검사를 진행해주세요.'}
            />
          </div>
        )}
    </div>
  );
};

export default PhoneField;
