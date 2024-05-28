import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import { cookies } from 'next/headers';

import {
  CompButton,
  CompDetail,
  ImageBanner,
} from '@/components/organism/CompetitionPage';
import type { CompDetailInfo } from '@/@types/competition';

const getCompDetail = async (id: number) => {
  try {
    const cookie = cookies();
    const token = cookie.get('token');

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/competitions/${id}/details/`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: token ? `Bearer ${token.value}` : '',
        },
      },
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: { params: { id: number } }) => {
  const compDetailData: CompDetailInfo = await getCompDetail(params.id);
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 상세 정보" backBtn />

      <ImageBanner img={compDetailData.imageUrl} />

      <div className="no-scrollbar flex flex-1 flex-col items-start overflow-scroll px-[20px] py-[24px]">
        <CompDetail data={compDetailData} />

        <CompButton
          id={compDetailData.id}
          status={compDetailData.status}
          watingCount={compDetailData.waitingCount}
        />
      </div>
    </div>
  );
};

export default page;
