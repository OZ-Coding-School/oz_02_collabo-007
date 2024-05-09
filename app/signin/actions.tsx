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

    console.log(phone, password);
    if (!phone) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: [
          {
            path: 'phone',
            message: '휴대폰번호를 입력해주세요.',
          },
        ],
      };
    }

    if (!password) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: [
          {
            path: 'password',
            message: '비밀번호를 입력해주세요.',
          },
        ],
      };
    }
    console.log(formData);
    const res = await fetch(`http://localhost:3000/api/v1/auth/signin/`, {
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
