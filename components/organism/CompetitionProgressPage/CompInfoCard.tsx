import type { CompetitionDetails } from '@/@types/competition';
import { GENDER, MATCH_TYPE } from '@/constants/competition';
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
        {GENDER[compDetailData.matchTypeDetails.gender]}{' '}
        {MATCH_TYPE[compDetailData.matchTypeDetails.type]} · {compDetailData.tier}
      </span>
    </div>
  );
};

export default CompInfoCard;
