import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editSchema, signUpSchema } from '@/lib/utils/validation';
import { editUser } from '@/app/mypage/edit/editUser';
import { signUpUser } from '@/app/signup/signUpUser';
import { useFormState } from 'react-dom';
import type { SignUpFormValues, SignUpState } from '@/@types/signup';
import type { FieldPath } from 'react-hook-form';
import type { UserData } from '@/@types/user';

const useSignUpForm = (userData: UserData | undefined) => {
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
    setError,
    formState: { errors },
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

  return {
    methods,
    isAlert,
    setIsAlert,
    formAction,
    errors,
    state,
    isOpen,
    setIsOpen,
    pending,
    startTransaction,
  };
};

export default useSignUpForm;