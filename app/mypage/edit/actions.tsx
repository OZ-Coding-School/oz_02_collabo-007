'use server';

import type { SignUpState } from '@/@types/signup';
import { signUpSchema } from '@/lib/utils/validation';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

export const editUser = async (
  prevState: SignUpState | null,
  formData: FormData,
): Promise<SignUpState> => {
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

    formData.delete('confirmPassword');
    formData.delete('clubName');

    // 빈 이미지 파일 임시 조건 처리
    const imageChange = formData.get('imageChange');
    if (imageChange === 'false') {
      formData.delete('imageFile');
    }

    const imageData = formData.get('imageFile');
    if (imageChange === 'true' && imageData instanceof File && imageData.size === 0) {
      formData.delete('imageFile');
      formData.append('imageFile', '');
    }
    formData.delete('imageChange');

    const cookie = cookies();
    const user = cookie.get('access')!;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/update/`,
      {
        credentials: 'include',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${user.value}`,
        },
        body: formData,
      },
    );
    console.log(formData);

    const data = await res.json();

    if (!res.ok) {
      return {
        status: 'totalError',
        message: data.message,
      };
    }

    revalidateTag('userData');

    return {
      status: 'success',
      message: `Login Success`,
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
