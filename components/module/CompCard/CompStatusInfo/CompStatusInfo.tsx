'use client';
import React from 'react';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import FlagIcon from '@/app/_asset/icons/flag.svg';
import type { MyCompetition } from '@/@types/competition';
import { useRouter } from 'next/navigation';

const CompStatusInfo = ({ compData }: { compData: MyCompetition }) => {
  const { totalRounds, matches } = compData;
  let round = `${Math.round(2 ** (totalRounds - matches?.matchRound + 1))}강`;
  if (round == '2강') round = '결승';
  if (round == '4강') round = '준결승';

  const router = useRouter();
  const endPoint =
    compData.status === 'during' ? 'progress' : compData.status === 'ended' && 'result';
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/competition/${compData.id}/${endPoint}`);
  };

  return (
    <div className="flex items-center justify-between text-sub-headline-3 ">
      <div className="flex items-center gap-[4px] text-gray-80">
        <FlagIcon width={16} height={16} fill="#393939" />

        <span>
          {round} {compData.status === 'ended' && '진출'}
        </span>
      </div>
      <div className="flex items-center gap-[4px] text-primary-60" onClick={handleClick}>
        <span>{compData.status === 'during' ? '대회 현황 보기' : '대회 결과 보기'}</span>
        <ChevronRightIcon width={16} height={16} fill="#FC5214" />
      </div>
    </div>
  );
};

export default CompStatusInfo;
