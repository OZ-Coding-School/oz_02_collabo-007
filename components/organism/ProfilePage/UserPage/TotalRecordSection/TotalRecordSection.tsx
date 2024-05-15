import React, { FC } from 'react';

interface TotalRecordSectionProps {
  win: number;
  lose: number;
}

const TotalRecordSection: FC<TotalRecordSectionProps> = ({ win, lose }) => {
  return (
    <div className="flex flex-col items-start gap-[16px] self-stretch p-[20px]">
      <div className="text-body-1">전체 전적</div>
      <div className="flex items-center gap-[16px] self-stretch text-[20px] font-[400] leading-[28px]">
        <div className="flex flex-1 items-center gap-[8px]">
          <span className="text-headline-2">{win + lose}</span>전
        </div>
        <div className="flex flex-1 items-center gap-[8px]">
          <span className="text-headline-2 text-primary-50">{win}</span>승
        </div>
        <div className="flex flex-1 items-center gap-[8px]">
          <span className="text-headline-2">{lose}</span>패
        </div>
      </div>
    </div>
  );
};

export default TotalRecordSection;
