export const getUserRanking = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}/ranking`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      cache: 'force-cache',
      next: { tags: ['myTitleRanking'] },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
