import { useFormStatus } from 'react-dom';
import {
  BirthField,
  ClubField,
  GenderField,
  NameField,
  PasswordField,
  PhoneField,
  ProfileField,
} from '@/components/organism/SignupForm';
import Button from '@/components/core/Button/Button';
import ConfirmPasswordField from './ConfirmPasswordField/ConfirmPasswordField';
import type { SignUpFormContentProps } from '@/@types/signup';
import { FC } from 'react';

export const SignUpFormContent: FC<SignUpFormContentProps> = ({
  register,
  isValid,
  errors,
  setValue,
  clubList,
  userData = null,
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
        <ProfileField
          currentImg={userData?.imageUrl ? [userData?.imageUrl?.imageUrl] : undefined}
        />

        <PhoneField
          register={register}
          errors={errors}
          setValue={setValue}
          phoneData={userData?.phone!}
        />
        <PasswordField register={register} errors={errors} />
        <ConfirmPasswordField register={register} errors={errors} />
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
