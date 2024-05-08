'use server';

import { formSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';

export type State =
  | {
      status: 'success';
      message: string;
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
  data: FormData,
): Promise<State> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data);
    console.log(data.get('profile'));

    const { phone, password, username, birth } = formSchema.parse(data);
    return {
      status: 'success',
      message: `Welcome, ${phone}`,
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
