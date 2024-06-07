import React from 'react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import InputPassword from './InputPassword';
import Button from '@/components/core/Button/Button';
import InputPhone from './InputPhone';
import HelperText from '@/components/core/HelperText/HelperText';
import { useFormStatus } from 'react-dom';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';

const SignInFormContent = () => {
  const { pending } = useFormStatus();
  const {
    formState: { isValid, errors },
  } = useFormContext();

  const errorMessage =
    errors.phone?.message || errors.password?.message || errors.root?.message;

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="relative flex flex-col gap-[28px]">
          <InputPhone />
          <InputPassword />
          {typeof errorMessage === 'string' && (
            <div className="absolute bottom-[-35px] flex items-center gap-[4px] text-body-3">
              <HelperText variant="error" helperText={errorMessage} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="h-12 w-full">
          <Button
            variant="primary"
            label="로그인"
            type="submit"
            disabled={!isValid || pending}
          />
        </div>
        <Link href="/signup">
          <div className="h-12 w-full">
            <Button variant="ghost" colors="gray" label="회원 가입" type="button" />
          </div>
        </Link>
        <Link href="/">
          <div className="flex w-full items-center justify-center px-[20px]">
            <span className="text-body-2 text-primary-60">회원가입 없이 둘러보기</span>
            <ChevronRightIcon className="h-[20px] w-[20px] fill-primary-60" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SignInFormContent;
