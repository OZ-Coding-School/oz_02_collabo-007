import { ISearchParams } from './getCompData';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

export const getMyCompData = async (searchParams?: ISearchParams, count?: number) => {
  const { status = 'all' } = searchParams ?? {};
  const params = new URLSearchParams();

  if (status !== 'all') params.set('status', status);

  try {
    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/mycompetitions/?${params.toString()}`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
