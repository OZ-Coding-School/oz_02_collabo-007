import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import React from 'react';
import { ClubField, NameField } from '../../SignupForm';

const RegisterForm = () => {
  return (
    <form className="flex flex-1 flex-col">
      <div className="no-scrollbar flex flex-1 flex-col gap-[16px] overflow-scroll bg-white px-[20px] py-[24px] ">
        <div className="text-headline-6">참가자 정보</div>

        <div className="flex flex-col gap-[24px]">
          <InputModule
            label="이름"
            name="userName"
            value={'김형섭'}
            variant="display"
            readOnly
          />

          <InputModule
            label="휴대폰 번호"
            name="phone"
            value={'010-1234-1234'}
            variant="display"
            readOnly
          />

          <InputModule
            label="신청 코드"
            name="code"
            type="number"
            placeholder="신청코드"
          />
        </div>
      </div>

      <div className="w-full bg-white p-[20px]">
        <Button label="대회 신청하기" />
      </div>
    </form>
  );
};

export default RegisterForm;
