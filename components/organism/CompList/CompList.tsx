import Link from 'next/link';
import React from 'react';
import { data } from '@/app/data.js';
import CompCard from '../CompCard/CompCard';

const CompList = ({ title, compStatus, flexDirection = '' }: any) => {
  return (
    <div className="mb-[32px]">
      <div className={' mb-[12px] flex items-center justify-between'}>
        <span className="text-headline-5 text-gray-100">{title}</span>
        <Link href="/#" className="sub-headline-2 text-gray-60">
          전체 목록 보기
        </Link>
      </div>
      <div
        className={`ml-[-20px] flex w-screen overflow-y-scroll pl-[20px] ${flexDirection}`}
      >
        {title === '대회 정보' ? (
          <>
            {data.compList.comp.map((comp) => (
              <CompCard comp={comp} />
            ))}
          </>
        ) : (
          <>
            {data.myComp.myCompetition.map((comp) =>
              comp.status === compStatus ? <CompCard comp={comp} /> : null,
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CompList;
