export interface PasswordValues {
  prevPassword: string;
  changedPassword: string;
  confirmPassword: string;
}

export type PasswordState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
      errors?:
        | {
            path: string;
            message: string;
          }[]
        | undefined;
    }
  | {
      status: 'totalError';
      message: string;
    }
  | null;
