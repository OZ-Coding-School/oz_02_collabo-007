import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CheckCircleIcon from '@/app/_asset/icons/check-circle.svg';
import React from 'react';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import { FeeCard, ParticipantInfo } from '@/components/organism/CompetitionPage';

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
            <CompInfoCard data={data} />
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
  name: '윔블던 선수건 대회',
  startDate: '2024-07-01T19:00:00',
  tier: '브론즈 (남자/단식)',
  matchTypeDetails: { gender: 'male', type: 'single' },
  totalRounds: 128,
  totalSets: null,
  location: 'Wimbledon - Centre Court',
  address: 'Church Road London SW19 5AF',
  description: '영국 런던 윔블던에서 개최하는 테니스 그랜드슬램 대회',
  rule: '잔디/야외 경기장\r\n5판3선승제\r\n총 128강',
  phone: '+44 20 8946 6131',
  siteLink: 'https://www.wimbledon.com/',
  imageUrl:
    'https://tennis-dev.s3.amazonaws.com/5c6b2c57-49a0-4d4c-a28c-a379759aa80a.jpeg',
  status: '신청 가능',
  waitingCount: 0,
};
