import type { Competition } from '@/@types/competition';
import { cookies } from 'next/headers';
import { ISearchParams } from './getMyCompData';

export const getCompData = async (searchParams?: ISearchParams, count?: number) => {
  'use server';
  const cookie = cookies();
  const token = cookie.get('access');
  // status,tier 가 둘 다 있으면 둘 다 필터링이 되어야한다.
  // 한 가지만 있다면 한 가지만 필터링이 되어야 한다.
  // 없으면 아무것도 안 함

  const {
    gender,
    type,
    status = '전체',
    tier = '전체',
    date = 'closest',
  } = searchParams ?? {};

  const params = new URLSearchParams();
  if (gender && gender !== 'all') params.set('gender', gender);
  if (type && type !== 'all') params.set('matchType', type);
  if (count) params.set('count', `${count}`);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/?${params.toString()}`,
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: token ? `Bearer ${token.value}` : '',
      },
      cache: 'no-cache',
    },
  );
  if (!res.ok) {
    return;
  }

  const data = await res.json();
  return data;

  // const category: { [key: string]: string } = {
  //   'Registration Available': '진행 전',
  //   'Registration Unavailable': '진행 전',
  //   'Registration Confirmed': '진행 전',
  //   'Waitlist Available': '진행 전',
  //   before: '진행 전',
  //   during: '진행 중',
  //   ended: '종료',
  // };

  // const setCategory = (comp: Competition): Competition => {
  //   comp['category'] = category[comp.status];
  //   return comp;
  // };

  // const newArr = data
  //   .map((ele: Competition) => setCategory(ele))
  //   .filter((ele: Competition) => (tier !== '전체' ? ele.tier.includes(tier) : ele))
  //   .filter((ele: Competition) => (status !== '전체' ? ele.category === status : ele));

  // const today = new Date().getTime();

  // const sortedArr =
  //   date === 'closest'
  //     ? newArr.sort((a: Competition, b: Competition) => {
  //         const diffA = Math.abs(new Date(a.startDate).getTime() - today);
  //         const diffB = Math.abs(new Date(b.startDate).getTime() - today);
  //         return diffA - diffB;
  //       })
  //     : newArr.sort(
  //         (a: Competition, b: Competition) =>
  //           new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  //       );
  // return sortedArr;
};
