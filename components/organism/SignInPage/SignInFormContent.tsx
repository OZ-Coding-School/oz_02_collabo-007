import React from 'react';
import Link from 'next/link';
import {
  FieldErrors,
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
  UseFormSetFocus,
} from 'react-hook-form';
import InputPassword from './InputPassword';
import Button from '@/components/core/Button/Button';
import { SignInFormValues } from './SignInForm';
import { useFormStatus } from 'react-dom';
import InputPhone from './InputPhone';
import Error from '@/app/_asset/icons/error-circle.svg';

const SigninFormContent = ({
  register,
  isValid,
  errors,
  setValue,
  setFocus,
}: {
  register: UseFormRegister<SignInFormValues>;
  isValid: boolean;
  errors: FieldErrors<SignInFormValues>;
  setValue: UseFormSetValue<SignInFormValues>;
  setFocus: UseFormSetFocus<SignInFormValues>;
}) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="relative flex flex-col gap-[28px]">
          <InputPhone
            register={register}
            errors={errors}
            setValue={setValue}
            setFocus={setFocus}
          />
          <InputPassword register={register} errors={errors} setFocus={setFocus} />
          {errors.phone?.message || errors.password?.message || errors.root?.message ? (
            <div className="absolute bottom-[-35px] flex items-center gap-[4px] text-body-3 text-error-60">
              <Error className="h-[16px] w-[16px] fill-error-60" />
              {errors.phone?.message && errors.phone?.message}
              {!errors.phone?.message &&
                errors.password?.message &&
                errors.password?.message}
              {errors.root?.message && errors.root?.message}
            </div>
          ) : null}
        </div>

        {/* <div className="flex justify-between">
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
        </div> */}
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
