import React from 'react';
import Link from 'next/link';
import {
  FieldErrors,
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import InputPassword from './InputPassword';
import Button from '@/components/core/Button/Button';
import { SignInFormValues } from './SigninForm';
import { useFormStatus } from 'react-dom';
import InputPhone from './InputPhone';

const SigninFormContent = ({
  register,
  isValid,
  errors,
  setValue,
}: {
  register: UseFormRegister<SignInFormValues>;
  isValid: boolean;
  errors: FieldErrors<SignInFormValues>;
  setValue: UseFormSetValue<SignInFormValues>;
}) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="gap-[24px]">
          <InputPhone register={register} errors={errors} setValue={setValue} />
          <InputPassword register={register} errors={errors} />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center">
            <input id="remember" type="checkbox" name="remember" />
            <label
              htmlFor="remember"
              className="ml-[8px] text-body-2 leading-[20px] text-gray-80"
            >
              자동 로그인
            </label>
          </div>
          <Link href="/#" className="text-sub-headline-2 text-primary-60 ">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="h-12 w-full">
          <Button variant="primary" label="로그인" type="submit" />
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

export default SigninFormContent;
