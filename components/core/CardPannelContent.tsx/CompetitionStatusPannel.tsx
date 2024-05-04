import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import chevronRightIcon from '@/app/_asset/icons/chevron-right-primary.svg';
import flagIcon from '@/app/_asset/icons/flag.svg';

const CompetitionStatusPannel = ({ compInfo }: any) => {
  return (
    <div className="flex items-center justify-between text-sub-headline-3 ">
      <div className="flex items-center gap-[4px] text-gray-80">
        <Image src={flagIcon} width={16} height={16} alt="chevron" />
        <span>16 강</span>
      </div>
      <Link href="/#">
        <div className="flex items-center gap-[4px] text-primary-60">
          <span>
            {compInfo.status === '진행 중' ? '대회 현황 보기' : '대회 결과 보기'}
          </span>
          <Image src={chevronRightIcon} width={16} height={16} alt="chevron" />
        </div>
      </Link>
    </div>
  );
};

export default CompetitionStatusPannel;
