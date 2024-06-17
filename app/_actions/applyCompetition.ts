'use server';
import { ApplyState } from '@/lib/hook/useApplyForm';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { revalidateTag } from 'next/cache';

export const applyCompetition = async (
  prevState: ApplyState | null,
  formData: FormData,
): Promise<ApplyState> => {
  try {
    formData.delete('userName');
    formData.delete('phone');
    const id = formData.get('id');
    formData.delete('id');

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/apply/`,
      {
        credentials: 'include',
        method: 'POST',
        body: formData,
      },
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        status: 'error',
        message: data.error,
      };
    }

    revalidateTag('compData');

    return {
      status: 'success',
      message: `신청 완료`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Error occurred on the server. Please try again later.',
    };
  }
};
