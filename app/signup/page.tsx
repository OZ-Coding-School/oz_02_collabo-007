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
import HeaderBar from '@/components/organism/signupForm/HeaderBar/HeaderBar';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full h-full relative">
      <HeaderBar title="회원 가입">
        <Link href={'#'}>
          <Image src={chevronIcon} alt="back" width={24} height={24} />
        </Link>
      </HeaderBar>

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
