import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from '@app/types/user';
import fetchBaseQuery from '../../base-query';
import type {
  SigninPayload,
  SigninResponse,
  SignupPayload,
  ForgotPasswordPayload,
  ResetPasswordBody,
} from './type';
import type { ErrorResponse } from '../type';
import { setLogin } from '../../reducers/auth';
import { openInform } from '../../reducers/inform';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<User, SignupPayload>({
      query(body) {
        return {
          url: `auth/signup`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          dispatch(openInform({ show: true, type: 'success', message: 'Register successfully.' }));
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
    }),
    signin: builder.mutation<SigninResponse, SigninPayload>({
      query(body) {
        return {
          url: `auth/signin`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setLogin(data));
          dispatch(openInform({ show: true, type: 'success', message: 'Sign in successfully.' }));
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
    }),

    forgotPassword: builder.mutation<User, ForgotPasswordPayload>({
      query(body) {
        return {
          url: `auth/forgot-password`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            openInform({
              show: true,
              type: 'success',
              message: 'We sent your an email to reset your password.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
    }),
    resetPassword: builder.mutation<User, ResetPasswordBody>({
      query(body) {
        return {
          url: `auth/reset-password`,
          method: 'POST',
          body: {
            password: body.password,
            confirm_password: body.confirm_password,
          },
          headers: {
            authorization: `Bearer ${body.token}`,
          },
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            openInform({
              show: true,
              type: 'success',
              message: 'Reset password successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
    }),
  }),
});

export const {
  useSigninMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSignupMutation,
} = authApi;
