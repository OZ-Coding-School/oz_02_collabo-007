'use server';

export const verifyToken = async (
  token: string,
): Promise<{ detail?: string; code?: string }> => {
  const body = { token: `${token}` };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/token/verify/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return { code: 'token_not_valid' };
  }

  const data = await res.json();

  return data;
};
