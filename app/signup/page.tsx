import React from 'react';
import Button from '@/components/core/Button/Button';
import Image from 'next/image';
import chevronIcon from '@/app/_asset/icons/chevron-left.svg';
import {
  BirthField,
  ClubField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/signupForm';

const page = () => {
  return (
    <div className="w-full h-full relative">
      <header className="flex justify-center items-center gap-[16px]">
        <div className="p-[16px]">
          <Image src={chevronIcon} alt="back" width={24} height={24} />
        </div>
        <div className="flex-1 text-center text-headline-6 font-feature-settings-normal">
          회원 가입
        </div>
        <div className="w-[56px] h-[56px] p-[16px]"></div>
      </header>

      <form action="" className="flex flex-col no-scrollbar">
        <div className="w-full px-[20px] py-[24px] flex flex-1 flex-col items-center gap-[24px]">
          <ProfileField />
          <PhoneField />
          <PasswordField />
          <NameField />
          <GenderField />
          <BirthField />
          <ClubField />
        </div>

        <div className="w-full h-[84px] p-[20px]">
          <Button label="회원 가입" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default page;
