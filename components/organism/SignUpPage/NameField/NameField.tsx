'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import HelperText from '@/components/core/HelperText/HelperText';

const NameField = ({ nameData }: { nameData: string | undefined }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'이름'} name={'username'} />
        <Input
          defaultValue={nameData || ''}
          {...register('username')}
          placeholder="홍길동"
          variant={errors.username ? 'error' : 'default'}
          inputSize={'mdWith'}
        />
      </div>
      {typeof errors.username?.message === 'string' && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors.username.message} />
        </div>
      )}
    </div>
  );
};

export default NameField;
