import React from 'react';
import {
  CompButton,
  CompDetail,
  ImageBanner,
} from '@/components/organism/CompetitionPage';
import type { CompDetailInfo } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';
import { getApplyResult } from '@/app/_actions/getApplyResult';

const CompDetailSection = async ({ id }: { id: number }) => {
  const compDetailData: CompDetailInfo = await getCompDetail(id);
  const res = await getApplyResult(id);
  console.log(res);

  return (
    <div className="no-scrollbar flex h-full w-full flex-col overflow-scroll">
      <ImageBanner img={compDetailData.imageUrl} />

      <div className="no-scrollbar flex flex-1 flex-col items-start overflow-scroll px-[20px] py-[24px]">
        <CompDetail data={compDetailData} />
        <CompButton
          id={compDetailData.id}
          status={compDetailData.status}
          waitingCount={compDetailData.waitingCount}
          applicantsInfo={res && res}
        />
      </div>
    </div>
  );
};

export default CompDetailSection;
