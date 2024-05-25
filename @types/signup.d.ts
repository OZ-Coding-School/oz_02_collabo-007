export interface SignUpFormValues {
  imageFile: string;
  phone: string;
  password: string;
  confirmPassword: string;
  username: string;
  gender: string;
  birth: string;
  club: string;
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
      status: 'alert';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;
