import Dialog from '@/components/core/Dialog/Dialog';
import { AnimatePresence } from 'framer-motion';
import React, { Dispatch, FC, SetStateAction } from 'react';
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm';
import Button from '@/components/core/Button/Button';
import { FieldErrors } from 'react-hook-form';
import { SignUpFormValues } from '@/@types/signup';

interface SignUpDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isAlert: boolean;
  setIsAlert: Dispatch<SetStateAction<boolean>>;
  errors: FieldErrors<SignUpFormValues>;
}

const SignUpDialog: FC<SignUpDialogProps> = ({
  isOpen,
  setIsOpen,
  isAlert,
  setIsAlert,
  errors,
}) => {
  return (
    <>
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
};

export default SignUpDialog;
