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
    if (inputRef.current && inputRef.current.value === '') {
      inputRef.current?.focus();
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
                variant: 'default',
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
      </div>
    </div>
  );
};

export default InputPhone;
