import Link from 'next/link';
import React from 'react';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import FlagIcon from '@/app/_asset/icons/flag.svg';

const CompStatusInfo = ({ compInfo }: any) => {
  return (
    <div className="flex items-center justify-between text-sub-headline-3 ">
      <div className="flex items-center gap-[4px] text-gray-80">
        <FlagIcon width={16} height={16} fill="#393939" />

        <span>16 강</span>
      </div>
      <Link href="/#">
        <div className="flex items-center gap-[4px] text-primary-60">
          <span>
            {compInfo.status === '진행 중' ? '대회 현황 보기' : '대회 결과 보기'}
          </span>
          <ChevronRightIcon width={16} height={16} fill="#FC5214" />
        </div>
      </Link>
    </div>
  );
};

export default CompStatusInfo;
