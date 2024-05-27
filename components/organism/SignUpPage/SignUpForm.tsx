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
    isOpen,
    setIsOpen,
  } = useSignUpForm(userData);

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

      <SignUpDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        errors={errors}
      />
    </>
  );
};

export default SignUpForm;
