import React from 'react';
import Button from '@/components/core/Button/Button';
import {
  BirthField,
  ClubField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/SignupForm';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';

const page = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <HeaderBar title="회원 가입" backBtn />

      <form action="" className="no-scrollbar flex flex-1 flex-col overflow-scroll">
        <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
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
