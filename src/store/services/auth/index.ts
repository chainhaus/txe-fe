import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from '@app/types/user';
import fetchBaseQuery from '../../base-query';
import type {
  SigninPayload,
  SigninResponse,
  SignupPayload,
  VerifyOtpPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  UpdateProfilePayload,
  SendFeedbackPayload,
  VerifyIdentityPayload,
  GPSCheckPayload,
  SwitchCreatorPayload,
  SwitchUserPayload,
  SigninBySocialPayload,
  VerifyUserIdentityPayload,
  VerifyBusinessIdentityPayload,
} from './type';
import type { CommonResponse } from '../type';
import { setLogin, logout } from '../../reducers/auth';
import { openInform } from '../../reducers/inform';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation<CommonResponse<User>, SignupPayload>({
      query(body) {
        return {
          url: `auth/signup`,
          method: 'POST',
          body,
        };
      },
    }),
    signin: builder.mutation<CommonResponse<SigninResponse>, SigninPayload>({
      query(body) {
        return {
          url: `auth/login`,
          method: 'POST',
          body,
        };
      },
      transformResponse: (response: CommonResponse<SigninResponse>) => response,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        if (data.data) {
          dispatch(setLogin(data.data));
          dispatch(openInform({ show: true, type: 'success', message: data?.message || '' }));
        } else {
          dispatch(openInform({ show: true, type: 'error', message: data?.message || '' }));
        }
      },
    }),
    signinBySocial: builder.mutation<User, SigninBySocialPayload>({
      query(body) {
        return {
          url: `auth/socialLogin`,
          method: 'POST',
          body,
        };
      },
    }),
    otpVerify: builder.mutation<User, VerifyOtpPayload>({
      query(body) {
        return {
          url: `auth/verifyOtp`,
          method: 'POST',
          body,
        };
      },
    }),
    forgotPassword: builder.mutation<CommonResponse<User>, ForgotPasswordPayload>({
      query(body) {
        return {
          url: `auth/forgot_password`,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        if (data.success) {
          dispatch(openInform({ show: true, type: 'success', message: data?.message || '' }));
        } else {
          dispatch(openInform({ show: true, type: 'error', message: data?.message || '' }));
        }
      },
    }),
    resetPassword: builder.mutation<User, ResetPasswordPayload>({
      query(body) {
        return {
          url: `auth/reset_password?email=${body.email}`,
          method: 'POST',
          body,
        };
      },
    }),
    getProfile: builder.query<User, string>({
      query: (id) => 'auth/getProfile',
    }),
    updateProfile: builder.mutation<User, UpdateProfilePayload>({
      query(body) {
        return {
          url: `auth/updateProfile`,
          method: 'POST',
          body,
        };
      },
    }),
    sendFeedback: builder.mutation<User, SendFeedbackPayload>({
      query(body) {
        return {
          url: `auth/send_feedback`,
          method: 'POST',
          body,
        };
      },
    }),
    verifyIdentity: builder.mutation<User, VerifyIdentityPayload>({
      query(body) {
        return {
          url: `auth/send_feedback`,
          method: 'POST',
          body,
        };
      },
    }),
    gpsCheck: builder.mutation<User, GPSCheckPayload>({
      query(body) {
        return {
          url: `auth/gpsCheck`,
          method: 'POST',
          body,
        };
      },
    }),
    switchCreator: builder.mutation<User, SwitchCreatorPayload>({
      query(body) {
        return {
          url: `auth/switchToCreatorProfile`,
          method: 'POST',
          body,
        };
      },
    }),
    switchUser: builder.mutation<User, SwitchUserPayload>({
      query(body) {
        return {
          url: `auth/switchToUserProfile`,
          method: 'POST',
          body,
        };
      },
    }),
    logout: builder.mutation<CommonResponse<User>, string>({
      query(user_id) {
        return {
          url: `auth/logout`,
          method: 'POST',
          body: { user_id },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        if (!data.error) {
          dispatch(logout());
        }
      },
    }),
    verifyUserIdentity: builder.mutation<User, VerifyUserIdentityPayload>({
      query(body) {
        return {
          url: `auth/verifyUserIdentity`,
          method: 'POST',
          body,
        };
      },
    }),
    verifyBusinessIdentity: builder.mutation<User, VerifyBusinessIdentityPayload>({
      query(body) {
        return {
          url: `auth/verifyBusinessIdentity`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const {
  useSigninMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useSignupMutation,
} = authApi;
