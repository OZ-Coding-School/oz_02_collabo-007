'use server';

import { signInFormSchema } from '@/lib/utils/signInValidation';
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
  | null;

export async function signInUser(
  prevState: State | null,
  formData: FormData,
): Promise<State> {
  try {
    const { phone, password } = signInFormSchema.parse(formData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin/`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone: phone, password: password }),
    });

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

    const data = await res.json();

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
      message: 'Something went wrong. Please try again.',
    };
  }
}
