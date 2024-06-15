export const getTiers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tiers/all/`, {
      method: 'GET',
      credentials: 'include',
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('server errors');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
