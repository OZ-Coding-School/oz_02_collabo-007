import React from 'react';
import Button from '@/components/core/Button/Button';
import CheckCircleIcon from '@/app/_asset/icons/check-circle.svg';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import { FeeCard, ParticipantInfo } from '@/components/organism/CompetitionPage';
import { getApplyResult } from '@/app/_actions/getApplyResult';
import type { ApplyResultData } from '@/@types/apply';
import SuccessButtons from '@/components/organism/CompetitionPage/SuccessPage/SuccessButtons/SuccessButtons';

const page = async ({ params }: { params: { id: number } }) => {
  const { applicants, applicantsInfo, competitionInfo }: ApplyResultData =
    await getApplyResult(params.id);

  return (
    <>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <div className="flex items-center justify-start gap-[8px]">
            <CheckCircleIcon width={28} height={28} fill="#138C59" />
            <div className="text-headline-4">대회 신청을 완료했습니다!</div>
          </div>

          <FeeCard
            competitionInfo={competitionInfo}
            expiredDate={applicantsInfo.expiredDate}
          />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <ParticipantInfo applicants={applicants} />

          <div className="flex flex-col gap-[8px]">
            <div className="text-headline-6">대회 안내</div>
            <CompInfoCard data={competitionInfo} />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-[12px] p-[20px]">
        <SuccessButtons />
      </div>
    </>
  );
};

export default page;
