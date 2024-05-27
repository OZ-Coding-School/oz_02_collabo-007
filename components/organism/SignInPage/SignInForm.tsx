'use client';

import { FormProvider } from 'react-hook-form';
import React from 'react';
import useSignInForm from '@/lib/hook/useSignInForm';
import SignInFormContent from './SignInFormContent';

const SignInForm = () => {
  const { methods, startTransaction, formAction } = useSignInForm();

  return (
    <FormProvider {...methods}>
      <form
        className="flex w-full flex-col gap-[64px]"
        action={(formData) => startTransaction(() => formAction(formData))}
      >
        <SignInFormContent />
      </form>
    </FormProvider>
  );
};

export default SignInForm;
