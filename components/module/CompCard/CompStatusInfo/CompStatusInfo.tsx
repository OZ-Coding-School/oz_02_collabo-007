import Link from 'next/link';
import React from 'react';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import FlagIcon from '@/app/_asset/icons/flag.svg';
import { MyCompData } from '@/@types/competition';

const CompStatusInfo = ({ compData }: { compData: MyCompData }) => {
  const { totalRounds, matches } = compData;
  let round = `${Math.round(2 ** (totalRounds - matches.matchRound + 1))}강`;
  if (round == '2강') round = '결승';
  if (round == '4강') round = '준경승';

  return (
    <div className="flex items-center justify-between text-sub-headline-3 ">
      <div className="flex items-center gap-[4px] text-gray-80">
        <FlagIcon width={16} height={16} fill="#393939" />

        <span>
          {round} {compData.status === 'ended' && '진출'}
        </span>
      </div>
      {/* TODO: 경로 추가하기 */}
      <Link href="/#">
        <div className="flex items-center gap-[4px] text-primary-60">
          <span>
            {compData.status === 'during' ? '대회 현황 보기' : '대회 결과 보기'}
          </span>
          <ChevronRightIcon width={16} height={16} fill="#FC5214" />
        </div>
      </Link>
    </div>
  );
};

export default CompStatusInfo;
