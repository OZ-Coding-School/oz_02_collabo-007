'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import React, { useState } from 'react';

const BirthField = ({ existBirth }: { existBirth?: number }) => {
  const [birth, setBirth] = useState(existBirth !== undefined ? existBirth : '');

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
        required
        value={birth === 0 ? '' : birth}
        onChange={(e) => setBirth(() => Number(e.target.value))}
      />
    </div>
  );
};

export default BirthField;
