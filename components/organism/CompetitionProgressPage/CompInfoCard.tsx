import type { CompetitionDetails } from '@/@types/competition';
import { printMatchTypeInfo } from '@/lib/utils/printMatchTypeInfo';
import React from 'react';

const CompInfoCard = async ({
  compDetailData,
}: {
  compDetailData: CompetitionDetails;
}) => {
  return (
    <div className="flex flex-col gap-[8px] self-stretch">
      <span className="text-headline-2">{compDetailData.name}</span>
      <span className="text-sub-headline-2 text-gray-80">
        {printMatchTypeInfo(
          compDetailData.matchTypeDetails.gender,
          compDetailData.matchTypeDetails.type,
        )}
        · {compDetailData.tier}
      </span>
    </div>
  );
};

export default CompInfoCard;
