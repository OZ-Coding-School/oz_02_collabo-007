import type { Competition } from '@/@types/competition';
import CompCardMatchDetail from '@/components/module/CompListSection/CompList/CompCard/CompCardMatchDetail/CompCardMatchDetail';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GENDER = { female: '여자', male: '남자', mix: '혼성', team: '' };
const MATCH_TYPE = { single: '단식', double: '복식', team: '팀' };

interface CompCardProps {
  comp: Competition;
  title?: string;
  key: number;
}

const CompCard = ({ comp, title }: CompCardProps) => {
  return (
    <>
      {comp ? (
        <Link
          href={{ pathname: `/competition/${comp.id}` }}
          className="flex min-w-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md"
        >
          <div className="flex gap-[16px]">
            <div className="relative h-[88px] w-[88px] ">
              <Image
                src={comp.imageUrl}
                fill
                sizes="88px"
                alt="comp"
                style={{ borderRadius: '8px' }}
              />
            </div>
            <div className="flex w-[199px] flex-1 flex-col gap-[4px] text-headline-6 text-gray-100">
              <span>{comp.name}</span>
              <div className="text-gary-80 flex flex-col gap-[4px] text-body-3">
                <span>{comp.startDate.replace('T', ' ')}</span>
                <span>
                  {`${GENDER[comp.matchTypeDetails.gender]} ${MATCH_TYPE[comp.matchTypeDetails.type]}`}
                  · {comp.tier}
                </span>
                <span>{comp.location}</span>
              </div>
            </div>
          </div>
          {comp.nextMatch && <CompCardMatchDetail compInfo={comp} />}
        </Link>
      ) : (
        <div className="flex min-w-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md">
          {title === '참가 예정 대회' && '참가 예정 대회가 없습니다.'}
          {title === '최근 참가 대회' && '최근 참가한 대회가 없습니다.'}
        </div>
      )}
    </>
  );
};

export default CompCard;
