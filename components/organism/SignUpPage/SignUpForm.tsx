'use client';

import { FieldPath, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormContent } from './SignUpFormContent';
import { editSchema, signUpSchema } from '@/lib/utils/validation';
import { useRouter } from 'next/navigation';
import type { ClubSearchData } from '@/@types/club';
import type { SignUpFormValues, SignUpState } from '@/@types/signup';
import type { UserData } from '@/@types/user';
import { AnimatePresence } from 'framer-motion';
import Dialog from '@/components/core/Dialog/Dialog';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import { editUser } from '@/app/mypage/edit/editUser';
import Button from '@/components/core/Button/Button';
import { signUpUser } from '@/app/signup/signUpUser';

export function SignUpForm({
  clubList,
  userData,
}: {
  clubList: ClubSearchData[];
  userData?: UserData;
}) {
  const router = useRouter();
  const fn = userData ? editUser : signUpUser;
  const [state, formAction] = useFormState<SignUpState, FormData>(fn, null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pending, startTransaction] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const {
    register,
    formState: { isValid, errors },
    setError,
    getValues,
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
    if (state.status === 'alert') {
      state.errors?.forEach((error) => {
        setIsAlert(() => true);
        setError(error.path as FieldPath<SignUpFormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === 'success') {
      router.push('/');
    }
  }, [state, setError, router]);

  return (
    <>
      <form action={(formData) => startTransaction(() => formAction(formData))}>
        <SignUpFormContent
          register={register}
          isValid={isValid}
          errors={errors}
          setError={setError}
          getValues={getValues}
          clubList={clubList}
          userData={userData}
          setIsOpen={setIsOpen}
        />
      </form>

      <AnimatePresence mode="wait">
        {isOpen && (
          <Dialog setIsOpen={setIsOpen} title="비밀번호 변경">
            <ChangePasswordForm setIsOpen={setIsOpen} />
          </Dialog>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {errors && isAlert && (
          <Dialog setIsOpen={setIsAlert} title="에러">
            <>
              <div className="">{Object.values(errors)[0]?.message}</div>
              <div className="w-[40%]">
                <Button
                  label="확인"
                  size="sm"
                  className="bg-error-60"
                  onClick={() => setIsAlert(() => false)}
                />
              </div>
            </>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
