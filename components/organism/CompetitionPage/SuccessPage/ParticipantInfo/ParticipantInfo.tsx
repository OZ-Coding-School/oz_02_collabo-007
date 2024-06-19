import PhoneIcon from '@/app/_asset/icons/phone.svg';
import UserIcon from '@/app/_asset/icons/user.svg';
import React from 'react';
import type { Applicant } from '@/@types/apply';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';

const ParticipantInfo = ({ applicants }: { applicants: Applicant[] }) => {
  return (
    <>
      {applicants.map(({ userName, userPhone }, index) => (
        <div key={index} className="flex flex-col gap-[8px]">
          <div className="text-headline-6">참가자 정보</div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <div className="text-sub-headline-2">참가자 {index + 1}</div>
              <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
                <div className="flex items-center justify-start gap-[8px]">
                  <UserIcon width={16} height={16} fill="#393939" />
                  {userName}
                </div>
                <div className="flex items-center justify-start gap-[8px]">
                  <PhoneIcon width={16} height={16} fill="#393939" />
                  {changePhoneNumber(userPhone)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ParticipantInfo;
