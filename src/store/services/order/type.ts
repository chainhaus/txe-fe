import { Event } from '@app/types/event';
import { Ticket } from '@app/types/ticket';
import { User } from '@app/types/user';

export type CreateOrderBody = {
  event: Event;
  ticket: Ticket;
  customer: User;
};

export type CreateOrderPayload = {
  event_id: number;
  ticket_id: number;
  customer_id: number;
};

export type CancelOrderPayload = {
  id: number;
  valid: boolean;
};

export type FetchOrderParams = {
  eventId?: number;
};
