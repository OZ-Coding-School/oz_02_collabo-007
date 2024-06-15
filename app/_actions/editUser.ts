'use server';

import { SignUpState } from '@/@types/signup';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { editSchema } from '@/lib/utils/validation';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { ZodError } from 'zod';

export const editUser = async (
  prevState: SignUpState | null,
  formData: FormData,
): Promise<SignUpState> => {
  try {
    const { phone } = editSchema.parse(formData);

    formData.set('phone', phone.replace(/\s+/g, ''));

    formData.delete('confirmPassword');
    formData.delete('clubName');

    const imageChange = formData.get('imageChange');
    if (imageChange === 'false') {
      formData.delete('imageFile');
    }

    const imageData = formData.get('imageFile');
    if (imageChange === 'true' && imageData instanceof File && imageData.size === 0) {
      formData.delete('imageFile');
      formData.append('removeImage', 'True');
    }
    formData.delete('imageChange');

    const cookie = cookies();
    const token = cookie.get('access')!;

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile/update/`,
      {
        credentials: 'include',
        method: 'PUT',
        body: formData,
      },
    );

    const data = await res.json();

    if (!res.ok) {
      const errorKey = Object.keys(data['errors'])[0];
      const errorValue = data['errors'][errorKey];

      return {
        status: 'alert',
        message: 'Invalid form data',
        errors: [
          {
            path: errorKey,
            message: errorValue,
          },
        ],
      };
    }

    revalidateTag('myData');

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
