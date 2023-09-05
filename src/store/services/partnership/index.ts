import { createApi } from '@reduxjs/toolkit/query/react';
import type { PartnerShip } from '@app/types/partnerShip';
import fetchBaseQuery from '../../base-query';
import type { CreatePartnerPayload, UpdatePartnerPayload } from './type';
import type { ErrorResponse } from '../type';
import { openInform } from '../../reducers/inform';

export const partnerShipApi = createApi({
  reducerPath: 'partnerShipApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Partners'],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    fetchPartners: builder.query<PartnerShip[], {}>({
      query: (params) => ({ url: `partnership`, params }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Partners', id }) as const),
              { type: 'Partners', id: 'LIST' },
            ]
          : [{ type: 'Partners', id: 'LIST' }],
    }),
    createPartner: builder.mutation<PartnerShip, CreatePartnerPayload>({
      query(body) {
        return {
          url: `partnership`,
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
    updatePartner: builder.mutation<PartnerShip, UpdatePartnerPayload>({
      query({ id, ...body }) {
        return {
          url: `partnership/${id}`,
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
} = partnerShipApi;
