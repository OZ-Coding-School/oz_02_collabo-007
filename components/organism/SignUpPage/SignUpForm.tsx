'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormContent } from './SignUpFormContent';
import { editSchema, signUpSchema } from '@/lib/utils/validation';
import { signUpUser } from '@/app/signup/actions';
import { useRouter } from 'next/navigation';
import type { SimpleClubData } from '@/@types/club';
import type { SignUpFormValues, SignUpState } from '@/@types/signup';
import type { UserData } from '@/@types/user';
import { AnimatePresence } from 'framer-motion';
import Dialog from '@/components/core/Dialog/Dialog';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import { editUser } from '@/app/mypage/edit/editUser';

export function SignUpForm({
  clubList,
  userData,
}: {
  clubList: SimpleClubData[];
  userData?: UserData;
}) {
  const router = useRouter();
  const fn = userData ? editUser : signUpUser;
  const [state, formAction] = useFormState<SignUpState, FormData>(fn, null);
  const [pending, startTransaction] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    formState: { isValid, errors },
    setError,
    setValue,
  } = useForm<SignUpFormValues>({
    mode: 'all',
    resolver: zodResolver(userData ? editSchema : signUpSchema),
  });

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
      router.push('/');
    }
  }, [state, setError]);

  console.log(errors);
  return (
    <>
      <form action={(formData) => startTransaction(() => formAction(formData))}>
        <SignUpFormContent
          register={register}
          isValid={isValid}
          errors={errors}
          setValue={setValue}
          clubList={clubList}
          userData={userData}
          setIsOpen={setIsOpen}
        />
        {errors?.total !== null && (
          <div className="absolute bottom-0 m-auto">{errors.total?.message}</div>
        )}
      </form>
      <AnimatePresence mode="wait">
        {isOpen && (
          <Dialog setIsOpen={setIsOpen} title="비밀번호 변경">
            <ChangePasswordForm setIsOpen={setIsOpen} />
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
