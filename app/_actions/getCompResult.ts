'use server';

export const getCompResult = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/result/`,
      {
        method: 'GET',
        credentials: 'include',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
