'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import React from 'react';

const NameField = ({ existName = '' }: { existName?: string }) => {
  return (
    <div className="w-full">
      <InputModule
        label="이름"
        placeholder="김형섭"
        type="text"
        name="userName"
        value={existName}
        onChange={(e) => e.target.value}
      />
    </div>
  );
};

export default NameField;
