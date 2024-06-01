import getPartner from '@/app/_actions/getPartner';

export async function GET(request: Request, { params }: { params: { id: number } }) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return new Response('Query parameter is required', {
      status: 400,
    });
  }

  try {
    const data = await getPartner(query, params.id);
    return Response.json(data);
  } catch (error) {
    return new Response('Failed to fetch data', {
      status: 500,
    });
  }
}
