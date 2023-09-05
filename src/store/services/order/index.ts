import { createApi } from '@reduxjs/toolkit/query/react';
import type { Order } from '@app/types/order';
import fetchBaseQuery from '../../base-query';
import type { CreateOrderPayload, CancelOrderPayload, FetchOrderParams } from './type';
import type { ErrorResponse } from '../type';
import { openInform } from '../../reducers/inform';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Orders'],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    fetchOrders: builder.query<Order[], FetchOrderParams>({
      query: (params) => ({ url: `order`, params }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Orders', id }) as const),
              { type: 'Orders', id: 'LIST' },
            ]
          : [{ type: 'Orders', id: 'LIST' }],
    }),
    createOrder: builder.mutation<Order, CreateOrderPayload>({
      query(body) {
        return {
          url: `order`,
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
              message: 'Created Order Successfully',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
    updateOrder: builder.mutation<Order, CancelOrderPayload>({
      query({ id, ...body }) {
        return {
          url: `order/${id}`,
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
              message: 'Change order status successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Orders', id }],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useFetchOrdersQuery,
  useLazyFetchOrdersQuery,
} = orderApi;
