import { FieldErrors, UseFormRegister } from 'react-hook-form';
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
import { SignUpFormValues } from './SignUpForm';

export function SignUpFormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<SignUpFormValues>;
  isValid: boolean;
  errors: FieldErrors<SignUpFormValues>;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center gap-[24px] px-[20px] py-[24px]">
        <ProfileField />

        <PhoneField register={register} errors={errors} />
        <PasswordField register={register} errors={errors} />
        <NameField register={register} errors={errors} />
        <GenderField />
        <BirthField register={register} errors={errors} />
        <ClubField />

        <div className="w-full py-[20px]">
          <Button label="회원 가입" type="submit" disabled={pending || !isValid} />
        </div>
      </div>
    </>
  );
}
