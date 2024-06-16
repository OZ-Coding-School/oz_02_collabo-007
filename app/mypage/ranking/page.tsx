import type { MyProfileRanking } from '@/@types/ranking';
import { getMyData } from '@/app/_actions/getMyData';
import { getMyTitleRanking } from '@/app/_actions/getMyTitleRanking';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import RankingButtonList from '@/components/organism/MyPage/RankingButtonList/RankingButtonList';
import React from 'react';

const Ranking = async () => {
  const myProfileRanking: MyProfileRanking = await getMyTitleRanking();
  const { gender } = await getMyData();

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <HeaderBar title="대표 랭킹 설정" backBtn />
      <RankingButtonList gender={gender} myProfileRanking={myProfileRanking} />
    </div>
  );
};

export default Ranking;
