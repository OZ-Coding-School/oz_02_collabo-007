import cancelCompetition from '@/app/_actions/cancelCompetition';

export async function PUT(request: Request, { params }: { params: { id: number } }) {
  try {
    const data = await cancelCompetition(params.id);
    return Response.json(data);
  } catch (error) {
    return new Response('Failed to fetch data', {
      status: 500,
    });
  }
}
