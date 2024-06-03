'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useTransition } from 'react';
import { useFormState } from 'react-dom';
import { FieldPath, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signInFormSchema } from '../utils/validation';
import type { SignInFormValues, SignInState } from '@/@types/signin';
import { signInUser } from '@/app/_actions/signInUser';

const useSignInForm = () => {
  const [state, formAction] = useFormState<SignInState, FormData>(signInUser, null);
  const [pending, startTransaction] = useTransition();

  const router = useRouter();

  const methods = useForm<SignInFormValues>({
    mode: 'all',
    resolver: zodResolver(signInFormSchema),
  });

  const { setError } = methods;

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
      router.push('/');
    }
  }, [state, setError, router]);

  return {
    methods,
    formAction,
    startTransaction,
    pending,
  };
};

export default useSignInForm;
