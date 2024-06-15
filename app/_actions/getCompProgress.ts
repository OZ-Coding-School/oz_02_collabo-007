import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getCompProgress = async (
  id: number,
  searchParams: { roundnumber?: number },
) => {
  try {
    const { roundnumber } = searchParams ?? {};
    const params = new URLSearchParams();

    if (roundnumber) params.append('roundnumber', `${roundnumber}`);

    const res = await fetchWithToken(
      ` ${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/status/?${params.toString()}`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    if (!res.ok) {
      throw new Error('error');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
