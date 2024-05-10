export interface SignUpFormValues {
  imageFile: StaticImageData;
  phone: string;
  password: string;
  confirmPassword: string;
  username: string;
  gender: string;
  birth: string;
  club: string;
}

export interface SignUpFormContentProps {
  register: UseFormRegister<SignUpFormValues>;
  isValid: boolean;
  errors: FieldErrors<SignUpFormValues>;
  setValue: UseFormSetValue<SignUpFormValues>;
  clubList: ClubProps[];
}
