import { createApi } from '@reduxjs/toolkit/query/react';
import type { Event } from '@app/types/event';
import type { StatusEventPayload, CreateEventPayload, UpdateEventPayload } from './type';
import type { ErrorResponse } from '../type';
import fetchBaseQuery from '../../base-query';
import { openInform } from '../../reducers/inform';
import { format } from 'date-fns';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery,
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    fetchEvents: builder.query<Event[], {}>({
      query: () => ({ url: 'event' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Events', id }) as const),
              { type: 'Events', id: 'LIST' },
            ]
          : [{ type: 'Events', id: 'LIST' }],
    }),
    getEvent: builder.query<Event, string>({
      query: (id) => ({ url: `event/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Events', id }],
    }),
    createEvent: builder.mutation<Event, CreateEventPayload>({
      query(body) {
        return {
          url: `event`,
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
              message: 'Created Event Successfully',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: [{ type: 'Events', id: 'LIST' }],
    }),
    updateEvent: builder.mutation<Event, UpdateEventPayload>({
      query({ id, ...body }) {
        return {
          url: `event/${id}`,
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
              message: 'Updated Event successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Events', id }],
    }),
    disableEvent: builder.mutation<Event, StatusEventPayload>({
      query(body) {
        return {
          url: `event/disable/${body.id}`,
          method: 'PUT',
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
              message: 'Disabled Event successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Events', id }],
    }),
    enableEvent: builder.mutation<Event, StatusEventPayload>({
      query(body) {
        return {
          url: `event/enable/${body.id}`,
          method: 'PUT',
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
              message: 'Enabled Event successfully.',
            }),
          );
        } catch (err) {
          const { error } = err as ErrorResponse;
          dispatch(openInform({ show: true, type: 'danger', message: error?.data?.message || '' }));
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Events', id }],
    }),
  }),
});

export const {
  useFetchEventsQuery,
  useCreateEventMutation,
  useDisableEventMutation,
  useEnableEventMutation,
  useGetEventQuery,
  useUpdateEventMutation,
} = eventApi;
