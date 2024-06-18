import { MatchTypeDetails } from '@/@types/competition';
import { formatDate } from '@/lib/utils/formatDate';
import { printMatchTypeInfo } from '@/lib/utils/printMatchTypeInfo';
import React, { FC } from 'react';

interface RecordSectionHeaderProps {
  compName: string;
  date: string;
  category: MatchTypeDetails;
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
          {[formatDate(date), `${printMatchTypeInfo(gender, type)}`, tier].join(
            ` \u00B7 `,
          )}
        </span>
      </div>
    </div>
  );
};

export default RecordSectionHeader;
