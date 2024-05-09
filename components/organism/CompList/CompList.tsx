import Link from 'next/link';
import React from 'react';
import { data } from '@/app/data.js';
import CompCard from '../CompCard/CompCard';

const CompList = ({ title, compStatus, flexDirection }: any) => {
  return (
    <div className="flex w-full flex-col gap-[2px] ">
      {title ? (
        <div className={'flex items-center justify-between'}>
          <span className="text-headline-5 text-gray-100">{title}</span>
          <Link href="/#" className="sub-headline-2 text-gray-60">
            전체 목록 보기
          </Link>
        </div>
      ) : null}
      <div className={`flex ${flexDirection} no-scrollbar pb-[10px]`}>
        {title === '대회 정보' && (
          <>
            {data.compList.comp.map((comp, index) => (
              <CompCard comp={comp} key={index} />
            ))}
          </>
        )}{' '}
        {!title && compStatus === '전체' && (
          <>
            {data.myComp.myCompetition.map((comp, index) => (
              <CompCard comp={comp} key={index} />
            ))}
          </>
        )}
        {
          <>
            {data.myComp.myCompetition.map((comp, index) =>
              comp.status === compStatus ? <CompCard comp={comp} key={index} /> : null,
            )}
          </>
        }
      </div>
    </div>
  );
};

export default CompList;
