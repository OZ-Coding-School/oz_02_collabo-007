export interface SignInFormValues {
  phone: string;
  password: string;
}

export type SignInState =
  | {
      status: 'success';
      message: string;
      token: string;
    }
  | {
      status: 'error';
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;
