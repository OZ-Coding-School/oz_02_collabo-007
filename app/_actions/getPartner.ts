'use server';
import { fetchWithToken } from '@/lib/utils/fetchWithToken';
import { cookies } from 'next/headers';

const getPartner = async (query: string, id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('access');

    const params = new URLSearchParams();
    params.append('query', query);

    const res = await fetchWithToken(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/partnersearch/?${params.toString()}`,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          // Authorization: token ? `Bearer ${token.value}` : '',
        },
      },
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPartner;
