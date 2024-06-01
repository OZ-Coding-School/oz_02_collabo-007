'use client';

import { FormProvider } from 'react-hook-form';
import SignUpFormContent from './SignUpFormContent';
import type { ClubSearchData } from '@/@types/club';
import type { UserData } from '@/@types/user';
import useSignUpForm from '@/lib/hook/useSignUpForm';
import SignUpDialog from './SignUpDialog/SignUpDialog';

const SignUpForm = ({
  clubList,
  userData,
}: {
  clubList: ClubSearchData[];
  userData?: UserData;
}) => {
  const {
    methods,
    isAlert,
    setIsAlert,
    formAction,
    errors,
    startTransaction,
    isChangePassword,
    setIsChangePassword,
  } = useSignUpForm(userData);

  return (
    <>
      <FormProvider {...methods}>
        <form action={(formData) => startTransaction(() => formAction(formData))}>
          <SignUpFormContent
            clubList={clubList}
            userData={userData}
            setIsChangePassword={setIsChangePassword}
          />
        </form>
      </FormProvider>

      <SignUpDialog
        isChangePassword={isChangePassword}
        setIsChangePassword={setIsChangePassword}
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        errors={errors}
      />
    </>
  );
};

export default SignUpForm;
