import React, { FC } from 'react';
import Link from 'next/link';
import InfoDetail from './InfoDetail/InfoDetail';
import ChevronRightIcon from '@/components/core/Icons/ChevronRightIcon/ChevronRightIcon';

interface CompetitionInfoProps {
  data: {
    id: number;
    name: string;
    status: string;
    startDate: string;
    matchType: {
      field: string;
      type: string;
    };
    tier: string;
    round: string;
    location: string;
    address: string;
    description: string;
    rule: string;
    siteLink: string;
  };
}

const CompetitionInfo: FC<CompetitionInfoProps> = ({ data }) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-[24px]">
      <InfoDetail data={data} />

      <div className="flex w-full flex-col gap-[8px]">
        <div className="text-headline-6">대회 요강</div>

        <div className="flex w-full flex-col gap-[4px] text-body-2 text-gray-80">
          <div>{data.description}</div>
          <div>{data.rule}</div>
        </div>
      </div>

      <div className="flex w-full items-center gap-[6px]">
        <div className="text-headline-6">대회 상세 요강 링크</div>
        <Link href={data.siteLink}>
          <ChevronRightIcon className="h-[16px] w-[16px] fill-gray-80" />
        </Link>
      </div>

      <div className="flex w-full items-center gap-[6px]">
        <div className="text-headline-6">문의하기</div>
        <Link href={'#'}>
          <ChevronRightIcon className="h-[16px] w-[16px] fill-gray-80" />
        </Link>
      </div>
    </div>
  );
};

export default CompetitionInfo;
