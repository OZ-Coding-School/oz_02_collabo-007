import React, { FC } from 'react';
import FlagIcon from '@/components/core/Icons/FlagIcon/FlagIcon';
import CalendarIcon from '@/components/core/Icons/CalendarIcon/CalendarIcon';
import MapPinIcon from '@/components/core/Icons/MapPinIcon/MapPinIcon';
import MapIcon from '@/components/core/Icons/MapIcon/MapIcon';

interface InfoDetailProps {
  data: {
    id: number;
    name: string;
    status: string;
    startDate: string;
    matchType: {
      field: string;
      type: string;
    };
    tier: string;
    round: string;
    location: string;
    address: string;
    description: string;
    rule: string;
    siteLink: string;
  };
}

const InfoDetail: FC<InfoDetailProps> = ({ data }) => {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="text-headline-3">{data.name}</div>

      <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
        <div className="flex gap-[8px]">
          <CalendarIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{data.startDate}</span>
        </div>
        <div className="flex gap-[8px]">
          <FlagIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">
            {[data.matchType.field, data.matchType.type, data.tier, data.round].join(
              ' \u00B7 ',
            )}
          </span>
        </div>
        <div className="flex gap-[8px]">
          <MapPinIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{data.location}</span>
        </div>
        <div className="flex gap-[8px]">
          <MapIcon className="h-[16px] w-[16px] fill-gray-80" />
          <span className="flex-1">{data.address}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
