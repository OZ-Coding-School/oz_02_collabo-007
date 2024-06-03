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
import LoadingTennisBall from '@/components/core/LoadingTennisBall/LoadingTennisBall';

export interface SignUpFormContentProps {
  clubList: ClubSearchData[];
  userData?: UserData;
  setIsChangePassword?: Dispatch<SetStateAction<boolean>>;
}

const SignUpFormContent: FC<SignUpFormContentProps> = ({
  clubList,
  userData = null,
  setIsChangePassword,
}) => {
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);
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
          phoneData={userData?.phone}
        />
        {userData && setIsChangePassword ? (
          <div className="flex w-full items-center justify-between text-sub-headline-2">
            <div>비밀번호</div>
            <div>
              <Button
                label="비밀번호 변경"
                variant="tertiary"
                size="sm"
                type="button"
                onClick={() => setIsChangePassword(() => true)}
              />
            </div>
          </div>
        ) : (
          <>
            <PasswordField />
            <ConfirmPasswordField />
          </>
        )}
        <NameField nameData={userData?.username} />
        <GenderField exitGender={userData?.gender} />
        <BirthField birthData={userData?.birth} />
        <ClubField
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          clubList={clubList}
          clubData={userData?.club}
        />

        <div className="w-full py-[20px]">
          {userData ? (
            <Button label="완료" type="submit" disabled={pending || !isValid} />
          ) : (
            <Button
              label="회원 가입"
              type="submit"
              disabled={!isUnique || pending || !isValid || isOpen}
            />
          )}
        </div>
      </div>

      {pending && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <LoadingTennisBall />
        </div>
      )}
    </>
  );
};

export default SignUpFormContent;
