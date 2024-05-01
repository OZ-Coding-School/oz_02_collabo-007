import React from 'react';

const GenderField = () => {
  return (
    <div className="w-full flex flex-col items-start self-stretch gap-[8px]">
      <div className="text-[14px] font-[500] leading-[20px]">성별</div>

      <div className="flex items-center gap-[24px] self-stretch">
        <label className="p-[4px] flex items-center gap-[8px]">
          <div className="w-[24px] h-[24px] p-[2px] flex justify-center items-center">
            <input type="radio" name="gender" value="male" defaultChecked />
          </div>
          <span className="text-[16px] font-[400] leading-[24px]">남성</span>
        </label>

        <label className="p-[4px] flex items-center gap-[8px]">
          <div className="w-[24px] h-[24px] p-[2px] flex justify-center items-center">
            <input type="radio" name="gender" value="female" />
          </div>
          <span className="text-[16px] font-[400] leading-[24px]">여성</span>
        </label>
      </div>
    </div>
  );
};

export default GenderField;
