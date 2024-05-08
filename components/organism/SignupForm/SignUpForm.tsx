'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { StaticImageData } from 'next/image';
import { SignUpFormContent } from './SignUpFormContent';
import { formSchema } from '@/lib/utils/validation';
import { State, signUpUser } from '@/app/signup/actions';

export interface SignUpFormValues {
  imageFile: StaticImageData;
  phone: string;
  password: string;
  username: string;
  gender: string;
  birth: string;
  club: string;
}

export function SignUpForm() {
  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<SignUpFormValues>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  });
  const [state, formAction] = useFormState<State, FormData>(signUpUser, null);
  const [pending, startTransaction] = useTransition();

  useEffect(() => {
    if (!state) return;
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<SignUpFormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
      console.log(state.message);
    }
  }, [state, setError]);

  return (
    <form action={(formData) => startTransaction(() => formAction(formData))}>
      <SignUpFormContent register={register} isValid={isValid} errors={errors} />
    </form>
  );
}
