import { signInFormSchema } from '@/lib/utils/signInValidation';
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

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return {
      status: 'success',
      message: `Login Success`,
      token: data.access,
    };

    //로컬스토리지에 액세스 토큰 저장 예정
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
