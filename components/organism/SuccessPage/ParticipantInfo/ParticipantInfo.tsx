import PhoneIcon from '@/app/_asset/icons/phone.svg';
import UserIcon from '@/app/_asset/icons/user.svg';
import React from 'react';

const ParticipantInfo = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-headline-6">참가자 정보</div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-sub-headline-2">참가자 1</div>
          <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
            <div className="flex items-center justify-start gap-[8px]">
              <UserIcon width={16} height={16} fill="#393939" />
              김형섭
            </div>
            <div className="flex items-center justify-start gap-[8px]">
              <PhoneIcon width={16} height={16} fill="#393939" />
              010-1234-1234
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="text-sub-headline-2">참가자 1</div>
          <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
            <div className="flex items-center justify-start gap-[8px]">
              <UserIcon width={16} height={16} fill="#393939" />
              김형섭
            </div>
            <div className="flex items-center justify-start gap-[8px]">
              <PhoneIcon width={16} height={16} fill="#393939" />
              010-1234-1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantInfo;
