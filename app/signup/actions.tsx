import { signUpSchema } from '@/lib/utils/validation';
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    const data = await res.json();
    console.log(data);

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
