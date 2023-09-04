import { User } from '@app/types/user';

export type SigninPayload = {
  email_address: string;
  password: string;
};

export interface SigninResponse extends User {
  token: string;
  timezone?: string;
}

export type SignupPayload = {
  name: string;
  email_address: string;
  password: string;
  confirm_password: string;
};

export type ForgotPasswordPayload = {
  email_address: string;
};

export type ResetPasswordPayload = {
  password: string;
  confirm_password: string;
};

export interface ResetPasswordBody extends ResetPasswordPayload {
  token: string;
}
