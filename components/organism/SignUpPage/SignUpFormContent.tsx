'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/core/Button/Button';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  BirthField,
  ClubField,
  ConfirmPasswordField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/SignUpPage';
import { useFormContext } from 'react-hook-form';
import type { ClubSearchData } from '@/@types/club';
import type { UserData } from '@/@types/user';

export interface SignUpFormContentProps {
  clubList: ClubSearchData[];
  userData?: UserData;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const SignUpFormContent: FC<SignUpFormContentProps> = ({
  clubList,
  userData = null,
  setIsOpen,
}) => {
  const { pending } = useFormStatus();
  const [isUnique, setIsUnique] = useState(false);
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
        <ProfileField
          currentImg={userData?.imageUrl ? [userData?.imageUrl] : undefined}
        />
        <PhoneField
          isUnique={isUnique}
          setIsUnique={setIsUnique}
          phoneData={userData?.phone as string}
        />
        {userData && setIsOpen ? (
          <div className="flex w-full items-center justify-between text-sub-headline-2">
            <div>비밀번호</div>
            <div>
              <Button
                label="비밀번호 변경"
                variant="tertiary"
                size="sm"
                type="button"
                onClick={() => setIsOpen(() => true)}
              />
            </div>
          </div>
        ) : (
          <>
            <PasswordField />
            <ConfirmPasswordField />
          </>
        )}
        <NameField nameData={userData?.username as string} />
        <GenderField exitGender={userData?.gender} />
        <BirthField birthData={userData?.birth as number} />
        <ClubField clubList={clubList} clubData={userData?.club} />

        <div className="w-full py-[20px]">
          {userData ? (
            <Button label="완료" type="submit" disabled={pending || !isValid} />
          ) : (
            <Button
              label="회원 가입"
              type="submit"
              disabled={!isUnique || pending || !isValid}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpFormContent;
