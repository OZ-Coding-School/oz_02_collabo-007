'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/core/Button/Button';
import type { SignUpFormContentProps } from '@/@types/signup';
import { FC } from 'react';
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

export const SignUpFormContent: FC<SignUpFormContentProps> = ({
  register,
  isValid,
  errors,
  setValue,
  clubList,
  userData = null,
  setIsOpen,
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
        <ProfileField
          currentImg={userData?.imageUrl ? [userData?.imageUrl] : undefined}
        />

        <PhoneField
          register={register}
          errors={errors}
          setValue={setValue}
          phoneData={userData?.phone!}
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
            <PasswordField register={register} errors={errors} />
            <ConfirmPasswordField register={register} errors={errors} />
          </>
        )}

        <NameField register={register} errors={errors} nameData={userData?.username!} />
        <GenderField exitGender={userData?.gender} />
        <BirthField register={register} errors={errors} birthData={userData?.birth!} />
        <ClubField clubList={clubList} clubData={userData?.club} />

        <div className="w-full py-[20px]">
          {userData ? (
            <Button label="완료" type="submit" disabled={pending || !isValid} />
          ) : (
            <Button label="회원 가입" type="submit" disabled={pending || !isValid} />
          )}
        </div>
      </div>
    </>
  );
};
