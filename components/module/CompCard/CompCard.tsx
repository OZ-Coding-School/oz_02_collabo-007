'use client';
import type { Competition, MyCompetition } from '@/@types/competition';
import Image from 'next/image';
import React from 'react';
import { formatDate } from '@/lib/utils/formatDate';
import { GENDER, MATCH_TYPE } from '@/constants/competition';
import Flag from '@/app/_asset/icons/flag.svg';
import CompCardMatchDetail from './CompCardMatchDetail/CompCardMatchDetail';
import { useRouter } from 'next/navigation';
import CompStatusButton from './CompStatusButton/CompStatusButton';

const CompCard = ({
  comp,
  status,
}: {
  comp: Competition | MyCompetition;
  status: 'all' | 'my' | 'comp';
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="flex min-w-full cursor-pointer flex-col gap-[16px] rounded-[8px] bg-white p-[16px] shadow-md"
        onClick={() => router.push(`/competition/${comp.id}`)}
      >
        <div className="flex gap-[16px]">
          <div className="relative flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-gray-20">
            {comp.imageUrl ? (
              <Image
                src={comp.imageUrl}
                sizes="88px"
                alt="comp"
                fill
                className="object-cover"
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
        {status === 'my' && <CompCardMatchDetail compData={comp as MyCompetition} />}

        {status === 'comp' && <CompStatusButton compData={comp} />}
      </div>
    </>
  );
};

export default CompCard;
