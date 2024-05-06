import React, { FC } from 'react';
import FlagIcon from '@/app/_asset/icons/flag.svg';
import CalendarIcon from '@/app/_asset/icons/calendar.svg';
import MapPinIcon from '@/app/_asset/icons/map-pin.svg';
import MapIcon from '@/app/_asset/icons/map.svg';

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
    <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
      <div className="flex gap-[8px]">
        <CalendarIcon width={16} height={16} fill="#393939" />
        <span className="flex-1">{data.startDate}</span>
      </div>
      <div className="flex gap-[8px]">
        <FlagIcon width={16} height={16} fill="#393939" />
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
  );
};

export default InfoDetail;
