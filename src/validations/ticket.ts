import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const ticketValidation = yupResolver(
  yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
  }),
);
