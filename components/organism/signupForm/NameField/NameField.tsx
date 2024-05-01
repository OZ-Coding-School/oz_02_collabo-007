import InputModule from '@/components/module/InputModule/InputModule';
import React from 'react';

const NameField = () => {
  return (
    <div className="w-full">
      <InputModule label="이름" placeholder="김형섭" type="text" name="userName" />
    </div>
  );
};

export default NameField;
