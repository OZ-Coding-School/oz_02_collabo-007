'use server';

import { PasswordState } from '@/@types/password';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { passwordSchema } from '@/lib/utils/validation';
import { cookies } from 'next/headers';
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
            message: `변경할 비밀번호와 기존의 비밀번호가 일치합니다.`,
          },
        ],
      };
    }

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/update/password`,
      {
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prevPassword: prevPassword,
          changedPassword: changedPassword,
        }),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      const errorKey = Object.keys(data)[0];
      const errorValue = data[errorKey];

      return {
        status: 'error',
        message: 'Invalid form data',
        errors: [
          {
            path: errorKey,
            message: errorValue,
          },
        ],
      };
    }

    const signOut = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout/`, {
      method: 'POST',
    });

    if (!signOut.ok) {
      throw new Error('Failed to fetch data');
    }

    cookies().delete('access');
    cookies().delete('refresh');

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
