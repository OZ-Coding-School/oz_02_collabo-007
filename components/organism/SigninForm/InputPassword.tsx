'use client';

import { useRef, useState } from 'react';
import VisibleIcon from '@/app/_asset/icons/visible.svg';
import VisibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import Label from '@/components/core/Label/Label';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { cn } from '@/lib/utils/cn';
import { InputVariants } from '@/components/core/Input/Input';
import Error from '@/app/_asset/icons/error-circle.svg';
import { SignInFormValues } from './SigninForm';

const InputPassword = ({
  register,
  errors,
}: {
  register: UseFormRegister<SignInFormValues>;
  errors: FieldErrors<SignInFormValues>;
}) => {
  const [isVisible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible((isVisible) => !isVisible);
  };

  // const inputRef = useRef<HTMLInputElement>(null);

  // if (errors.password && !errors.phone) {
  //   inputRef.current?.focus();
  // }

  return (
    <div className="relative">
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        <Label label="비밀번호" name={'password'} />
        <div className="relative self-stretch">
          <input
            {...register('password')}
            // ref={inputRef}
            type={isVisible ? 'text ' : 'password'}
            id="password"
            name="password"
            placeholder="비밀번호"
            className={cn(
              InputVariants({
                variant: 'default',
              }),
              'p-[12px] text-body-1',
            )}
          />
          {isVisible ? (
            <VisibleIcon
              width={24}
              height={24}
              fill="#787878"
              onClick={changeVisible}
              className="absolute bottom-[12px] right-[12px]"
            />
          ) : (
            <VisibleOffIcon
              width={24}
              height={24}
              fill="#787878"
              onClick={changeVisible}
              className="absolute bottom-[12px] right-[12px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
