import React from 'react';
import {
  CompButton,
  CompDetail,
  ImageBanner,
} from '@/components/organism/CompetitionPage';
import type { CompetitionDetails } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';

const CompDetailSection = async ({ id }: { id: number }) => {
  const compDetailData: CompetitionDetails = await getCompDetail(id);

  return (
    <div className="no-scrollbar flex h-full w-full flex-1 flex-col overflow-scroll bg-white">
      <ImageBanner img={compDetailData.imageUrl} />

      <div className="flex flex-1 flex-col items-start px-[20px] py-[24px]">
        <CompDetail data={compDetailData} />
        <CompButton
          id={compDetailData.id}
          status={compDetailData.status}
          waitingCount={compDetailData.waitingCount}
        />
      </div>
    </div>
  );
};

export default CompDetailSection;
