import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import CompInfoCard from '@/components/organism/CompetitionProgressPage/CompInfoCard';
import MatchList from '@/components/organism/CompetitionProgressPage/MatchList';
import CompListOptionMenuButton from '@/components/module/CompListOptionMenuButton/CompListOptionMenuButton';
import type { CompDetailInfo } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';

const page = async ({ params }: { params: { id: number } }) => {
  const compDetailData: CompDetailInfo = await getCompDetail(params.id);

  function powersOfTwo(totalRounds: number) {
    return Array.from({ length: totalRounds }, (_, i) => Math.pow(2, i + 1));
  }

  console.log(powersOfTwo(compDetailData.totalRounds));

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 현황" backBtn />
      <div className="flex w-full flex-col items-start gap-[16px] self-stretch p-[20px]">
        <CompInfoCard compDetailData={compDetailData} />
        {/* <CompListOptionMenuButton
          variant="circle"
          pathName={`competition/${params.id}/status/`}
          query={}
          title={}
        /> */}
      </div>
      <MatchList params={params.id} />
    </div>
  );
};

export default page;
