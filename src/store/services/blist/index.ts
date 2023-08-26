import { createApi } from '@reduxjs/toolkit/query/react';
import type { Post } from '@app/types/post';
import fetchBaseQuery from '../../base-query';
import type { PostBlistPayload } from './type';

export const blistApi = createApi({
  reducerPath: 'blistApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    postBlistBoard: builder.mutation<Post, PostBlistPayload>({
      query(body) {
        return {
          url: `main/postBlistBoard`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { usePostBlistBoardMutation } = blistApi;
