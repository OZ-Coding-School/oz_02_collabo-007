import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';

import {
  CompetitionButton,
  CompetitionInfo,
  ImageBanner,
} from '@/components/organism/CompetitionPage';

const page = ({ params }: { params: { id: number } }) => {
  const data = TEST_DATA;

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 상세 정보" backBtn />

      <ImageBanner />

      <div className="no-scrollbar flex flex-1 flex-col items-start overflow-scroll px-[20px] py-[24px]">
        <CompetitionInfo data={data} />

        <CompetitionButton status={data.status} />
      </div>
    </div>
  );
};

export default page;

const TEST_DATA = {
  name: '챔피언스리그',
  status: '신청가능 --> 좀 더 구체적인 설계 필요할 듯?',
  startDate: '2024-04-10 14:00',
  matchType: {
    field: '남성',
    type: '복식',
  },
  tier: '개나리부',
  round: '128강',
  location: '열우물 테니스장',
  address: '서울시 서초구 강남대로 99길 45',
  description: '열우물 테니스장에서 열리는 테니스 대회',
  rule: '대회 규칙',
  siteLink: '#',
};
