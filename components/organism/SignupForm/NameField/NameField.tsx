'use client';

import InputModule from '@/components/module/InputModule/InputModule';
import React, { useState } from 'react';

const NameField = ({ existName = '' }: { existName?: string }) => {
  const [userName, setUserName] = useState(existName);

  return (
    <div className="w-full">
      <InputModule
        label="이름"
        placeholder="김형섭"
        type="text"
        name="userName"
        required
        value={userName}
        onChange={(e) => setUserName(() => e.target.value)}
      />
    </div>
  );
};

export default NameField;
