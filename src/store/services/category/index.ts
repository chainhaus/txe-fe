import { createApi } from '@reduxjs/toolkit/query/react';
import type { Category } from '@app/types/category';
import fetchBaseQuery from '../../base-query';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], {}>({
      query: () => 'main/allCategories',
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
