import React, { FC } from 'react';
import FlagIcon from '@/components/core/Icons/FlagIcon/FlagIcon';
import CalendarIcon from '@/components/core/Icons/CalendarIcon/CalendarIcon';
import MapPinIcon from '@/components/core/Icons/MapPinIcon/MapPinIcon';
import MapIcon from '@/components/core/Icons/MapIcon/MapIcon';

interface InfoDetailProps {
  name: string;
  startDate: string;
  matchType: {
    field: string;
    type: string;
  };
  tier: string;
  round: string;
  location: string;
  address: string;
}

const InfoDetail: FC<InfoDetailProps> = ({
  name,
  startDate,
  matchType,
  tier,
  round,
  location,
  address,
}) => {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="text-headline-3">{name}</div>

      <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
        <div className="flex gap-[8px]">
          <CalendarIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{startDate}</span>
        </div>
        <div className="flex gap-[8px]">
          <FlagIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">
            {[matchType.field, matchType.type, tier, round].join(' \u00B7 ')}
          </span>
        </div>
        <div className="flex gap-[8px]">
          <MapPinIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{location}</span>
        </div>
        <div className="flex gap-[8px]">
          <MapIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{address}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
