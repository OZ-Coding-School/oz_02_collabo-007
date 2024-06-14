'use client';

import React, { useState } from 'react';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { PasswordValues } from '@/@types/password';
import HelperText from '@/components/core/HelperText/HelperText';

const ChangePasswordField = ({
  register,
  errors,
  label,
  type,
}: {
  register: UseFormRegister<PasswordValues>;
  errors: FieldErrors<PasswordValues>;
  label: string;
  type: 'prevPassword' | 'changedPassword' | 'confirmPassword';
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const IconComponent = () => {
    const Icon = passwordVisible ? VisibleOffIcon : VisibleIcon;
    return (
      <Icon
        width={20}
        height={20}
        fill="#787878"
        onClick={() => setPasswordVisible((prev) => !prev)}
      />
    );
  };

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={label} name={type} />
        <Input
          {...register(type)}
          type={passwordVisible ? 'text' : 'password'}
          variant={type in errors ? 'error' : 'default'}
          inputSize={'mdWith'}
          placeholder={label}
        />
      </div>
      <div className="absolute right-[12px] top-[40px]">
        <IconComponent />
      </div>
      {type in errors && (
        <div className="absolute bottom-[-20px] left-[15px] flex items-center gap-[4px]">
          <HelperText variant="error" helperText={errors[type]?.message} />
        </div>
      )}
    </div>
  );
};

export default ChangePasswordField;
