'use server';

import type { SignUpState } from '@/@types/signup';
import { passwordSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';
import { PasswordState } from './ChangePasswordForm';

export const changePassword = async (
  prevState: PasswordState | null,
  formData: FormData,
): Promise<PasswordState> => {
  try {
    const { prevPassword, confirmPassword } = passwordSchema.parse(formData);

    if (confirmPassword !== prevPassword) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: [
          {
            path: 'confirmPassword',
            message: `비밀번호가 일치하지 않습니다.`,
          },
        ],
      };
    }

    // formData.delete('confirmPassword');

    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/update/`,
    //   {
    //     credentials: 'include',
    //     method: 'PUT',
    //     headers: {
    //       Authorization: `Bearer ${user.value}`,
    //     },
    //     body: formData,
    //   },
    // );
    console.log(formData);

    // const data = await res.json();

    // if (!res.ok) {
    //   return {
    //     status: 'error',
    //     message: data.message,
    //   };
    // }

    return {
      status: 'success',
      message: `Password Change Success`,
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: 'error',
      message: `${e}`,
    };
  }
};
