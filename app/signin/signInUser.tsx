'use server';

import type { SignInState } from '@/@types/signin';
import { signInFormSchema } from '@/lib/utils/validation';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

export async function signInUser(
  prevState: SignInState | null,
  formData: FormData,
): Promise<SignInState> {
  try {
    const { phone } = signInFormSchema.parse(formData);
    formData.set('phone', phone.replace(/\s+/g, ''));

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin/`, {
      credentials: 'include',
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        status: 'error',
        message: 'Bad request',
        errors: [
          { path: 'root', message: '아이디 혹은 비밀번호를 잘못 입력하였습니다.' },
        ],
      };
    }

    const cookieString = res.headers.get('set-cookie');

    const startIndex = (cookieString as string).indexOf('refresh=') + 'refresh='.length;
    const endIndex = (cookieString as string).indexOf(';', startIndex);
    const refreshValue = (cookieString as string).substring(
      startIndex,
      endIndex !== -1 ? endIndex : undefined,
    );

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

    return {
      status: 'success',
      message: `Login Success`,
      token: data.access,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid from data',
        errors: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `${issue.message}`,
        })),
      };
    }
    return {
      status: 'error',
      message: `${error}`,
    };
  }
}
