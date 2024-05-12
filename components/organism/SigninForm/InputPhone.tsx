'use client';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { cn } from '@/lib/utils/cn';
import { useEffect, useRef } from 'react';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues,
} from 'react-hook-form';
import { SignInFormValues } from './SigninForm';
import Error from '@/app/_asset/icons/error-circle.svg';

const InputPhone = ({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<SignInFormValues>;
  setValue: UseFormSetValue<SignInFormValues>;
  errors: FieldErrors<SignInFormValues>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="relative">
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        <Label label="휴대폰번호" name={'phone'} />
        <div className="self-stretch">
          <input
            {...register('phone')}
            ref={inputRef}
            type="text"
            id="phone"
            name="phone"
            placeholder="휴대폰번호"
            className={cn(
              InputVariants({
                variant: `${errors.phone ? 'error' : 'default'}`,
              }),
              'p-[12px] text-body-1',
            )}
            onChange={(e) =>
              setValue(
                'phone',
                e.target.value
                  .replace(/[^0-9]/g, '')
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                  .replace(/(\-{1,2})$/g, ''),
              )
            }
          />
        </div>
        {errors.phone && (
          <div className="absolute bottom-[-24px] flex items-center gap-[4px] text-body-3 text-error-60">
            <Error className="h-[16px] w-[16px] fill-error-60" />
            {errors.phone.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPhone;
