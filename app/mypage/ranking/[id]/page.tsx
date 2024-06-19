import { GenderKey } from '@/@types/competition';
import type { MyProfileRanking } from '@/@types/ranking';
import { ISearchParams } from '@/app/_actions/getCompData';
import { getUserRanking } from '@/app/_actions/getUserRanking';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import RankingButtonList from '@/components/organism/MyPage/RankingButtonList/RankingButtonList';
import React from 'react';

const page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { gender: GenderKey };
}) => {
  const myProfileRanking: MyProfileRanking = await getUserRanking(params.id);

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <HeaderBar title="대표 랭킹 설정" backBtn />
      <RankingButtonList
        gender={searchParams.gender}
        myProfileRanking={myProfileRanking}
      />
    </div>
  );
};

export default page;
