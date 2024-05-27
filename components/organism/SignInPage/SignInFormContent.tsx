import React from 'react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import InputPassword from './InputPassword';
import Button from '@/components/core/Button/Button';
import InputPhone from './InputPhone';
import Error from '@/app/_asset/icons/error-circle.svg';
import { ErrorMessage } from '@hookform/error-message';

const SignInFormContent = () => {
  const {
    formState: { isValid, errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="relative flex flex-col gap-[28px]">
          <InputPhone />
          <InputPassword />
          {errors.root && (
            <div className="absolute bottom-[-50px] left-1/2 flex -translate-x-1/2 transform items-center gap-[4px] text-body-3 text-error-60">
              <Error className="h-[16px] w-[16px] fill-error-60" />
              <ErrorMessage errors={errors} name="root" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="h-12 w-full">
          <Button variant="primary" label="로그인" type="submit" disabled={!isValid} />
        </div>
        <Link href="/signup">
          <div className="h-12 w-full">
            <Button variant="ghost" colors="gray" label="회원 가입" type="button" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SignInFormContent;
