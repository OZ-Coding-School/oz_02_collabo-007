'use server';

import { signUpSchema } from '@/lib/utils/validation';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

export type State =
  | {
      status: 'success';
      message: string;
      token: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | {
      status: 'totalError';
      message: string;
    }
  | null;

export const signUpUser = async (
  prevState: State | null,
  formData: FormData,
): Promise<State> => {
  try {
    const { password, confirmPassword } = signUpSchema.parse(formData);

    if (confirmPassword !== password) {
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

    formData.delete('imageFile');
    formData.append('imageFile', '');
    console.log(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    // console.log(res);

    const cookieString = res.headers.get('set-cookie');
    const startIndex = (cookieString as string).indexOf('refresh=') + 'refresh='.length;
    const endIndex = (cookieString as string).indexOf(';', startIndex);
    const refreshValue = (cookieString as string).substring(
      startIndex,
      endIndex !== -1 ? endIndex : undefined,
    );

    const data = await res.json();

    cookies().set({
      name: 'refresh',
      value: refreshValue,
      httpOnly: true,
    });

    cookies().set({
      name: 'access',
      value: data.access,
      httpOnly: true,
    });

    if (!res.ok) {
      return {
        status: 'totalError',
        message: data.message,
      };
    }

    return {
      status: 'success',
      message: `Login Success`,
      token: data.access,
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
      message: 'Something went wrong. Please try again.',
    };
  }
};
