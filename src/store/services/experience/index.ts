import { createApi } from '@reduxjs/toolkit/query/react';
import type { CommonResponse } from '../type';
import type { ExperienceDetailReponse } from './type';
import fetchBaseQuery from '../../base-query';

export const experienceApi = createApi({
  reducerPath: 'experienceApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    getExperience: builder.query<CommonResponse<ExperienceDetailReponse>, string>({
      query: (id) => `main/experienceDetail/${id}`,
      transformResponse: (response: { data: CommonResponse<ExperienceDetailReponse> }) =>
        response.data,
    }),
  }),
});

export const { useGetExperienceQuery } = experienceApi;
