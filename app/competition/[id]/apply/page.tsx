import { getMyData } from '@/app/getMyData';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import { ApplyForm } from '@/components/organism/CompetitionPage';
import React from 'react';
import { getCompDetail } from '../getCompDetail';
import type { UserData } from '@/@types/user';
import type { CompDetailInfo } from '@/@types/competition';

const page = async ({ params }: { params: { id: number } }) => {
  const [userData, competitionDetailData]: [UserData, CompDetailInfo] = await Promise.all(
    [getMyData(), getCompDetail(params.id)],
  );

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 신청" backBtn />

      <div className="no-scrollbar flex flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex bg-white px-[20px] py-[24px]">
          <div className="flex w-full flex-col gap-[16px]">
            <div className="text-headline-3">{competitionDetailData.name}</div>

            <CompInfoCard data={competitionDetailData} />
          </div>
        </div>
        <ApplyForm userData={userData} competitionId={params.id} />
      </div>
    </div>
  );
};

export default page;
