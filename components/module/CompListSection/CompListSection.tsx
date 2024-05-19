import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import CompList from './CompList/CompList';

const CompListSection = ({
  title,
  compStatus,
}: {
  title?: string;
  compStatus?: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      {title ? (
        <div className={'flex items-center justify-between'}>
          <span className="text-headline-5 text-gray-100">{title}</span>
          <Link href="/#" className="text-sub-headline-2 text-gray-60">
            전체 목록 보기
          </Link>
        </div>
      ) : null}
      <CompList title={title} compStatus={compStatus} />
    </div>
  );
};

export default CompListSection;
