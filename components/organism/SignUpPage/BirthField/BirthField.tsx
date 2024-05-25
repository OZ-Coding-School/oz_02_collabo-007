'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import Error from '@/app/_asset/icons/error-circle.svg';

const BirthField = ({ birthData }: { birthData: number | undefined }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'출생년도'} name={'birth'} />
        <input
          defaultValue={birthData || ''}
          {...register('birth')}
          id="birth"
          placeholder="2000"
          className={cn(
            InputVariants({
              variant: `${errors.birth ? 'error' : 'default'}`,
              inputSize: 'mdWith',
            }),
          )}
        />
      </div>
      {errors.birth && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px] text-body-3 text-error-60">
          <Error className="h-[16px] w-[16px] fill-error-60" />
          {errors.birth.message as string}
        </div>
      )}
    </div>
  );
};

export default BirthField;
