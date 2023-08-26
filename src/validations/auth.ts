import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const authValidation = yupResolver(
  yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  }),
);

export const forgotPasswordValidation = yupResolver(
  yup.object({
    email: yup.string().required(),
  }),
);

export const registerValidation = yupResolver(
  yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  }),
);
