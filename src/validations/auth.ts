import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const authValidation = yupResolver(
  yup.object({
    email_address: yup.string().required(),
    password: yup.string().required(),
  }),
);

export const forgotPasswordValidation = yupResolver(
  yup.object({
    email_address: yup.string().required(),
  }),
);

export const registerValidation = yupResolver(
  yup.object({
    name: yup.string().required(),
    email_address: yup.string().required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
);

export const resetPasswordValidation = yupResolver(
  yup.object({
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
);
