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
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
        <ProfileField />

        <PhoneField register={register} errors={errors} setValue={setValue} />
        <PasswordField register={register} errors={errors} />
        <ConfirmPasswordField register={register} errors={errors} />
        <NameField register={register} errors={errors} />
        <GenderField />
        <BirthField register={register} errors={errors} />
        <ClubField clubList={clubList} />

        <div className="w-full py-[20px]">
          <Button label="회원 가입" type="submit" disabled={pending || !isValid} />
        </div>
      </div>
    </>
  );
};
