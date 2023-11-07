import { createApi } from '@reduxjs/toolkit/query/react';
import type { Affiliate } from '@app/types/affiliate';
import fetchBaseQuery from '../../base-query';
import type { CreateAffiliatePayload, UpdateAffiliatePayload } from './type';
import type { ErrorResponse } from '../type';
import { openInform } from '../../reducers/inform';

export const affiliateApi = createApi({
  reducerPath: 'affiliateApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Partners'],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    fetchPartners: builder.query<Affiliate[], {}>({
      query: (params) => ({ url: `partnership`, params }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Partners', id }) as const),
              { type: 'Partners', id: 'LIST' },
            ]
          : [{ type: 'Partners', id: 'LIST' }],
    }),
    createPartner: builder.mutation<Affiliate, CreateAffiliatePayload>({
      query(body) {
        return {
          url: `affiliate`,
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
              message: 'Create Partner Successfully',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: [{ type: 'Partners', id: 'LIST' }],
    }),
    updatePartner: builder.mutation<Affiliate, UpdateAffiliatePayload>({
      query({ id, ...body }) {
        return {
          url: `affiliate/${id}`,
          method: 'PATCH',
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
              message: 'Update Partner successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Partners', id }],
    }),
  }),
});

export const {
  useCreatePartnerMutation,
  useFetchPartnersQuery,
  useLazyFetchPartnersQuery,
  useUpdatePartnerMutation,
} = affiliateApi;
