import React from 'react';
import FlagIcon from '@/app/_asset/icons/flag.svg';
import CalendarIcon from '@/app/_asset/icons/calendar.svg';
import MapPinIcon from '@/app/_asset/icons/map-pin.svg';
import MapIcon from '@/app/_asset/icons/map.svg';
import type { CompDetailInfo } from '@/@types/competition';
import CopyButton from '../../core/CopyButton/CopyButton';

const CompInfoCard = ({ data }: { data: CompDetailInfo }) => {
  const dataTime = data.startDate;
  const [date, time] = dataTime.split('T');

  const GENDER: { [key: string]: string } = {
    female: '여자',
    male: '남자',
  };

  const CompType: { [key: string]: string } = {
    single: '단식',
    double: '복식',
  };

  return (
    <div className="flex flex-col gap-[10px] text-body-2 text-gray-80 ">
      <div className="flex items-center gap-[8px]">
        <CalendarIcon width={16} height={16} fill="#393939" />
        <span className="flex-1">
          {date} {time}
        </span>
      </div>
      <div className="flex items-center gap-[8px]">
        <FlagIcon width={16} height={16} fill="#393939" />
        <span className="flex-1">
          {data.matchTypeDetails && data.tier && data.totalRounds
            ? [
                `${GENDER[data.matchTypeDetails.gender]} ${CompType[data.matchTypeDetails.type]}`,
                data.tier,
                data.totalRounds,
              ].join(' \u00B7 ')
            : 'No match details available'}
        </span>
      </div>
      <div className="flex items-center gap-[8px]">
        <MapPinIcon className="h-[16px] w-[16px] fill-gray-80" />
        <span className="flex-1">{data.location}</span>
      </div>
      <div className="flex items-center justify-start gap-[8px]">
        <MapIcon className="h-[16px] w-[16px]  fill-gray-80" />
        <span className="flex ">{data.address}</span>
        <CopyButton text={data.address} />
      </div>
    </div>
  );
};

export default CompInfoCard;
