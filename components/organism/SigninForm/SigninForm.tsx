'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { signInUser, State } from '@/app/signin/actions';
import { signInFormSchema } from '@/lib/utils/signInValidation';
import { zodResolver } from '@hookform/resolvers/zod';

import React, { useEffect, useTransition } from 'react';
import SigninFormContent from './SigninFormContent';

export interface SignInFormValues {
  phone: string;
  password: string;
}

const SigninForm = () => {
  const [state, formAction] = useFormState<State, FormData>(signInUser, null);
  const [pending, startTransaction] = useTransition();

  const {
    register,
    formState: { isValid, errors },
    setError,
    setValue,
  } = useForm<SignInFormValues>({
    mode: 'all',
    resolver: zodResolver(signInFormSchema),
  });

  useEffect(() => {
    if (!state) return;
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<SignInFormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
      console.log(state.message);
    }
  }, [state, setError]);

  return (
    <form
      className="flex w-full flex-col gap-[40px]"
      action={(formData) => startTransaction(() => formAction(formData))}
    >
      <SigninFormContent
        register={register}
        isValid={isValid}
        errors={errors}
        setValue={setValue}
      />
    </form>
  );
};

export default SigninForm;
