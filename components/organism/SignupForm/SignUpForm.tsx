'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormContent } from './SignUpFormContent';
import { signUpSchema } from '@/lib/utils/validation';
import { signUpUser } from '@/app/signup/actions';
import { useRouter } from 'next/navigation';
import type { SimpleClubData } from '@/@types/club';
import type { SignUpFormValues, SignUpState } from '@/@types/signup';

export function SignUpForm({ clubList }: { clubList: SimpleClubData[] }) {
  const router = useRouter();
  const [state, formAction] = useFormState<SignUpState, FormData>(signUpUser, null);
  const [pending, startTransaction] = useTransition();
  const [totalError, setTotalError] = useState<string | null>(null);

  const {
    register,
    formState: { isValid, errors },
    setError,
    setValue,
  } = useForm<SignUpFormValues>({
    mode: 'all',
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (!state) return;
    if (state.status === 'totalError') {
      setTotalError(() => state.message);
    }
    if (state.status === 'error') {
      console.log(state);
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<SignUpFormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
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
        clubList={clubList}
      />
      {totalError !== null && <div className="">{totalError}</div>}
    </form>
  );
}
