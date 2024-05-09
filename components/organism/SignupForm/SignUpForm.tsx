'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { StaticImageData } from 'next/image';
import { SignUpFormContent } from './SignUpFormContent';
import { signUpSchema } from '@/lib/utils/validation';
import { State, signUpUser } from '@/app/signup/actions';
import { useRouter } from 'next/navigation';

export interface SignUpFormValues {
  imageFile: StaticImageData;
  phone: string;
  password: string;
  confirmPassword: string;
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
    setValue,
  } = useForm<SignUpFormValues>({
    mode: 'all',
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();
  const [state, formAction] = useFormState<State, FormData>(signUpUser, null);
  const [pending, startTransaction] = useTransition();
  const [totalError, setTotalError] = useState<string | null>(null);

  useEffect(() => {
    if (!state) return;
    if (state.status === 'totalError') {
      setTotalError(() => state.message);
    }
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<SignUpFormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
      console.log(state.message);
      window.localStorage.setItem('access-token', state.token);
      router.push('/');
    }
  }, [state, setError]);

  return (
    <form action={(formData) => startTransaction(() => formAction(formData))}>
      <SignUpFormContent
        register={register}
        isValid={isValid}
        errors={errors}
        setValue={setValue}
      />
      {totalError !== null && <div className="">{totalError}</div>}
    </form>
  );
}
