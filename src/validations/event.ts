import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const eventValidation = yupResolver(
  yup.object({
    title: yup.string().required(),
    date: yup.date().required(),
    start_time: yup.date().required(),
    end_time: yup.date().required(),
    location: yup.string().required(),
  }),
);
