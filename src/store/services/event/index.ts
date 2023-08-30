import { createApi } from '@reduxjs/toolkit/query/react';
import fetchBaseQuery from '../../base-query';
import type { Event } from '@app/types/event';

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery,
  endpoints: (builder) => ({
    fetchEvents: builder.query<Event[], {}>({
      query: () => ({ url: 'event' }),
    }),
  }),
});

export const { useFetchEventsQuery } = eventApi;
