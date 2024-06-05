'use client';

import { FormProvider } from 'react-hook-form';
import React from 'react';
import useSignInForm from '@/lib/hook/useSignInForm';
import SignInFormContent from '@/components/organism/SignInPage/SignInFormContent';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';

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
      {pending && <LoadingSpinner />}
    </FormProvider>
  );
};

export default SignInForm;
