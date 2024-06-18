import type { CompetitionDetails } from '@/@types/competition';
import { UserData } from '@/@types/user';
import { getCompDetail } from '@/app/_actions/getCompDetail';
import { getMyData } from '@/app/_actions/getMyData';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import React from 'react';
import ApplyForm from './ApplyForm/ApplyForm';

const ApplyPageSection = async ({ id }: { id: number }) => {
  const [userData, competitionDetailData]: [UserData, CompetitionDetails] =
    await Promise.all([getMyData(), getCompDetail(id)]);

  return (
    <>
      <div className="flex bg-white px-[20px] py-[24px]">
        <div className="flex w-full flex-col gap-[16px]">
          <div className="text-headline-3">{competitionDetailData.name}</div>

          <CompInfoCard data={competitionDetailData} />
        </div>
      </div>
      <ApplyForm
        userData={userData}
        competitionId={id}
        matchType={competitionDetailData.matchTypeDetails.type}
      />
    </>
  );
};

export default ApplyPageSection;
