import type { MyProfileRanking, RankingWithoutImage } from '@/@types/ranking';
import { getMyData } from '@/app/_actions/getMyData';
import { getMyProfileRanking } from '@/app/_actions/getMyProfileRanking';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import RankingButtonList from '@/components/organism/MyPage/RankingButtomList/RankingButtonList';
import React from 'react';

type MatchTypeArr = 'single' | 'double' | 'team';

const Ranking = async () => {
  const myProfileRanking: MyProfileRanking = await getMyProfileRanking();
  const { gender } = await getMyData();

  return (
    <div className="relative flex h-full flex-1 flex-col">
      <HeaderBar title="대표 랭킹 설정" backBtn />
      <RankingButtonList gender={gender} myProfileRanking={myProfileRanking} />
    </div>
  );
};

export default Ranking;
