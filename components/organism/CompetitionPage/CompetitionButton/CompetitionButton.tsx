import Button from '@/components/core/Button/Button';
import React from 'react';

const CompetitionButton = ({ status }: { status: string }) => {
  return (
    <div className="flex w-full flex-col items-start pt-[20px]">
      <Button label="대회 현황 보기" />
    </div>
  );
};

export default CompetitionButton;
