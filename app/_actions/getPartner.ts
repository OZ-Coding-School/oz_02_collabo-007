'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';

const getPartner = async (query: string, id: number) => {
  try {
    const params = new URLSearchParams();
    params.append('query', query);

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/partnersearch/?${params.toString()}`,
      {
        credentials: 'include',
        method: 'GET',
      },
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPartner;
