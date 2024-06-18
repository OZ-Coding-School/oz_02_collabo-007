import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import { ApplyForm } from '@/components/organism/CompetitionPage';
import React from 'react';
import type { UserData } from '@/@types/user';
import type { CompetitionDetails } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';
import { getMyData } from '@/app/_actions/getMyData';

const page = async ({ params }: { params: { id: number } }) => {
  const [userData, competitionDetailData]: [UserData, CompetitionDetails] =
    await Promise.all([getMyData(), getCompDetail(params.id)]);

  return (
    <div className="no-scrollbar flex flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
      <div className="flex bg-white px-[20px] py-[24px]">
        <div className="flex w-full flex-col gap-[16px]">
          <div className="text-headline-3">{competitionDetailData.name}</div>

          <CompInfoCard data={competitionDetailData} />
        </div>
      </div>
      <ApplyForm
        userData={userData}
        competitionId={params.id}
        matchType={competitionDetailData.matchTypeDetails.type}
      />
    </div>
  );
};

export default page;
