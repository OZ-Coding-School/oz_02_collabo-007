import React from 'react';
import AwardIcon from '@/app/_asset/icons/award.svg';
import FlagIcon from '@/app/_asset/icons/flag.svg';

const TeamSection = ({
  rank,
  win,
  lose,
}: {
  rank: number;
  win: number;
  lose: number;
}) => {
  return (
    <div className="flex w-full flex-col gap-[10px] text-body-2">
      <div className="flex items-center gap-[8px]">
        <AwardIcon className="h-[16px] w-[16px] text-gray-80" />
        <div>현재 순위:</div>
        <div className="text-headline-7 text-primary-60">{rank}위</div>
      </div>
      <div className="flex items-center gap-[8px] text-gray-80">
        <FlagIcon className="h-[16px] w-[16px]" />
        <div>전체 전적:</div>
        <div className="text-sub-headline-2">
          {win}승 {lose}패
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
