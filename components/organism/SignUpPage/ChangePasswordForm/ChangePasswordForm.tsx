'use client';

import { passwordSchema } from '@/lib/utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useTransition } from 'react';
import { useFormState } from 'react-dom';
import { FieldPath, useForm } from 'react-hook-form';
import { changePassword } from './actions';
import ChangePasswordField from './ChangePasswordField/ChangePasswordField';

export interface PasswordValues {
  prevPassword: string;
  changedPassword: string;
  ConfirmPassword: string;
}

export type PasswordState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?:
        | {
            path: string;
            message: string;
          }[]
        | undefined;
    }
  | {
      status: 'totalError';
      message: string;
    }
  | null;

const ChangePasswordForm = () => {
  const [state, formAction] = useFormState<PasswordState, FormData>(changePassword, null);
  const [pending, startTransaction] = useTransition();
  const {
    register,
    formState: { isValid, errors },
    setError,
    setValue,
  } = useForm<PasswordValues>({
    mode: 'all',
    resolver: zodResolver(passwordSchema),
  });

  useEffect(() => {
    if (!state) return;
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<PasswordValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
      console.log(state.message);
      // router.push('/');
    }
  }, [state, setError]);

  return (
    <form action={(formData) => startTransaction(() => formAction(formData))}>
      <ChangePasswordField register={register} errors={setError} type="prevPassword" />
    </form>
  );
};

export default ChangePasswordForm;
