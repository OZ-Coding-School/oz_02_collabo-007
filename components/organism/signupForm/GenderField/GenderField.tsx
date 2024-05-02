import React from 'react';

const GenderField = () => {
  return (
    <div className="w-full flex flex-col items-start self-stretch gap-[8px]">
      <div className="text-sub-headline-2">성별</div>

      <div className="flex items-center gap-[24px] self-stretch">
        <label className="p-[4px] flex items-center gap-[8px]">
          <div className="w-[24px] h-[24px] p-[2px] flex justify-center items-center">
            <input type="radio" name="gender" value="male" defaultChecked />
          </div>
          <span className="text-body-1">남성</span>
        </label>

        <label className="p-[4px] flex items-center gap-[8px]">
          <div className="w-[24px] h-[24px] p-[2px] flex justify-center items-center">
            <input type="radio" name="gender" value="female" />
          </div>
          <span className="text-body-1">여성</span>
        </label>
      </div>
    </div>
  );
};

export default GenderField;
