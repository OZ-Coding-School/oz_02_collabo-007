export const getUserRanking = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}/ranking`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
