'use client';
import { UserData } from '@/@types/user';
import Button from '@/components/core/Button/Button';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { changePhoneNumber } from '@/lib/utils/changePhoneNumber';
import React from 'react';
import { useFormStatus } from 'react-dom';

const ApplyFormContent = ({
  userData,
  competitionId,
}: {
  userData: UserData;
  competitionId: number;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="no-scrollbar flex flex-1 flex-col gap-[16px] overflow-scroll bg-white px-[20px] py-[24px] ">
        <div className="text-headline-6">참가자 정보</div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <Label label="이름" name="userName" />
            <Input variant="display" value={userData.username} name="userName" readOnly />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label label="휴대폰 번호" name="phone" />
            <Input
              variant="display"
              value={changePhoneNumber(userData.phone)}
              name="phone"
              readOnly
            />
          </div>

          {/* <PartnerField /> */}

          <div className="flex flex-col gap-[8px]">
            <Label label="신청 코드" name="code" />
            <Input type="number" name="code" placeholder="신청코드" />
          </div>
          <input type="hidden" name="id" value={competitionId} />
        </div>
      </div>

      <div className="w-full bg-white p-[20px]">
        <Button label="대회 신청하기" type="submit" disabled={pending} />
      </div>
    </>
  );
};

export default ApplyFormContent;
