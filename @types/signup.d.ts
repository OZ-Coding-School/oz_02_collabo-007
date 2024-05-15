import { StaticImageData } from 'next/image';
import { UserData } from './user';

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
  clubList: SimpleClubData[];
  userData?: UserData;
}

export type SignUpState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | {
      status: 'totalError';
      message: string;
    }
  | null;
