import Dialog from '@/components/core/Dialog/Dialog';
import { AnimatePresence } from 'framer-motion';
import React, { Dispatch, FC, SetStateAction } from 'react';
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm';
import Button from '@/components/core/Button/Button';
import { FieldErrors } from 'react-hook-form';
import { SignUpFormValues } from '@/@types/signup';

interface SignUpDialog {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isAlert: boolean;
  setIsAlert: Dispatch<SetStateAction<boolean>>;
  errors: FieldErrors<SignUpFormValues>;
}

const SignUpDialog: FC<SignUpDialog> = ({
  isOpen,
  setIsOpen,
  isAlert,
  setIsAlert,
  errors,
}) => {
  return (
    <>
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

export default SignUpDialog;
