import React from 'react';
import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import Image from 'next/image';
import chevronIcon from '@/app/_asset/icons/chevron-left.svg';
import visibleOffIcon from '@/app/_asset/icons/visible-off.svg';
import searchIcon from '@/app/_asset/icons/search.svg';
import userIcon from '@/app/_asset/icons/user.svg';
import addIcon from '@/app/_asset/icons/add.svg';

const page = () => {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center items-center gap-[16px]">
        <div className="p-[16px]">
          <Image src={chevronIcon} alt="back" width={24} height={24} />
        </div>
        <div className="flex-1 text-center text-[16px] font-[700]  leading-[24px] font-feature-settings-normal">
          회원 가입
        </div>
        <div className="w-[56px] h-[56px] p-[16px]"></div>
      </div>

      <form action="" className="h-calc flex flex-col">
        <div className="w-full px-[20px] py-[24px] flex flex-1 flex-col items-center gap-[24px] overflow-y-scroll no-scrollbar">
          {/* profile image */}
          <div className="w-[88px] h-[88px] p-[24px] rounded-full bg-gray-20 border border-gray-30 relative">
            <Image src={userIcon} alt="user" width={40} height={40} />
            <div className="absolute bottom-0 right-0 bg-primary-60 p-[4px] rounded-full border border-white">
              <Image src={addIcon} alt="add" width={16} height={16} />
            </div>
          </div>

          {/* phone number */}
          <div className="w-full flex items-end self-stretch gap-[8px]">
            <div className="flex-1">
              <InputModule
                label="휴대폰 번호"
                placeholder="01012345678"
                type="text"
                name="phoneNumber"
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

          {/* password */}
          <div className="w-full relative">
            <InputModule
              label="비밀번호"
              placeholder="비밀번호 입력"
              type="password"
              inputSize="mdWith"
              name="password"
            />
            <Image
              src={visibleOffIcon}
              alt="visible"
              width={20}
              height={20}
              className="absolute top-[38px] right-[12px]"
            />
          </div>

          {/* name */}
          <div className="w-full">
            <InputModule label="이름" placeholder="김형섭" type="text" name="userName" />
          </div>

          {/* gender */}
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

          {/* birth */}
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

          {/* club */}
          <div className="w-full relative">
            <InputModule
              label="소속 클럽 검색"
              placeholder="소속 클럽 검색"
              type="text"
              name="club"
              style={{ paddingLeft: '44px' }}
            />

            <Image
              src={searchIcon}
              alt="search"
              width={20}
              height={20}
              className="absolute top-[38px] left-[12px]"
            />
          </div>
        </div>

        {/* submit btn */}
        <div className="w-full h-[84px] p-[20px]">
          <Button label="회원 가입" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default page;
