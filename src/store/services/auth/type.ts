import { User } from '@app/types/user';

export type SigninPayload = {
  email: string;
  password: string;
};

export interface SigninResponse extends User {
  token: string;
}

export type SignupPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  dob: string;
  gender: string;
  role: string;
  creator_type: string;
  device_name: string;
  social_id: string;
  social_type: string;
  device_token: string;
  phonecode: string;
};

export type VerifyOtpPayload = {
  id: string;
  opt: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  email: string;
  password: string;
  confirm_password: string;
};

export type UpdateProfilePayload = {
  userid: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  bio: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  linkedin_url: string;
  website_url: string;
  profile_img: string;
  identity_type: string;
  identity_document: string;
};

export type SendFeedbackPayload = { user_id: string; feedback_options: string; message: string };

export type VerifyIdentityPayload = { userid: string; identity_document: string };

export type GPSCheckPayload = {
  user_id: string;
  auto_checkin: string;
  manual_checkin: string;
  auto_track: string;
  emergency_name: string;
  emergency_phone: string;
  emergency_email: string;
};

export type SwitchCreatorPayload = { user_id: string; type: string };
export type SwitchUserPayload = { user_id: string };
export type SigninBySocialPayload = {
  social_type: string;
  social_id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  dob: string;
  gender: string;
  role: string;
  creator_type: string;
  device_name: string;
  device_token: string;
};

export type VerifyUserIdentityPayload = { userid: string; identity_document: string };
export type VerifyBusinessIdentityPayload = {
  userid: string;
  identity_document: string;
  image: string;
};
