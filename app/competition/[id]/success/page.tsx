import React from 'react';
import CheckCircleIcon from '@/app/_asset/icons/check-circle.svg';
import ClockIcon from '@/app/_asset/icons/clock.svg';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import { FeeCard, ParticipantInfo } from '@/components/organism/CompetitionPage';
import { getApplyResult } from '@/app/_actions/getApplyResult';
import type { ApplyResultData } from '@/@types/apply';
import SuccessButtons from '@/components/organism/CompetitionPage/SuccessPage/SuccessButtons/SuccessButtons';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import ApplyPolicy from '@/components/organism/CompetitionPage/SuccessPage/ApplyPolicy/ApplyPolicy';

const page = async ({ params }: { params: { id: number } }) => {
  const { applicants, applicantsInfo, competitionInfo }: ApplyResultData =
    await getApplyResult(params.id);

  const waiting = applicantsInfo.waitingNumber ? true : false;

  return (
    <div className="relative flex h-full w-full flex-col">
      <HeaderBar title="대회 신청 완료" backBtn />
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex w-full flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <div className="flex items-center justify-start gap-[8px]">
            {waiting ? (
              <>
                <ClockIcon width={28} height={28} fill="#121212" />
                <div className="text-headline-4">대기 신청을 완료했습니다!</div>
              </>
            ) : (
              <>
                <CheckCircleIcon width={28} height={28} fill="#138C59" />
                <div className="text-headline-4">대회 신청을 완료했습니다!</div>
              </>
            )}
          </div>

          <div className="flex w-full flex-col items-center gap-[20px]">
            <FeeCard
              competitionInfo={competitionInfo}
              expiredDate={applicantsInfo.expiredDate}
            />

            <ApplyPolicy waiting={waiting} />
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col gap-[24px] bg-white px-[20px] py-[24px]">
          <ParticipantInfo applicants={applicants} />

          <div className="flex flex-col gap-[8px]">
            <div className="text-headline-6">대회 안내</div>
            <CompInfoCard data={competitionInfo} />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 flex w-full items-center justify-center gap-[12px] p-[20px]">
        <SuccessButtons waiting={waiting} applicantsId={applicantsInfo.id} />
      </div>
    </div>
  );
};

export default page;
