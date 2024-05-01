import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import React from 'react';

const PhoneField = () => {
  return (
    <div className="w-full flex items-end self-stretch gap-[8px]">
      <div className="flex-1">
        <InputModule
          label="휴대폰 번호"
          placeholder="01012345678"
          type="text"
          name="phoneNumber"
        />
      </div>
      <div>
        <Button
          colors="gray"
          label="중복 확인"
          variant="secondary"
          type="button"
          size="md"
        />
      </div>
    </div>
  );
};

export default PhoneField;
