'use client';

import { FormProvider } from 'react-hook-form';
import React from 'react';
import useSignInForm from '@/lib/hook/useSignInForm';
import SignInFormContent from '@/components/organism/SignInPage/SignInFormContent';
import Loading from '@/app/signin/loading';

const SignInForm = () => {
  const { methods, startTransaction, formAction, pending } = useSignInForm();

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col gap-[64px]"
        action={(formData) => startTransaction(() => formAction(formData))}
      >
        <SignInFormContent />
      </form>
      {pending && <Loading />}
    </FormProvider>
  );
};

export default SignInForm;
