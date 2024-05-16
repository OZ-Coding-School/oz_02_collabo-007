'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { signInUser, State } from '@/app/signin/actions';
import { signInFormSchema } from '@/lib/utils/signInValidation';
import { zodResolver } from '@hookform/resolvers/zod';

import React, { useEffect, useTransition } from 'react';
import SigninFormContent from './SigninFormContent';
import { useRouter } from 'next/navigation';

export interface SignInFormValues {
  phone: string;
  password: string;
}

const SigninForm = () => {
  const [state, formAction] = useFormState<State, FormData>(signInUser, null);
  const [pending, startTransaction] = useTransition();

  const router = useRouter();

  const {
    register,
    formState: { isValid, errors },
    setError,
    setValue,
    setFocus,
    clearErrors,
  } = useForm<SignInFormValues>({
    mode: 'onSubmit',
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
    if (state.status === 'networkError') {
      setError('root', { message: state.message });
    }
    if (state.status === 'success') {
      router.push('/');
    }
  }, [state, setError]);

  const handleSubmit = async (formData: FormData) => {
    clearErrors();

    startTransaction(() => formAction(formData));
  };

  return (
    <form className="flex w-full flex-col gap-[64px]" action={handleSubmit}>
      <SigninFormContent
        register={register}
        isValid={isValid}
        errors={errors}
        setValue={setValue}
        setFocus={setFocus}
      />
    </form>
  );
};

export default SigninForm;
