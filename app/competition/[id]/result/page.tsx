import type { CompetitionResult } from '@/@types/competition';
import { getCompResult } from '@/app/_actions/getCompResult';
import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import ResultCard from '@/components/module/ResultCard/ResultCard';
import { printMatchTypeInfo } from '@/lib/utils/printMatchTypeInfo';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { id: number } }) => {
  const result: CompetitionResult = await getCompResult(params.id);

  const {
    tier,
    matchTypeDetails: { gender, type },
    winnerParticipants,
    runnerUpParticipants,
  } = result;

  return (
    <div className="no-scrollbar flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="대회 결과" backBtn />

      <div className="flex w-full flex-col items-start gap-[16px] p-[20px]">
        <div className="text-headline-2">{result.competitionName}</div>
        <div className="flex gap-[4px] text-sub-headline-2">
          <div>{printMatchTypeInfo(gender, type)}</div>
          <div>{'\u00B7'}</div>
          <div>{tier}</div>
        </div>
      </div>

      <div className="no-scrollbar flex flex-1 flex-col gap-[16px] overflow-scroll bg-gray-10 p-[20px]">
        <ResultCard userData={winnerParticipants} winner />
        <ResultCard userData={runnerUpParticipants} />
      </div>

      <Link href={`/competition/${params.id}/progress`} className="w-full p-[20px]">
        <Button label="대회 전체 결과 보기" />
      </Link>
    </div>
  );
};

export default page;
