import { createApi } from '@reduxjs/toolkit/query/react';
import type { User } from '@app/types/user';
import fetchBaseQuery from '../../base-query';
import type { GetClientParams, EventChangeStatusPayload, GenerateKeyPayload } from './type';
import type { ErrorResponse } from '../type';
import { openInform } from '../../reducers/inform';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Clients'],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    fetchClients: builder.query<User[], GetClientParams>({
      query: (params) => ({ url: `client`, params }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Clients', id }) as const),
              { type: 'Clients', id: 'LIST' },
            ]
          : [{ type: 'Clients', id: 'LIST' }],
    }),
    generateKey: builder.mutation<Event, GenerateKeyPayload>({
      query(body) {
        return {
          url: `client/generate-key/${body.id}`,
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
              message: 'Generate Key Successfully',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: [{ type: 'Clients', id: 'LIST' }],
    }),
    changeStatusClient: builder.mutation<Event, EventChangeStatusPayload>({
      query({ id, ...body }) {
        return {
          url: `client/${id}`,
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
              message: 'Change client status successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Clients', id }],
    }),
  }),
});

export const {
  useChangeStatusClientMutation,
  useFetchClientsQuery,
  useGenerateKeyMutation,
  useLazyFetchClientsQuery,
} = clientApi;
