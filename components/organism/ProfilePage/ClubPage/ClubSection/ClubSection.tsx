import React from 'react';
import MapIcon from '@/app/_asset/icons/map.svg';
import PhoneIcon from '@/app/_asset/icons/phone.svg';

const ClubSection = ({ address, phone }: { address: string; phone: string }) => {
  return (
    <div className="flex w-full flex-col gap-[10px] text-body-2 text-gray-80">
      <div className="flex items-center gap-[8px]">
        <MapIcon className="h-[16px] w-[16px] fill-gray-80" />
        {address}
      </div>
      <div className="flex items-center gap-[8px]">
        <PhoneIcon className="h-[16px] w-[16px] fill-gray-80" />
        {phone}
      </div>
    </div>
  );
};

export default ClubSection;
