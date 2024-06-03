import type { Competition } from '@/@types/competition';
import { ISearchParams } from '@/components/module/CompListSection/CompList/CompList';

export const getCompData = async (searchParams: ISearchParams | undefined) => {
  'use server';
  const { gender, type, status = '전체', tier = '전체' } = searchParams ?? {};

  const params = new URLSearchParams();

  if (gender) params.append('gender', gender);
  if (type) params.append('matchType', type);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
      cache: 'no-cache',
    },
  ).then((res) => res.json());

  const category: { [key: string]: string } = {
    '신청 가능': '진행 전',
    '신청 불가능': '진행 전',
    '대기 가능': '진행 전',
    '대회 진행전': '진행 전',
    '대회 진행중': '진행 중',
    '대회 종료': '종료',
  };

  const setCategory = (comp: Competition): Competition => {
    comp['category'] = category[comp.status];
    return comp;
  };

  const newArr = res
    .map((ele: Competition) => setCategory(ele))
    .filter((ele: Competition) => (tier !== '전체' ? ele.tier.includes(tier) : ele))
    .filter((ele: Competition) => (status !== '전체' ? ele.category === status : ele));

  return newArr;
};
