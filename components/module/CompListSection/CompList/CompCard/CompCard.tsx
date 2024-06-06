import type { Competition } from '@/@types/competition';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CompStatusButton from '@/components/module/CompListSection/CompList/CompCard/CompStatusButton/CompStatusButton';
import { formatDate } from '@/lib/utils/formatDate';
import { GENDER, MATCH_TYPE } from '@/constants/competition/competition';

interface CompCardProps {
  comp?: Competition | null;
  title?: string;
  currentLocation?: string | null;
}

const CompCard = ({ comp, title, currentLocation }: CompCardProps) => {
  return (
    <>
      {comp ? (
        <Link
          href={{ pathname: `/competition/${comp.id}` }}
          className="flex min-w-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md"
        >
          <div className="flex gap-[16px]">
            <div className="relative h-[88px] w-[88px] ">
              {comp.imageUrl ? (
                <Image
                  src={comp.imageUrl}
                  fill
                  sizes="88px"
                  alt="comp"
                  style={{ borderRadius: '8px' }}
                />
              ) : (
                <div className="h-[88px] w-[88px] rounded-[8px] bg-gray-20"></div>
              )}
            </div>
            <div className="flex w-[199px] flex-1 flex-col gap-[4px] text-headline-6 text-gray-100">
              <span>{comp.name}</span>
              <div className="text-gary-80 flex flex-col gap-[4px] text-body-3">
                <span>{formatDate(comp.startDate)}</span>
                <span>
                  {`${GENDER[`${comp.matchTypeDetails.gender}`]} ${MATCH_TYPE[comp.matchTypeDetails.type]}`}
                  · {comp.tier}
                </span>
                <span>{comp.location}</span>
              </div>
            </div>
          </div>
          <CompStatusButton compData={comp} currentLocation={currentLocation} />
        </Link>
      ) : (
        <div className="flex min-w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white p-[16px] text-gray-60 shadow-md">
          {title === '참가 예정 대회' && '참가 예정 대회가 없습니다.'}
          {title === '최근 참가 대회' && '최근 참가한 대회가 없습니다.'}
        </div>
      )}
    </>
  );
};

export default CompCard;
