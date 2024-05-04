'use client';

import React, { useState } from 'react';

const GenderField = ({ exitGender = 'male' }: { exitGender?: string }) => {
  const [checkedGender, setCheckedGender] = useState(exitGender);

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedGender(() => e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-start gap-[8px] self-stretch">
      <div className="text-sub-headline-2">성별</div>

      <div className="flex items-center gap-[24px] self-stretch">
        <label className="flex items-center gap-[8px] p-[4px]">
          <div className="flex h-[24px] w-[24px] items-center justify-center p-[2px]">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={checkedGender === 'male'}
              onChange={handleRadio}
            />
          </div>
          <span className="text-body-1">남성</span>
        </label>

        <label className="flex items-center gap-[8px] p-[4px]">
          <div className="flex h-[24px] w-[24px] items-center justify-center p-[2px]">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={checkedGender === 'female'}
              onChange={handleRadio}
            />
          </div>
          <span className="text-body-1">여성</span>
        </label>
      </div>
    </div>
  );
};

export default GenderField;
