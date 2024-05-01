'use client';

import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import React, { useState } from 'react';

const PhoneField = () => {
  const [phonData, setPhonData] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');

    setPhonData(() => numericValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  };

  return (
    <div className="w-full flex items-end self-stretch gap-[8px]">
      <div className="flex-1">
        <InputModule
          label="휴대폰 번호"
          placeholder="01012345678"
          type="text"
          name="phoneNumber"
          value={phonData}
          onChange={handleInput}
          required
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
