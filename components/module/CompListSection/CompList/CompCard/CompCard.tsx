import type { Competition, MyCompData } from '@/@types/competition';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CompStatusButton from '@/components/module/CompListSection/CompList/CompCard/CompStatusButton/CompStatusButton';
import { formatDate } from '@/lib/utils/formatDate';
import { GENDER, MATCH_TYPE } from '@/constants/competition';
import { truncateText } from '@/lib/utils/truncateText';
import Flag from '@/app/_asset/icons/flag.svg';
import MyCompMatchCard from '@/components/module/MyCompMatchCard/MyCompMatchCard';

interface CompCardProps {
  comp?: Competition | MyCompData | null;
  title?: string;
  competitionType: string;
}
const CompCard = ({ comp, title, competitionType }: CompCardProps) => {
  return (
    <>
      {comp ? (
        <Link
          href={{ pathname: `/competition/${comp.id}` }}
          className="flex min-w-full flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md"
        >
          <div className="flex gap-[16px]">
            <div className="relative flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center rounded-[8px] bg-gray-20">
              {comp.imageUrl ? (
                <Image
                  src={comp.imageUrl}
                  fill
                  sizes="88px"
                  alt="comp"
                  style={{ borderRadius: '8px' }}
                  className="rounded-[8px] object-cover"
                  priority
                />
              ) : (
                <Flag width={24} height={24} fill="#787878" />
              )}
            </div>
            <div className="relative flex w-full flex-1 flex-col gap-[4px] overflow-hidden text-headline-6 text-gray-100">
              <span className="w-full truncate">{comp.name}</span>
              <div className="text-gary-80 flex flex-col gap-[4px] text-body-3">
                <span>{formatDate(comp.startDate)}</span>
                <span>
                  {`${comp.matchTypeDetails.type !== 'team' ? GENDER[comp.matchTypeDetails.gender] : ''} ${MATCH_TYPE[comp.matchTypeDetails.type]}`}
                  · {comp.tier}
                </span>
                <span>{comp.location}</span>
              </div>
            </div>
          </div>
          {competitionType === 'competition' && <CompStatusButton compData={comp} />}
          {competitionType === 'mycompetition' && <MyCompMatchCard />}
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
