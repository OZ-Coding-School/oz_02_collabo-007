export const getUserData = async (id: number) => {
  'use server';
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => res.json());

  return res;
};
