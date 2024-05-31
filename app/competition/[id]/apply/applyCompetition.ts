'use server';
import { ApplyState } from '@/components/organism/CompetitionPage/ApplyPage/ApplyForm/ApplyForm';
import { cookies } from 'next/headers';

export const applyCompetition = async (
  prevState: ApplyState | null,
  formData: FormData,
): Promise<ApplyState> => {
  try {
    formData.delete('userName');
    formData.delete('phone');
    const id = formData.get('id');
    formData.delete('id');

    const cookie = cookies();
    const token = cookie.get('access')!;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/apply/`,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: formData,
      },
    );

    const data = await res.json();
    console.log('data', data);

    if (!res.ok) {
      return {
        status: 'error',
        message: data.error,
      };
    }

    return {
      status: 'success',
      message: `신청 완료`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: '서버 에러',
    };
  }
};
