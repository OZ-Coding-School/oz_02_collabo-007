import InputModule from '@/components/module/InputModule/InputModule';
import React from 'react';

const BirthField = () => {
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
      />
    </div>
  );
};

export default BirthField;
