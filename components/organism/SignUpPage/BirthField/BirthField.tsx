'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import HelperText from '@/components/core/HelperText/HelperText';

const BirthField = ({ birthData }: { birthData: number | undefined }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'출생년도'} name={'birth'} />
        <Input
          defaultValue={birthData || ''}
          {...register('birth')}
          placeholder="2000"
          variant={errors.birth ? 'error' : 'default'}
          inputSize={'mdWith'}
        />
      </div>
      {typeof errors.birth?.message === 'string' && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors.birth.message} />
        </div>
      )}
    </div>
  );
};

export default BirthField;
