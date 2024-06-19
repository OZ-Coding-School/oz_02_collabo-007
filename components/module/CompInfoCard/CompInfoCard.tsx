import React from 'react';
import FlagIcon from '@/app/_asset/icons/flag.svg';
import CalendarIcon from '@/app/_asset/icons/calendar.svg';
import MapPinIcon from '@/app/_asset/icons/map-pin.svg';
import MapIcon from '@/app/_asset/icons/map.svg';
import type { CompetitionDetails } from '@/@types/competition';
import CopyButton from '../../core/CopyButton/CopyButton';
import { formatDate } from '@/lib/utils/formatDate';
import type { AppliedCompetition } from '@/@types/apply';
import { printMatchTypeInfo } from '@/lib/utils/printMatchTypeInfo';

const CompInfoCard = ({ data }: { data: CompetitionDetails | AppliedCompetition }) => {
  const { startDate, matchTypeDetails, tier, totalRounds, location, address } = data;

  return (
    <div className="flex flex-col gap-[10px] text-body-2 text-gray-80 ">
      <div className="flex items-center gap-[8px]">
        <CalendarIcon width={16} height={16} fill="#393939" />
        <span className="flex-1">{formatDate(startDate)}</span>
      </div>
      <div className="flex items-center gap-[8px]">
        <FlagIcon width={16} height={16} fill="#393939" />
        <span className="flex-1">
          {matchTypeDetails && tier && totalRounds
            ? [
                `${printMatchTypeInfo(matchTypeDetails.gender, matchTypeDetails.type)}`,
                tier,
                `${Math.pow(2, totalRounds)}강`,
              ].join(' \u00B7 ')
            : 'No match details available'}
        </span>
      </div>
      <div className="flex items-center gap-[8px]">
        <MapPinIcon className="h-[16px] w-[16px] fill-gray-80" />
        <span className="flex-1">{location}</span>
      </div>
      <div className="flex items-center justify-start gap-[8px]">
        <MapIcon className="h-[16px] w-[16px]  fill-gray-80" />
        <span className="flex ">{address}</span>
        <CopyButton text={address} />
      </div>
    </div>
  );
};

export default CompInfoCard;
