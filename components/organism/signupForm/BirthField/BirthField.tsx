'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import React, { useState } from 'react';

const BirthField = ({ existBirth = undefined }: { existBirth?: number | undefined }) => {
  const [birth, setBirth] = useState(existBirth);

  return (
    <div className="w-full">
      <InputModule
        label="출생년도"
        placeholder="출생년도 입력"
        type="number"
        min="1900"
        max="2099"
        step="1"
        name="birth"
        value={birth === 0 ? undefined : birth}
        onChange={(e) => setBirth(() => Number(e.target.value))}
      />
    </div>
  );
};

export default BirthField;
