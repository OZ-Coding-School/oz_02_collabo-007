'use server';
import { changeTitleRanking } from '@/app/_actions/changeTitleRanking';

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const res = await changeTitleRanking(data.type);
    return Response.json(res);
  } catch (error) {
    return new Response('Failed to fetch data', {
      status: 500,
    });
  }
}
