'use server';

import { PasswordState } from '@/@types/password';
import { passwordSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';

export const changePassword = async (
  prevState: PasswordState | null,
  formData: FormData,
): Promise<PasswordState> => {
  try {
    const { prevPassword, changedPassword, confirmPassword } =
      passwordSchema.parse(formData);

    if (confirmPassword !== changedPassword) {
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
    formData.delete('confirmPassword');

    if (prevPassword === changedPassword) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: [
          {
            path: 'changedPassword',
            message: `비밀번호가 기존의 비밀번호와 일치합니다.`,
          },
        ],
      };
    }

    console.log(formData);

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
