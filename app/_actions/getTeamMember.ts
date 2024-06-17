export const getTeamMember = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/${id}/userlist`, {
    next: { revalidate: 3600 },
  }).then((res) => res.json());
  return res;
};
