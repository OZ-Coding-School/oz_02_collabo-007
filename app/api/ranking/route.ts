'use server';
import { changeTitleRanking } from '@/app/_actions/changeTitleRanking';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const res = await changeTitleRanking(data.type);
    return NextResponse.redirect(new URL('/mypage', request.url));
  } catch (error) {
    return new Response('Failed to fetch data', {
      status: 500,
    });
  }
}
