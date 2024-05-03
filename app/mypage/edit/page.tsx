import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import {
  BirthField,
  ClubField,
  GenderField,
  NameField,
  PasswordField,
  ProfileField,
} from '@/components/organism/SignupForm';
import HeaderBar from '@/components/module/HeaderBar/HeaderBar';
import React from 'react';
import testImage from '@/public/tennis.jpeg';

// TEST
const TEST_DATA = {
  image: testImage,
  phone: '010-1234-1234',
  name: '김영희',
  gender: 'female',
  birth: 1997,
  clubId: '1',
};

const page = () => {
  const { image, phone, name, gender, birth, clubId } = TEST_DATA;

  return (
    <div className="relative flex h-full w-full flex-col">
      <HeaderBar title="프로필 수정" backBtn />

      <form action="" className="no-scrollbar flex flex-1 flex-col overflow-scroll">
        <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
          <ProfileField currentImg={[image.src]} />
          <InputModule
            label="휴대폰 번호"
            placeholder="01012345678"
            type="text"
            name="phoneNumber"
            variant="display"
            value={phone}
            readOnly
          />
          <PasswordField />
          <NameField existName={name} />
          <GenderField exitGender={gender} />
          <BirthField existBirth={birth} />
          <ClubField clubId={clubId} />

          <div className="w-full py-[20px]">
            <Button label="완료" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
