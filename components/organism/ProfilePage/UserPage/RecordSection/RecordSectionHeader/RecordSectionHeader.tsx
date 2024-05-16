import React, { FC } from 'react';

interface RecordSectionHeaderProps {
  compName: string;
  date: string;
  category: string;
  tier: string;
}

const RecordSectionHeader: FC<RecordSectionHeaderProps> = ({
  compName,
  date,
  category,
  tier,
}) => {
  return (
    <div className="flex flex-col items-start gap-[6px] self-stretch">
      <div className="text-headline-5">{compName}</div>
      <div className="flex items-center gap-[4px] text-body-3 text-gray-60">
        <span>{date}</span>
        <span>{`\u00B7`}</span>
        <span>{category}</span>
        <span>{`\u00B7`}</span>
        <span>{tier}</span>
      </div>
    </div>
  );
};

export default RecordSectionHeader;
