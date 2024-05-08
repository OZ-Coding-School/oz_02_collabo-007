'use server';

import { signUpSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';
import { redirect } from 'next/navigation';

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

export async function signUpUser(
  prevState: State | null,
  formData: FormData,
): Promise<State> {
  try {
    const { phone, password, confirmPassword } = signUpSchema.parse(formData);

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

    formData.delete('confirmPassword');
    formData.delete('imageFile');
    formData.delete('club');

    const res = await fetch(`${process.env.API_URL}/auth/signup/`, {
      credentials: 'include',
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    console.log(data);

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
}
