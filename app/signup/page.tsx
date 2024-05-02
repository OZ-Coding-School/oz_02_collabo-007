import React from 'react';
import Button from '@/components/core/Button/Button';
import Image from 'next/image';
import {
  BirthField,
  ClubField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/signupForm';
import HeaderBar from '@/components/organism/signupForm/HeaderBar/HeaderBar';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <HeaderBar title="회원 가입" backBtn />

      <form action="" className="flex flex-1 flex-col overflow-scroll no-scrollbar">
        <div className="w-full px-[20px] py-[24px] flex flex-1 flex-col items-center gap-[24px]">
          <ProfileField />
          <PhoneField />
          <PasswordField />
          <NameField />
          <GenderField />
          <BirthField />
          <ClubField />

          <div className="w-full py-[20px]">
            <Button label="회원 가입" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
