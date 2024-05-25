'use client';

import { FieldPath, FormProvider, useForm } from 'react-hook-form';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { editSchema, signUpSchema } from '@/lib/utils/validation';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Dialog from '@/components/core/Dialog/Dialog';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';
import { editUser } from '@/app/mypage/edit/editUser';
import Button from '@/components/core/Button/Button';
import { signUpUser } from '@/app/signup/signUpUser';
import SignUpFormContent from './SignUpFormContent';
import type { ClubSearchData } from '@/@types/club';
import type { SignUpFormValues, SignUpState } from '@/@types/signup';
import type { UserData } from '@/@types/user';

const SignUpForm = ({
  clubList,
  userData,
}: {
  clubList: ClubSearchData[];
  userData?: UserData;
}) => {
  const router = useRouter();
  const fn = userData ? editUser : signUpUser;
  const [state, formAction] = useFormState<SignUpState, FormData>(fn, null);
  const [pending, startTransaction] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const methods = useForm<SignUpFormValues>({
    mode: 'all',
    resolver: zodResolver(userData ? editSchema : signUpSchema),
  });

  const {
    formState: { errors },
    setError,
  } = methods;

  useEffect(() => {
    if (!state) return;

    if (state.status !== 'success') {
      setIsAlert(state.status === 'alert');
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<SignUpFormValues>, { message: error.message });
      });
    }

    if (state.status === 'success') {
      router.push('/');
    }
  }, [state, setError, router]);

  return (
    <>
      <FormProvider {...methods}>
        <form action={(formData) => startTransaction(() => formAction(formData))}>
          <SignUpFormContent
            clubList={clubList}
            userData={userData}
            setIsOpen={setIsOpen}
          />
        </form>
      </FormProvider>

      {isOpen && (
        <AnimatePresence mode="wait">
          <Dialog setIsOpen={setIsOpen} title="비밀번호 변경">
            <ChangePasswordForm setIsOpen={setIsOpen} />
          </Dialog>
        </AnimatePresence>
      )}

      {errors && isAlert && (
        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      )}
    </>
  );
};

export default SignUpForm;
