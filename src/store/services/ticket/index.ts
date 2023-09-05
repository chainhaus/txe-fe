import { createApi } from '@reduxjs/toolkit/query/react';
import type { Ticket } from '@app/types/ticket';
import fetchBaseQuery from '../../base-query';
import type { CreateTicketPayload, DisableEventPayload } from './type';
import type { ErrorResponse } from '../type';
import { openInform } from '../../reducers/inform';

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Tickets'],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    fetchTickets: builder.query<Ticket[], { eventId?: string }>({
      query: ({ eventId }) => ({ url: `ticket`, params: { eventId } }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tickets', id }) as const),
              { type: 'Tickets', id: 'LIST' },
            ]
          : [{ type: 'Tickets', id: 'LIST' }],
    }),
    createTicket: builder.mutation<Event, CreateTicketPayload>({
      query(body) {
        return {
          url: `ticket`,
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
              message: 'Created Ticket Successfully',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: [{ type: 'Tickets', id: 'LIST' }],
    }),
    disableTicket: builder.mutation<Event, DisableEventPayload>({
      query({ id, ...body }) {
        return {
          url: `ticket/${id}`,
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
              message: 'Disabled Ticket successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Tickets', id }],
    }),
  }),
});

export const { useCreateTicketMutation, useDisableTicketMutation, useFetchTicketsQuery } =
  ticketApi;
