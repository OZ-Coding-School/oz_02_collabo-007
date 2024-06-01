export const getClubList = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/club/list`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
