'use client';

import { passwordSchema } from '@/lib/utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { Dispatch, SetStateAction, useEffect, useTransition } from 'react';
import { useFormState } from 'react-dom';
import { FieldPath, useForm } from 'react-hook-form';
import ChangePasswordField from './ChangePasswordField/ChangePasswordField';
import type { PasswordState, PasswordValues } from '@/@types/password';
import Button from '@/components/core/Button/Button';
import { useRouter } from 'next/navigation';
import { changePassword } from '@/app/_actions/changePassword';

const ChangePasswordForm = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [state, formAction] = useFormState<PasswordState, FormData>(changePassword, null);
  const [pending, startTransaction] = useTransition();
  const {
    register,
    formState: { isValid, errors },
    setError,
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
      setIsOpen(() => false);
      router.push('/signin');
    }
  }, [state, setError, setIsOpen, router]);

  return (
    <form
      action={(formData) => startTransaction(() => formAction(formData))}
      className="flex w-full flex-col items-center gap-[24px] px-[20px]"
    >
      <ChangePasswordField
        register={register}
        errors={errors}
        type="prevPassword"
        label="기존 비밀번호"
      />
      <ChangePasswordField
        register={register}
        errors={errors}
        type="changedPassword"
        label="변경할 비밀번호"
      />
      <ChangePasswordField
        register={register}
        errors={errors}
        type="confirmPassword"
        label="비밀번호 확인"
      />
      <div className="mt-[20px] flex w-full items-center justify-center gap-[10px]">
        <Button
          type="button"
          variant="secondary"
          label="취소"
          size="md"
          colors="gray"
          onClick={() => setIsOpen(() => false)}
        />
        <Button type="submit" label="변경" size="md" disabled={pending || !isValid} />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
