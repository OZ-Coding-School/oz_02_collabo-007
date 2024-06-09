import { CompDetailInfo } from '@/@types/competition';
import { GENDER } from '@/constants/competition';
import { CompType } from '@/constants/competitionDetail';
import React from 'react';

const CompInfoCard = async ({ compDetailData }: { compDetailData: CompDetailInfo }) => {
  return (
    <div className="flex flex-col gap-[8px] self-stretch">
      <span className="text-headline-2">{compDetailData.name}</span>
      <span className="text-sub-headline-2 text-gray-80">
        {GENDER[compDetailData.matchTypeDetails.gender]}{' '}
        {CompType[compDetailData.matchTypeDetails.type]} · {compDetailData.tier}
      </span>
    </div>
  );
};

export default CompInfoCard;
