import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CheckCircleIcon from '@/app/_asset/icons/check-circle.svg';
import InfoDetail from '@/components/organism/CompetitionPage/CompetitionInfo/InfoDetail/InfoDetail';
import { FeeCard, ParticipantInfo } from '@/components/organism/SuccessPage';
import React from 'react';

const page = () => {
  const data = TEST_DATA;

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 신청 완료" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <div className="flex items-center justify-start gap-[8px]">
            <CheckCircleIcon width={28} height={28} fill="#138C59" />
            <div className="text-headline-4">대회 신청을 완료했습니다!</div>
          </div>

          <FeeCard />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <ParticipantInfo />

          <div className="flex flex-col gap-[8px]">
            <div className="text-headline-6">대회 안내</div>
            <InfoDetail data={data} />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-[12px] p-[20px]">
        <Button label="확인" colors="gray" variant="secondary" />
        <Button label="신청 조회하기" />
      </div>
    </div>
  );
};

export default page;

const TEST_DATA = {
  id: 1,
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
