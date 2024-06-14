import { MATCH_TYPE } from '@/constants/competition';
import { GENDER } from '@/constants/competitionDetail';
import { formatDate } from '@/lib/utils/formatDate';
import React, { FC } from 'react';

interface RecordSectionHeaderProps {
  compName: string;
  date: string;
  category: { gender: string; type: string };
  tier: string;
}

const RecordSectionHeader: FC<RecordSectionHeaderProps> = ({
  compName,
  date,
  category: { gender, type },
  tier,
}) => {
  return (
    <div className="flex flex-col items-start gap-[6px] self-stretch">
      <div className="text-headline-5">{compName}</div>
      <div className="flex items-center gap-[4px] text-body-3 text-gray-60">
        <span>
          {[formatDate(date), `${GENDER[gender]} ${MATCH_TYPE[type]}`, tier].join(
            ` \u00B7 `,
          )}
        </span>
      </div>
    </div>
  );
};

export default RecordSectionHeader;
